import React from 'react';

class PokeCard extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div className="pokeCard__container">
              <img src={item.pokemon.sprites.front_default} alt={item.pokemon.name} className="pokeImg"/>
              <p className="pokeId">{`ID / ${item.pokemon.order}`}</p>
              <h2 className="pokeName">{item.pokemon.name}</h2>
              {item.pokemon.types.map((item, index) =>
                <h3 className="pokeType" key={index}>{item.type.name}</h3>
              )}
            </div>
        );
    }
}

export default PokeCard;