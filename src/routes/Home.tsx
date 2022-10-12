import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Home() {
  const { isLoading, data } = useQuery<CoinData[]>("First", fetchCoins);

  return (
    <div>
      <h1>Coin!</h1>
      {isLoading ? (
        <h2>로딩중입니다^^</h2>
      ) : (
        <ul>
          {data?.slice(0, 10).map((item) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/${item.id}`,
                  state: { symbol: item.symbol, rank: item.rank },
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
