import { ADD, REMOVE, INC, DEC, CLEAR_ALL} from "./Action"



const Reducer = (state:any, action:any) => {
    switch (action.type) {
        case ADD:
            return [...state, action.data]
        case REMOVE:
            return [...state, action.data]
        case INC:
            return [...state, action.data]
        case DEC:
            return [...state, action.data]
        case CLEAR_ALL:
            return [] 
        default:
            return state
    }
}
export default Reducer