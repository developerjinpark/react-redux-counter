import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

const mapStateToPros = (state) => ({
    // color: state.color,
    // number: state.number
    // color: state.colorData.color,
    // number: state.numberData.number
    counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor(index);
        dispatch(actions.setColor(index, color));
    }
});

const CounterContainer = connect(
    mapStateToPros,
    mapDispatchToProps
)(CounterList);

export default CounterContainer;