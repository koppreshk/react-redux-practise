import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

export const App = React.memo(() => {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <button onClick={() => depositMoney(10)}>+</button>
      <div>{account}</div>
      <button onClick={() => withdrawMoney(10)}>-</button>
    </>
  );
});
