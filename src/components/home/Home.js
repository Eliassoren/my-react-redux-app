import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync } from '../../modules/counter';
const Home = props => (
  <div>
    <h2 className="home-tab">Home</h2>
    <h3 className="count"> Count: {props.count}</h3>

    <p>
    <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Async Increment</button>
    </p>

    <p>
    <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
    <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Async Decrement</button>
    </p>

    <button onClick={()=> props.changePage()}> About via redux </button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
