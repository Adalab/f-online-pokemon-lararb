import React from 'react';
import PokeCard from './PokeCard';
import './PokeList.css';


class PokeList extends React.Component {
    render() {
        const {pokeData, value, compareId} = this.props;
        return (
            <ul className="pokeList">
                {pokeData
                    .filter(item => item.name.includes(value))
                    .sort(compareId) 
                    .map((item, index) =>
                        <li className="pokeItem" key={index} id={item.id}>
                            <PokeCard item={item}/>
                        </li>) 
                }
            </ul>
        );
    }
}

export default PokeList;