import React from 'react';
import './PokeCard.css';

class PokeCard extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div className="pokeCard__container">
              <img src={item.pokemon.sprites.front_default} alt={item.pokemon.name} className="pokeImg"/>
              <p className="pokeId">{`ID / ${item.pokemon.id}`}</p>
              <div className="pokeInfo__container">
                <h2 className="pokeName">{item.pokemon.name}</h2>
                <div className="pokeType__container">
                  {item.pokemon.types.map((item, index) =>
                    <h3 className="pokeType" key={index}>{item.type.name}</h3>
                  )}
                </div>
              </div>
            </div>
        );
    }
}

export default PokeCard;