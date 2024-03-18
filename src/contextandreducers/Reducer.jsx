export const initialState={
    total:0,
    products:[]
}

const storeReducer=(state,action)=>{
    switch(action.type){
        case'add':
        return{
            ...state,
            products:action.payload
        }
        case 'remove':
            return{
                ...state,products:action.payload
            }
            case'update Price':
            return{
                ...state,total:action.payload
            }
            default:throw error('cannot find case in reducer')
    }
}

export default storeReducer;