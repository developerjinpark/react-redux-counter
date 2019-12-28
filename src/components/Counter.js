import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div 
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}
            >
            {number}
        </div>
    );
}

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement no defined'),
    onDecrement: () => console.warn('onDecrement no defined'),
    onSetColor: () => console.warn('onSetColor no defined')
}

export default Counter;