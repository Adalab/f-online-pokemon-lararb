import React from 'react';
import './App.css';
import pokemonData from './DataFalse';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: pokemonData,
      value: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  // componentDidMount(){
  //   this.getPokeFetch();
  // }

  // getPokeFetch() {
  //   fetch('http://pokeapi.salestock.net/api/v2/pokemon')
  //     .then(res => res.json())
  //     .then(data => data.results.map(item => 
  //       fetch(item.url)
  //         .then (res => res.json())
  //         .then(data => this.setState({
  //           pokeData: data
  //         }))
  //     ))
  // }

  handleChangeInput(event) {
    const currentValue = event.currentTarget.value;
    this.setState({
      value: currentValue
    })

  }

  render() {
    const {pokeData, value} = this.state;

    return (
      <div className="App">
        <input type="text" onChange={this.handleChangeInput}/>
        <ul className="pokeList">
          {pokeData
          .filter(item => item.name.includes(value))
          .map((item, index) =>
          <li className="pokeItem" key={index}>
            <div className="pokeCard__container">
              <img src={item.sprite} alt={item.name} className="pokeImg"/>
              <p className="pokeId">{`ID / ${item.id}`}</p>
              <h2 className="pokeName">{item.name}</h2>
              {item.types.map((item, index) =>
                <h3 className="pokeType" key={index}>{item.type.name}</h3>
              )}
            </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
