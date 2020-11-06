const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const CREATE_SEARCH_LIST = "CREATE_SEARCH_LIST";

let initialState = {
  list: [
    {
      id: 1,
      date: Date(),
      clientName: "Startrack",
      carrierName: "Willson",
      phone: 555787878,
      comment: "Call",
      ati: 12345,
    },
    {
      id: 2,
      date: Date(),
      clientName: "JSC Space",
      carrierName: "Brauder",
      phone: 555999999,
      comment: "Call 5 min",
      ati: 56789,
    },
  ],
  searchList: [{}],
  keyWord: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return (state = { ...state, list: [...state.list, action.item] });

    case DELETE_ITEM:
      return (state = {
        ...state,
        list: state.list.filter((it) => action.id !== it.id),
      });

    case EDIT_ITEM:
      return (state = {
        ...state,
        list: state.list.reduce(
          (acc, rec) =>
            rec.id === action.item.id ? [...acc, action.item] : [...acc, rec],
          []
        ),
      });

    case CREATE_SEARCH_LIST:
      return (state = {
        ...state,
        searchList: state.list.filter((it) =>
          String(it.id).includes(action.searchString) ||
          it.clientName.toLocaleLowerCase().includes(action.searchString) ||
          it.carrierName.toLowerCase().includes(action.searchString) ||
          String(it.phone).includes(action.searchString) ||
          it.comment.toLowerCase().includes(action.searchString) ||
          String(it.ati).includes(action.searchString)
            ? it
            : !it
        ),
        keyWord: action.searchString,
      });

    default:
      return state;
  }
};

export const addNewItemAC = (item) => {
  return {
    type: "ADD_NEW_ITEM",
    item: item
  };
}

export function deleteItemAC(id) {
  return {
    type: "DELETE_ITEM",
    id,
  };
}

export function editItemAC(item) {
  return {
    type: "EDIT_ITEM",
    item: item,
  };
}

export const createSearchListAC = (searchString) => ({
  type: "CREATE_SEARCH_LIST",
  searchString,
});

export default taskReducer;
