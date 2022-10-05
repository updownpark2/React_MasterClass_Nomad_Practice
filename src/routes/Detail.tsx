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
import { isTemplateExpression } from "typescript";
import { DetailApi } from "../api";
import Chart from "./Chart";
import Price from "./Price";

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

const SPAN = styled.p`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
`;

export default function Detail() {
  const { Second } = useParams<{ Second: string }>();

  const { isLoading, data } = useQuery<infoData>([Second, "Info"], () =>
    DetailApi(Second)
  );

  const ChartCheck = useRouteMatch(`/:${Second}/Chart`);
  const PriceCheck = useRouteMatch(`/:${Second}/Price`);

  return (
    <Container>
      <Header>
        {" "}
        <Link
          to={ChartCheck !== null || PriceCheck !== null ? `/${Second}` : `/`}
        >
          뒤로가기
        </Link>{" "}
        {Second}
      </Header>
      {isLoading ? (
        <Header>Loading...</Header>
      ) : (
        <SPAN>{data?.description}</SPAN>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Link to={`/${Second}/Chart`}>Chart</Link>
        <Link to={`/${Second}/Price`}>Price</Link>
      </div>
      <Switch>
        <Route path="/:Second/Chart">
          <Chart />
        </Route>
        <Route path="/:Second/Price">
          <Price Second={Second} />
        </Route>
      </Switch>
    </Container>
  );
}
/*
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
*/
