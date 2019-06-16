import React from 'react';
import PokeCard from './PokeCard';
import './PokeList.css';


class PokeList extends React.Component {
    render() {
        const {pokeData, value} = this.props;
        return (
            <ul className="pokeList">
                {pokeData
                    .filter(item => item.pokemon.name.includes(value))
                    .map((item, index) =>
                        <li className="pokeItem" key={index}>
                            <PokeCard item={item}/>
                        </li>
                )}
            </ul>
        );
    }
}

export default PokeList;