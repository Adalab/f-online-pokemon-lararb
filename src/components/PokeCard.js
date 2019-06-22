import React from 'react';
import './PokeCard.css';

class PokeCard extends React.Component {
    render() {
        const {pokeData} = this.props;
        return (
          <React.Fragment>
            {pokeData.map( item =>
              <div className="pokeCard__container">
                <img src={item.sprites.front_default} alt={item.name} className="pokeImg"/>
                <p className="pokeId">{`ID / ${item.id}`}</p>
                <div className="pokeInfo__container">
                  <h2 className="pokeName">{item.name}</h2>
                  <div className="pokeType__container">
                    {item.types.map((item, index) =>
                      <h3 className="pokeType" key={index}>{item.type.name}</h3>
                    )}
                  </div>
                </div>
                <p className="pokeWeight">{`Weight: ${item.weight}`}</p>
                <p className="pokeHeight">{`Height: ${item.height}`}</p>
                <ul className="pokeAbilitiesList">
                  {`Abilities:
                    ${item.abilities.map(item =>
                      <li className="pokeAbility">
                        {item.ability.name}
                      </li>
                    )}`}
                </ul>

              </div>
          )}
          </React.Fragment>
        );
    }
}

export default PokeCard;