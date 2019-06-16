import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import PokeInput from './components/PokeInput';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: [],
      value: ''
    }

   this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  componentDidMount(){
    this.getPokeFetch();
  }

  getPokeFetch() {
    fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=25')
      .then(res => res.json())
      .then(data => data.results.map(item => 
        fetch(item.url)
          .then (res => res.json())
          .then(data =>
            {this.setState(prevState => {
              const newData = [...prevState.pokeData, {pokemon: data}]
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
    console.log(pokeData);

    return (
      <div className="App">
        {pokeData.length === 0 ? 
          <p className="loadingMessage">Pokemons are coming... despacico :)</p>
        :
          <React.Fragment>
            <PokeInput handleChangeInput={this.handleChangeInput}/>
            <PokeList pokeData={pokeData} value={value}/>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
