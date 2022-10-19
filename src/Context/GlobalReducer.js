const GlobalReducer = (state , action) => {

    switch(action.type){

        case "MAKE_QR" :
        return {
            ...state,
            qr : action.payload
        }


        default: 
        return state
    }


}

export default GlobalReducer