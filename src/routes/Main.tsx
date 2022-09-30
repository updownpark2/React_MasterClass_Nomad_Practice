import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Coinfetch } from "../api";

const BigDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  margin-top: 20px;
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

export default function Main() {
  const { isLoading, data } = useQuery<CoinTypes[]>("Maindata", Coinfetch);

  /*const [coin, setCoin] = useState<CoinTypes[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const CallApi = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await res.json();
      //불러왔다. 그럼 이제 state에 저장해보자
      setCoin(json.splice(0, 10)); //Coin state에 받아온 데이터 배열을 집어 넣어준다.
      setLoading((current) => !current);
    };
    CallApi(); //API를 호출했으니 이제 State에 저장된 데이터를 이용하여 화면에 그려준다.
  }, []);*/
  return (
    <BigDiv>
      {isLoading ? (
        <h1>로딩중🐸</h1>
      ) : (
        <CoinList>
          {data?.splice(0, 20).map((item) => (
            <Coin key={item.id}>
              <Link
                to={{
                  pathname: `/${item.id}`,
                  state: { name: item.name, symbol: item.symbol },
                }}
              >
                {item.id}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </BigDiv>
  );
}
