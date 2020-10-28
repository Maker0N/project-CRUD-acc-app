let rerenderTree = () => {
  console.log("State changed");
};

let state = {
  list: [
    {
      id: 1,
      date: Date(),
      clientName: "Startrack",
      carrierName: "Whilson",
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
};

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
  state = { ...state, list: state.list };
  rerenderTree(state);
  console.log(state)
}

export function editItem(item) {
  state.list = state.list.reduce((acc, rec) => rec.id === item.id ? [...acc, item] : [...acc, rec], [])
  state = { ...state, list: state.list }
  rerenderTree(state);
}

export default state