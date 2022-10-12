import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

interface STATE {
  symbol: string;
  rank: number;
}
interface CoinID {
  CoinId: string;
}
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
  const { CoinId } = useParams<CoinID>();
  const { state } = useLocation<STATE>();
  const { isLoading: infoloading, data: infodata } = useQuery<infoData>(
    ["Info", CoinId],
    () => fetchCoinInfo(CoinId)
  );
  const { isLoading: priceloading, data: pricedata } = useQuery<priceData>(
    ["price", CoinId],
    () => fetchCoinPrice(CoinId)
  );
  const Load = infoloading && priceloading;
  return (
    <div>
      <h1>{CoinId}</h1>
      <h2>순위 : {state.rank}</h2>
      {Load ? (
        <h3>로딩중^^</h3>
      ) : (
        <div>
          <div>
            <span>{infodata?.description}</span>
          </div>
          <div>
            <span>{pricedata?.quotes.USD.price}</span>
          </div>
        </div>
      )}
    </div>
  );
}
