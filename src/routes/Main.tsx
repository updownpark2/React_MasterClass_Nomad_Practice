import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoinApi } from "../api";

const Box = styled.div`
  margin-top: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  text-align: center;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 20px;
`;

interface CoinTypes {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

//데이터를 fetch해와야함
export default function Main() {
  const { isLoading, data } = useQuery<CoinTypes[]>("coinAPI", CoinApi);

  return (
    <Box>
      {isLoading ? (
        <h3>로딩중~</h3>
      ) : (
        <CoinList>
          {data?.splice(0, 30).map((item, index) => (
            <Coin key={item.id}>
              <Link
                to={{ pathname: `/${item.id}`, state: { name: item.name } }}
              >
                {item.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Box>
  );
}
