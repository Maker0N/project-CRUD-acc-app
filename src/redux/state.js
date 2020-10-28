let rerenderTree = () => {
  console.log("State changed");
};

let state = {
  list: [
    {
    id: 1,
    date: "",
    clientName: "",
    carrierName: "",
    phone: null,
    comment: "",
    ati: 12345
    },
    {
    id: 2,
    date: "",
    clientName: "",
    carrierName: "",
    phone: null,
    comment: "",
    ati: 12345
    }
  ]
}

export const subscriber = (watch) => {
  rerenderTree = watch;
};

export function addNewItem(item) {
  state = { ...state, list: [ ...state.list, item ] }
  rerenderTree(state)
  console.log(state)
}

export function deleteItem(id) {
  state.list = state.list.filter(it => id !== it.id)
  console.log(state.list)
  state = { ...state, list: state.list};
  rerenderTree(state);
  console.log(state)
}

export default state