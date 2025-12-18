import { useEffect, useState } from "react";
import "./CryptoTracking.css";

//Using /ping endpoint
//https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=CG-BQaP3tWqquD6rdc2uAVgbEPM


function CryptoTracking(){
    const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <ul className="coin-list">
      {coins.map((coin) => (
        <li key={coin.id}>
          <img src={coin.image} alt={coin.name} width="20" />
          {coin.name} – ${coin.current_price}
        </li>
      ))}
    </ul>
  );
}
export default CryptoTracking;