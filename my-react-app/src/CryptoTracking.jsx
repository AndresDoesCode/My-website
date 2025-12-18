import { useEffect, useState } from "react";
import "./CryptoTracking.css";

//Using /ping endpoint
//https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=CG-BQaP3tWqquD6rdc2uAVgbEPM


function CryptoTracking(){
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&precision=2&order=market_cap_desc')
      .then(res => res.json())
      .then(data => setCoins(data))
  }, []);

  return (
    <>
    <div className="container3">
      <div className="title2">
        <h1 className="CryptoTrackingFont">Coin Search</h1>
      </div>
      <div className="crypto-bottom">
        <div className="capsule3">
          <ul className="coin-list">
            {coins.map((coin)=>(
              <li key={coin.id}>
                <img src={coin.image} alt={coin.name} width="20" />
                {coin.name} – ${coin.current_price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default CryptoTracking;