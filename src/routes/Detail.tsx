import { info } from "console";
import { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Test1 from "./Test1";
import Test2 from "./Test2";

interface ITag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface Statetypes {
  name: string;
  symbol: string;
}
interface infoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: ITag[];
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface USD {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}
interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
export default function Detail() {
  const [load, setLoad] = useState(true);
  const [coininfo, setCoinnfo] = useState<infoData>();
  const [coinprice, setCoinprice] = useState<priceData>();
  const { coinid } = useParams<{ coinid: string }>();
  const { state } = useLocation<Statetypes>();

  const InfoApi = async () => {
    const Info = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`)
    ).json();
    setCoinnfo(Info);
    setLoad(false);
  };
  const PriceApi = async () => {
    const Price = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinid}`)
    ).json();
    setCoinprice(Price);
    setLoad(false);
  };

  useEffect(() => {
    InfoApi();
    PriceApi();
  }, []);

  //여기서 이제 URL변수를 받아들여야한다. 일단 Detail의 주소는 변수명으로 확정이 되었기 때문에 그 변수명을 받아줘야한다.

  const BigDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const What = useLocation();
  console.log(What);
  const What2 = useRouteMatch();
  console.log(What2);

  return (
    <BigDiv>
      {load ? (
        <h2 style={{ textAlign: "center" }}>로딩중</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{coininfo?.id}</h2>
          <h3>{coinprice?.quotes.USD.ath_price} 달러!</h3>
          <Link
            to={{
              pathname: `/${coinid}/Test1`,
              state: { rank: coininfo?.rank },
            }}
          >
            Test1으로!
          </Link>
          <Link
            to={{
              pathname: `/${coinid}/Test2`,
              state: { rank: coininfo?.rank },
            }}
          >
            Test2로!
          </Link>

          <Switch>
            <Route path={`/${coinid}/Test1`}>
              <Test1 />
            </Route>
            <Route path={`/${coinid}/Test2`}>
              <Test2 />
            </Route>
          </Switch>
        </div>
      )}
    </BigDiv>
  );
}
