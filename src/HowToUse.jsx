import img1 from './assets/CoinInfo.png';
import img2 from './assets/CoinSearchImg.png';
import './HowToUse.css';
function HowToUse(){

    return(
        <div className='container3'>
            <div className="title2">
                <h1 className="TitleFont">How to Use</h1>
            </div>
            <div className='HTWContainer'>
                <img className='howto-img' src={img2} alt='Coin Search'/>
                <img className='howto-img' src={img1} alt='Coin Info'/>
            </div>
        </div>
    )
}
export default HowToUse;