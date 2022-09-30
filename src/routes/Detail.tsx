import { info } from "console";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Coininfo, Coinprice } from "../api";
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
  const { coinid } = useParams<{ coinid: string }>();
  const { state } = useLocation<Statetypes>();

  //`https://api.coinpaprika.com/v1/coins/${coinid}`
  //`https://api.coinpaprika.com/v1/tickers/${coinid}`

  const { isLoading: Info, data: Infodata } = useQuery<infoData>(
    [coinid, "Info"],
    () => Coininfo(coinid)
  );
  const { isLoading: Price, data: Pricedata } = useQuery<priceData>(
    [coinid, "Price"],
    () => Coinprice(coinid)
  );

  //여기서 이제 URL변수를 받아들여야한다. 일단 Detail의 주소는 변수명으로 확정이 되었기 때문에 그 변수명을 받아줘야한다.

  const BigDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const What = useLocation();

  const What2 = useRouteMatch();

  const isLoading = Info || Price;

  return (
    <BigDiv>
      {isLoading ? (
        <h2 style={{ textAlign: "center" }}>로딩중</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{Infodata?.id}</h2>
          <h3>{Pricedata?.quotes.USD.ath_price} 달러!</h3>
          <Link
            to={{
              pathname: `/${coinid}/Test1`,
              state: { rank: Pricedata?.rank },
            }}
          >
            Test1으로!
          </Link>
          <Link
            to={{
              pathname: `/${coinid}/Test2`,
              state: { rank: Pricedata?.rank },
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
