import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: JSON.parse(localStorage.getItem('dataSaved')) || [],
      value: ''
    }

   this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  componentDidMount(){
    this.getPokeFetch();
  }

  getPokeFetch() {
    fetch('http://pokeapi.salestock.net/api/v2/pokemon')
      .then(res => res.json())
      .then(data => data.results.map(item => 
        fetch(item.url)
          .then (res => res.json())
          .then(data =>
            {this.setState(prevState => {
              const newData = [...prevState.pokeData, {pokemon: data}]
              localStorage.setItem('dataSaved', JSON.stringify(newData))
              return {pokeData: newData}
            })
            }
          )
      ))
  }

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
          .filter(item => item.pokemon.name.includes(value))
          .map((item, index) =>
          <li className="pokeItem" key={index}>
            <div className="pokeCard__container">
              <img src={item.pokemon.sprites.front_default} alt={item.pokemon.name} className="pokeImg"/>
              <p className="pokeId">{`ID / ${item.pokemon.order}`}</p>
              <h2 className="pokeName">{item.pokemon.name}</h2>
              {item.pokemon.types.map((item, index) =>
                <h3 className="pokeType" key={index}>{item.type.name}</h3>
              )}
            </div>
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
