import React from 'react';
import './PokeCard.css';

class PokeCard extends React.Component {
    render() {
        const {pokeData} = this.props;

        const matchId = this.props.idparam.match.params.id;
        const pokemon = pokeData[parseInt (matchId, 10)];

        console.log(this.props.idparam);
        console.log(pokemon);

        return (
          <React.Fragment>
            {pokemon ?
              <div className="pokeCard__container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokeImg"/>
                <p className="pokeId">{`ID / ${pokemon.id}`}</p>
                <div className="pokeInfo__container">
                  <h2 className="pokeName">{pokemon.name}</h2>
                  <div className="pokeType__container">
                    {pokemon.types.map((item, index) =>
                      <h3 className="pokeType" key={index}>{item.type.name}</h3>
                    )}
                  </div>
                </div>
                <p className="pokeWeight">{`Weight: ${pokemon.weight}`}</p>
                <p className="pokeHeight">{`Height: ${pokemon.height}`}</p>
                <ul className="pokeAbilitiesList">
                  {`Abilities:
                    ${pokemon.abilities.map((item, index) =>
                      <li className="pokeAbility" key={index}>
                        {item.ability.name}
                      </li> 
                    )}`}
                </ul>
              </div>
              :
              null
          }
          </React.Fragment>
        );
    }
}

export default PokeCard;