const { FETCH_PRODCUTS } = require("../types");

export const productsReducer=(state={},action)=>{

    switch(action.type)
    {
        case FETCH_PRODCUTS:
            return {items:action.payload};
        default:
            return state;
    }
};
