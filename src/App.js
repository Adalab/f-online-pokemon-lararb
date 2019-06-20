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
    this.compareId = this.compareId.bind(this);

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
            const newData = [...prevState.pokeData, data]
            return {pokeData: newData}
          });
          }
          )
      ));
  }

  handleChangeInput(event) {
    const currentValue = event.currentTarget.value;

    this.setState({
      value: currentValue
    })
  }

  compareId(pokeA, pokeB) {
    if (pokeA.id > pokeB.id) return 1;
    if (pokeA.id < pokeB.id) return -1;
    return 0;
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
            <PokeList pokeData={pokeData} value={value} compareId={this.compareId}/>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
