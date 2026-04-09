import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const Control = () => {
    const disatch = useDispatch();
    const inputElement = useRef();
    const handleIncrement = () => {
        disatch({ type: 'INCREMENT' });
    };
    const handleDecrement = () => {
        disatch({ type: 'DECREMENT' });
    };
    const handleAdd = () => {
        disatch({
            type: 'ADD',
            payload: {
                num: inputElement.current.value
            }
        });
        inputElement.current.value = '';
    };
    const handleSubtract = () => {
        disatch({
            type: 'SUBTRACT',
            payload: {
                num: inputElement.current.value
            }
        });
        inputElement.current.value = '';
    };
    const handlePrivacyToggle = () => {
        disatch({
            type: 'PRIVACY_TOGGLE',
            payload: {
                
            }
        });
    };
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary"
                    onClick={handleIncrement}
                >+1</button>
                <button type="button" className="btn btn-success"
                    onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-warning"
                    onClick={handlePrivacyToggle}
                >Privacy Toggle</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input type="text" placeholder='Enter Number'
                    ref={inputElement}
                    className='number-input' />
                <button type="button" className="btn btn-info"
                    onClick={handleAdd}>Add</button>
                <button type="button" className="btn btn-danger"
                    onClick={handleSubtract}>Subtract</button>
            </div>
        </>
    )
}

export default Control
