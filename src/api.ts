export async function Coinfetch() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}

export async function Coininfo(coinid: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`).then((res) =>
    res.json()
  );
}

export async function Coinprice(coinid: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinid}`).then((res) =>
    res.json()
  );
} //https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
