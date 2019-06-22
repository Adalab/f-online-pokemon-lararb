import React from 'react';
import './PokeList.css';
import {Link} from 'react-router-dom';


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
                            <Link to="/detail">
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
                            </div>
                            </Link>
                        </li>
                    ) 
                }
            </ul>
        );
    }
}

export default PokeList;