import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  incrementCounter,
  incrementCounterAsync,
  decrementCounter,
  decrementCounterAsync } from '../actions/counterAction';

const Home = props => (
  <div>
    <h2 className="page-title">Home</h2>
    <h3 className="count"> Count: {props.count}</h3>

    <p>
    <button onClick={props.incrementCounter} disabled={props.isIncrementing}>Increment</button>
    <button onClick={props.incrementCounterAsync} disabled={props.isIncrementing}>Async Increment</button>
    </p>

    <p>
    <button onClick={props.decrementCounter} disabled={props.isDecrementing}>Decrement</button>
    <button onClick={props.decrementCounterAsync} disabled={props.isDecrementing}>Async Decrement</button>
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
  incrementCounter,
  incrementCounterAsync,
  decrementCounter,
  decrementCounterAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
