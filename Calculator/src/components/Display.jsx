import React from 'react'

const Display = ({ displayVal }) => {
    return (
        <div>
            <input className='display' type='text' value={displayVal} readOnly/>
        </div>
    )
}

export default Display
