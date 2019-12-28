import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#200',
        '#020',
        '#002',
        '#220',
        '#202',
        '#022',
        '#a00',
        '#0a0',
        '#00a',
        '#aa0',
        '#a0a',
        '#0aa',
        '#aaa',
    ];

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

const mapStateToPros = (state) => ({
    // color: state.color,
    // number: state.number
    color: state.colorData.color,
    number: state.numberData.number
});

const mapDispatchToPros = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToPros,
    mapDispatchToPros
)(Counter);

export default CounterContainer;