import React from "react";
import {useDispatch} from 'react-redux';
import {actionCreators} from './state/index'
import {bindActionCreators} from 'redux';

function Shop() {
  const dispatch = useDispatch();
  const {WithdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposite/Withdraw Money</h2>
      {/*<button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}> - </button>
      update Balance
  <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}> + </button>*/}
      <button className="btn btn-primary mx-2" onClick={()=>{WithdrawMoney(100)}}> - </button>
      update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}> + </button>
    
    </div>
  );
}

export default Shop;
