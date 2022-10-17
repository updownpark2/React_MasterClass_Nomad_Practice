export async function CAll() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
}
export async function CAll2(COIN: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${COIN}`).then((res) =>
    res.json()
  );
}
