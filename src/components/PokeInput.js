import React from 'react';
import './PokeInput.css';

class PokeInput extends React.Component {
    render() {
        const {handleChangeInput} = this.props;
        return (
            <div className="pokeInput__container">
                <label htmlFor="input" className="pokeLabel">Campo para filtrar pokemons por nombre</label>
                <input className="pokeInput" type="text" id="input" placeholder="Filtra pokemons por nombre" onChange={handleChangeInput}/>
            </div>
        );
    }
}

export default PokeInput;