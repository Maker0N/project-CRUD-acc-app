
let rerender = () => {
  console.log("State changed");
};

let state = {
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
  keyWord: ''
};

export const subscriber = (watch) => {
  rerender = watch;
};

export function addNewItem(item) {
  state = { ...state, list: [ ...state.list, item ] }
  rerender(state)
  console.log(state)
}

export function deleteItem(id) {
  state.list = state.list.filter(it => id !== it.id)
  console.log(state.list)
  state = { ...state, list: state.list };
  rerender(state);
}

export function editItem(item) {
  state.list = state.list.reduce((acc, rec) => rec.id === item.id ? [...acc, item] : [...acc, rec], [])
  state = { ...state, list: state.list }
  rerender(state);
}

export function createSearchList(searchString) {
  const searchList = state.list.filter(it => String(it.id).includes(searchString)
  || it.clientName.toLocaleLowerCase().includes(searchString)
  || it.carrierName.toLowerCase().includes(searchString)
  || String(it.phone).includes(searchString)
  || it.comment.toLowerCase().includes(searchString)
  || String(it.ati).includes(searchString)
  ? it
  : !it)
  state = { ...state, searchList: searchList, keyWord: searchString };
  console.log(state.searchList)
  rerender(state)
}

export default state