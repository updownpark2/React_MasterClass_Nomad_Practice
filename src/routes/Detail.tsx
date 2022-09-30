import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { CoinInfo, CoinPrice } from "../api";
import Minus from "./Minus";
import Plus from "./Plus";

//이제 또 다른 API를 불러와야함

const Box = styled.div`
  margin-top: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Loader = styled.h2`
  text-align: center;
  color: purple;
  font-size: 36px;
`;
const Infobox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 40px;
`;
interface ITag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
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

export default function Detail() {
  const { Mainid } = useParams<{ Mainid: string }>();
  const { state } = useLocation<{ name: string }>();

  const { isLoading: Infodloading, data: Info } = useQuery<infoData>(
    [Mainid, "info"],
    () => CoinInfo(Mainid)
  );
  const { isLoading: Priceloading, data: Price } = useQuery<priceData>(
    [Mainid, "price"],
    () => CoinPrice(Mainid)
  );

  const priceMatch = useRouteMatch("/:Mainid/price"); //여기 URL에 있는지! 있으면 object를 받음
  const chartMatch = useRouteMatch("/:Mainid/chart");

  const Loading = Infodloading || Priceloading;

  return (
    <Box>
      <H1>{Mainid}</H1>
      {Loading ? (
        <Loader>로딩🌸</Loader>
      ) : (
        <div>
          <h2>{Info?.id}</h2>

          <h3>{Price?.quotes.USD.price}</h3>
        </div>
      )}

      <Link to={`/${Mainid}/Plus`}>더하기</Link>
      <Link to={`/${Mainid}/Minus`}>빼기</Link>

      <Switch>
        <Route exact path={`/${Mainid}/Plus`}>
          <Plus />
        </Route>
        <Route exact path={`/${Mainid}/Minus`}>
          <Minus />
        </Route>
      </Switch>
    </Box>
  );
}
