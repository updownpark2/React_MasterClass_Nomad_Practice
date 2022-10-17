import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { CAll2 } from "../apis";

const Box = styled.div``;
const Title = styled.h3`
  font-size: 48px;
  color: yellow;
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
const Load = styled.h3`
  font-size: 48px;
  color: red;
`;
export default function Detail() {
  const { COIN } = useParams<{ COIN: string }>();

  const { isLoading, data } = useQuery<infoData>("info", () => CAll2(COIN));
  console.log(isLoading);
  return (
    <Box>
      <Title>{COIN}</Title>
      {isLoading ? <h1> 로딩중</h1> : <h3>{data?.description}</h3>}
    </Box>
  );
}
