import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoinApi } from "../api";
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 4px;
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

export default function Home() {
  const { isLoading, data } = useQuery<CoinTypes[]>("Coins", CoinApi);

  return (
    <Box>
      {isLoading ? (
        "로딩중!"
      ) : (
        <CoinList>
          {data?.splice(0, 10).map((item) => (
            <Coin key={item.id}>
              <Link to={{ pathname: `/${item.id}`, state: { id: item.id } }}>
                {item.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Box>
  );
}

/*
export async function CoinApi() {
    return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
      res.json()
    );
  }
  
  export async function CoinInfo(coinId: string) {
    return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((res) =>
      res.json()
    );
  }
  
  export async function CoinPrice(coinId: string) {
    return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((res) =>
      res.json()
    );
  }*/
