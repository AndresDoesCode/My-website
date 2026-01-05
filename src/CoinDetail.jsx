import './CoinDetail.css'
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"

function CoinDetail(){
    const { id } = useParams()
    const [coin, setCoin] = useState(null)
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-BQaP3tWqquD6rdc2uAVgbEPM'}};
    const [error, setError] = useState(false);


    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`,options)
        .then(res => {
            if (!res.ok) throw new Error('Coin not found');
            return res.json();
        })
        .then(data => setCoin(data))
        .catch(err => setError(true));
    }, [id]);

    if (error) return <h1 className='test'>Coin Not Found or Network Error</h1>;
    if (!coin) return <h1 className='test'>Loading...</h1>;

    function formatLargeNumber(value, decimals = 2) {
        if (value < 1_000_000) {
            return value.toString();
        }

        const units = [
            { limit: 1_000_000_000_000, scale: " Trillion" },
            { limit: 1_000_000_000, scale: " Billion" },
            { limit: 1_000_000, scale: " Million" }
        ];

        for (const unit of units) {
            if (value >= unit.limit) {
            return (value / unit.limit).toFixed(decimals) + unit.scale;
            }
        }
    }

    function formatDate(value){
        let returnValue = "";
        for(let i = 0; i<10;i++){
            if(value.substring(i,i+1)==="-"){
                returnValue += "/";
            }else{
                returnValue += value.substring(i,i+1);
            }
        }
        return returnValue;
    }

    const currentPrice = coin?.market_data?.current_price?.usd ?? 0;
    const marketCap = coin?.market_data?.market_cap?.usd ?? 0;
    const marketCapRank = coin?.market_data?.market_cap_rank ?? 'N/A';
    const totalVolume = coin?.market_data?.total_volume?.usd ?? 0;
    const high24h = coin?.market_data?.high_24h?.usd ?? 0;
    const low24h = coin?.market_data?.low_24h?.usd ?? 0;
    const priceChangePercent24h = coin?.market_data?.price_change_percentage_24h ?? 0;
    const circulatingSupply = coin?.market_data?.circulating_supply ?? 0;
    const maxSupply = coin?.market_data?.max_supply ?? 0;
    const ath = coin?.market_data?.ath?.usd ?? 0;
    const athDate = coin?.market_data?.ath_date?.usd ?? 'N/A';
    const athChangePercent = coin?.market_data?.ath_change_percentage?.usd ?? 0;
    const atl = coin?.market_data?.atl?.usd ?? 0;
    const atlDate = coin?.market_data?.atl_date?.usd ?? 'N/A';
    const atlChangePercent = coin?.market_data?.atl_change_percentage?.usd ?? 0;


    return (
        <div className="coinDetailContainer">
            <div className="coinDetailLeft">
                <div className="coinDetailTop">
                    <img
                        className="coinImage"
                        src={coin.image?.large || coin.image?.small}
                        alt={coin.name}
                    />
                    <div>
                        <span className="coinName">{coin.name}</span>
                        <span className="coinSymbol">
                            ({coin.symbol.toUpperCase()})
                        </span>
                    </div>
                </div>
                <div className={`price ${priceChangePercent24h >= 0 ? "up" : "down"}`}>
                    ${currentPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                    })}
                </div>


                <div className="quad-container">
                    <div className="quad">
                        <p className="quad-title">Market Cap</p>
                        <p className="quad-primary">${formatLargeNumber(marketCap)}</p>
                        <p className="quad-meta">Rank #{marketCapRank}</p>
                    </div>
                    <div className="quad">
                        <p className="quad-title">24h Volume</p>
                        <p className="quad-primary">{formatLargeNumber(totalVolume)}</p>
                    </div>
                    <div className="quad">
                        <p className="quad-title">Circulating Supply</p>
                        <span className="quad-primary">
                            {formatLargeNumber(circulatingSupply)} {coin.symbol.toUpperCase()}
                        </span>
                        <span className="quad-meta">
                            / {maxSupply === 0 ? "Unlimited" : formatLargeNumber(maxSupply)}
                        </span>
                    </div>
                    <div className="quad">
                        <p className="quad-title">24h High</p>
                        <p className="quad-primary">${high24h.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 5,
                        })}</p>
                        <p className="quad-title">24h Low</p>
                        <p className="quad-secondary">${low24h.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 5,
                        })}</p>
                    </div>
                </div>

            </div>
            <div className="coinDetailRight">
                <div className='block'>
                    <p className="quad-title">All Time High</p>
                    <p className="quad-primary">${ath.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 2,})}</p>
                    <p className="quad-title">All Time High Date</p>
                    <p className="quad-primary">{formatDate(athDate)}</p>
                    <p className="quad-title">ATH Percentage Change</p>
                    <p className="quad-primary">{athChangePercent.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 2,})}%</p>
                </div>
                <div className='block'>
                    <p className="quad-title">All Time Low</p>
                    <p className="quad-primary">${atl.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 2,})}</p>
                    <p className="quad-title">All Time Low Date</p>
                    <p className="quad-primary">{formatDate(atlDate)}</p>
                    <p className="quad-title">ATL Percentage Change</p>
                    <p className="quad-primary">{atlChangePercent.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 2,})}%</p>
                </div>
                
            </div>
        </div>
    );
}

export default CoinDetail;