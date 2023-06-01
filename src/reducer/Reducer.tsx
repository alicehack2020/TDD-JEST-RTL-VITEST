import { ADD, REMOVE, INC, DEC, CLEAR_ALL,LOAD} from "./Action"
const Reducer = (state: any, action: any) => {
    switch (action.type) {
      case ADD:
        return [...state, action.payload];
      case LOAD:
        return action.payload;
      case REMOVE:
        return state.filter((item: any) => item.id !== action.payload);
      case INC:
        return state.map((item: any) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        );
      case DEC:
        return state.map((item: any) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        );
        case CLEAR_ALL:
        return [];
      default:
        return state;
    }
  };
  
  export default Reducer;
  