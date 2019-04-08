import React from 'react'
import { connect } from 'dva'
import Counter from '../components/counter'

function CounterModel({dispatch,counter}){
    function handleInc(){
        dispatch({
            type: 'counter/increase',
        })
    }
    function handleDec(){
        dispatch({
            type: 'counter/decrease',
        })
    }
    return(
        <div>
            <Counter counter={counter} increase={handleInc} decrease={handleDec}></Counter>
        </div>
    )
}

export default connect(({counter})=>({counter}))(CounterModel)
