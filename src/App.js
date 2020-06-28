import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Computer from 'bitcoin-computer';
import axios from 'axios';
import currencyToSymbolMap from 'currency-symbol-map/map';
import getSymbolFromCurrency from 'currency-symbol-map';
import BCH from './images/BCH.jpg';
import TRX from './images/TRX.jpg';

import BTC from './images/BTC.jpg';

import XLM from './images/XLM.jpg';

import ETH from './images/ETH.jpg';


 



class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      cryptos:[]

    };
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOTA,TRX,BCH,XLM&tsyms=USD,INR,EUR,JPY')
    .then(res=>{
      const cryptos =res.data;
      console.log(cryptos);
      this.setState({cryptos:cryptos});
    })
  }
  image(key)
  {
    if(key==="BCH")
      return BCH;
    if(key==="TRX")
      return TRX;
    if(key==="BTC")
      return BTC;
    if(key==="XLM")
      return XLM;
    if(key==="ETH")
      return ETH;

  }

  getChart(key){

    if(key==="BCH")
      return "https://in.tradingview.com/symbols/BCHUSD/";
    if(key==="TRX")
      return "https://in.tradingview.com/symbols/TRXUSD/";
    if(key==="BTC")
      return "https://in.tradingview.com/symbols/BTCUSD/";
    if(key==="XLM")
      return "https://in.tradingview.com/symbols/XLMUSD/";
    if(key==="ETH")
      return "https://in.tradingview.com/symbols/ETHUSD/";

  }

  render() {
    return (

      <div className="App">
      

     
        
        {Object.keys(this.state.cryptos).map((key) => (
          <div className="card" >


              <div id="crypto-container">
              <h4><b>{key}</b></h4>
              
              <img src={this.image(key)} className="image"></img>
              <p>{getSymbolFromCurrency('USD')}  {this.state.cryptos[key].USD}</p>
              <p>{getSymbolFromCurrency('JPY')}  {this.state.cryptos[key].JPY}</p>
              <p>{getSymbolFromCurrency('INR')}  {this.state.cryptos[key].INR}</p>
              <p>{getSymbolFromCurrency('EUR')}  {this.state.cryptos[key].EUR}</p>
              <a href={this.getChart(key)} class="button">Know More</a>
              
              </div>
</div>



        ))}

       
      </div>
    )
  }

}
export default App;
