export async function CoinApi() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
}
export async function DetailApi(Second: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${Second}`).then((res) =>
    res.json()
  );
}
export async function CoinPrice(Second: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${Second}`).then((res) =>
    res.json()
  );
}
