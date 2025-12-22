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

    return (
        <div className="coinDetailContainer">
            <div className="coinDetailLeft">
                <div className="coinDetailTop">
                    <img className="coinImage" src={coin.image.large} alt={coin.name}/>
                    <div>
                        <span className="coinName">{coin.name}</span>
                        <span className="coinSymbol">
                            ({coin.symbol.toUpperCase()})
                        </span>
                    </div>
                </div>
                <div className="coinDetailBottom">
                    <div className="quad">
                        <p>e</p>
                    </div>
                    <div className="quad">
                        <p>e</p>
                    </div>
                    <div className="quad">
                        <p>e</p>
                    </div>
                    <div className="quad">
                        <p>e</p>
                        <p>e</p>
                        <p>e</p>
                        <p>e</p>
                        <p>e</p>
                    </div>
                </div>
            </div>
            <div className="coinDetailRight">
                <p>test</p>
            </div>
        </div>
    );
}

export default CoinDetail;