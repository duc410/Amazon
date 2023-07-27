import Axios from 'axios';
import { CART_EMPTY } from '../Constants/cartConstants';
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS
}from '../Constants/orderConstants'
export const createdOrder= (order)=> async (dispatch,getState)=>{
    dispatch({type:ORDER_CREATE_REQUEST,payload:order});
    try{
        const {
            userSignIn:{userInfo},
        }=getState()
        const data=await Axios.post('/api/orders',order,{
            header:{
                Authorization:`Bearer ${userInfo.token}`
            }
        })
        dispatch({type:ORDER_CREATE_SUCCESS,payload:data.order})
        dispatch({type:CART_EMPTY})
        localStorage.removeItem('cartItems')
    }
    catch(error){
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload:error.respone &&error.respone.data.message
            ?error.respone.data.message 
            :error.message,
        })
    }
}