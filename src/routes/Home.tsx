import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoinApi } from "../api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ThemeChange } from "../atoms";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const CoinList = styled.ul`
  margin-top: 30px;
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
`;

const IMG = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
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
  const { isLoading, data } = useQuery<CoinTypes[]>("CoinApi", CoinApi); //useQuery는 isLoading 과 data를 반환
  const ChangeTheme = useSetRecoilState(ThemeChange);

  return (
    <Container>
      <button
        onClick={() => {
          ChangeTheme((current) => !current);
        }}
      >
        변화시키기
      </button>
      {isLoading ? (
        <Header>loading...</Header>
      ) : (
        <CoinList>
          {data?.slice(0, 20).map((item) => (
            <Coin key={item.id}>
              <Link
                to={{ pathname: `/${item.id}`, state: { name: item.name } }}
              >
                <IMG
                  src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                />
                {item.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
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
