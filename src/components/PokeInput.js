import React from 'react';

class PokeInput extends React.Component {
    render() {
        const {handleChangeInput} = this.props;
        return (
            <input type="text" onChange={handleChangeInput}/>
        );
    }
}

export default PokeInput;