import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import PokeInput from './components/PokeInput';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: JSON.parse(localStorage.getItem('dataSaved')),
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
        <PokeInput handleChangeInput={this.handleChangeInput}/>
        <PokeList pokeData={pokeData} value={value}/>
      </div>
    );
  }
}

export default App;
