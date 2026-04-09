import React from 'react'

const ButtonsContainer = ({ onButtonClick }) => {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div>
            <div className='buttonsContainer'>
                {buttonNames.map((buttonName) => (<button className='button' onClick={() => onButtonClick(buttonName)}>{buttonName}</button>))}
            </div>
        </div>
    )
}

export default ButtonsContainer
