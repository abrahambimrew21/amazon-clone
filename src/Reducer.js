export const initialState = {
basket:[],
};
const reducer = (state,action)=>{
    console.log(action);

    switch (action.type) {
        case "ADD_TOBASKET":
            return{
                ...state,
                basket:[...state.basket, action.item]
            };
                
        default:
            return state;
    }
}
export default reducer