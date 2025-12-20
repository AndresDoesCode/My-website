import { useEffect, useState } from "react";
import "./CryptoTracking.css";

function CryptoTracking(){
  const [coins, setCoins] = useState([]);
  const [name, setName] = useState("");

  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h&precision=2')
      .then(res => res.json())
      .then(data => setCoins(data))
  }, []);

  function handleNameChange({target}){
    setName(target.value);
  }

  return (
    <>
    <div className="container3">
      <div className="title2">
        <h1 className="CryptoTrackingFont">Coin Search</h1>
      </div>
      <div className="crypto-bottom">
        <div className="capsule3">
          <div className="search">
            <div className="searchTitle">
              <h1>Filter Results</h1>
            </div>
            <input className="searchBar" value={name} onChange={handleNameChange} placeholder="Filter Results"/>
          </div>
          <div className="boxList">
            {coins.map((coin)=>
              coin.name.toLowerCase().includes(name.toLowerCase()) ? (
                <div className="box">
                  <img src={coin.image} alt={coin.name} width="20" />
                    {coin.name} – ${coin.current_price}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default CryptoTracking;