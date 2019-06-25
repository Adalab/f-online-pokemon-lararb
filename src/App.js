import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import PokeInput from './components/PokeInput';
import {Switch, Route} from 'react-router-dom';
import PokeCard from './components/PokeCard';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon?limit=5';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: [],
      value: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.compareId = this.compareId.bind(this);

   this.getPokeEvolFetch();

  }

  componentDidMount(){
    this.getPokeFetch();
    
  }

  async getPokeFetch() {
    const firstCallPromise = fetch(ENDPOINT).then(res => res.json());

    const data = await firstCallPromise;
    console.log(data);

    const pokePromiseList = data.results.map(data => fetch(data.url).then(res => res.json()));
    console.log(pokePromiseList);
    
    const pokemonData = await Promise.all(pokePromiseList);
    console.log(pokemonData);
    
    this.setState({
      pokeData: pokemonData
    })

    this.getPokeEvolFetch()
  }


  // getPokeFetch() {
  //   fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=25')
  //     .then(res => res.json())
  //     .then(data => data.results.map(item => 
  //       fetch(item.url)
  //         .then (res => res.json())
  //         .then(data =>
  //         {this.setState(prevState => {
  //           const newData = [...prevState.pokeData, data]
  //           return {pokeData: newData}
  //         })
  //         this.getPokeEvolFetch()
  //       })
  //     ));
  // }

  getPokeEvolFetch() {
    
    const pokeDataId = this.state.pokeData.map(item => item.id);
    
    pokeDataId.map(item2 => fetch(`https://pokeapi.co/api/v2/evolution-chain/${item2}/`)
    .then(res => res.json())
    .then(data => data.chain.evolves_to.map(item => { 

      const evolutionName = item.species.name;

      const dataEvol = this.state.pokeData.map(item => {

        return {...item, evolution: evolutionName}
      })

      this.setState({pokeData: dataEvol})
    }))
    );
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

    return (
      <div className="App">
        {pokeData.length === 0 ? 
          <p className="loadingMessage">Pokemons are coming... despacico :)</p>
        :
        <Switch>
          <Route  exact path="/" render = {() => 
            <React.Fragment>
              <PokeInput handleChangeInput={this.handleChangeInput}/>
              <PokeList pokeData={pokeData} value={value} compareId={this.compareId}/>
            </React.Fragment>
          }/>
          <Route path="/detail/:id" render= {routerProps =>
            <PokeCard pokeData={pokeData} idparam={routerProps} />} />
        </Switch>
        }
      </div>
    );
  }
}

export default App;
