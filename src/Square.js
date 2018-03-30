import React from 'react';

const Square = (props) => {
    const showAlert = (num) => {
        alert(num);
    }

    const onChangePlayer = (num) => {
        props.changePlayer(num);
    }

    return(
        <button disabled={props.status !== null} className="square" onClick={() => onChangePlayer(props.num)}>{ props.status }</button>
    );
}

export default Square;