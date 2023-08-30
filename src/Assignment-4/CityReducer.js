let initialState = [
  {
    name: "Lucknow",
    news: "mostly sunny",
    description: "this week it will be sunny throught with clear skies",
  },
  {
    name: "Hyderabad",
    news: "partly cloudy",
    description: "on weekend it might rain",
  },
  {
    name: "Bengaluru",
    news: "heavy rain",
    description: "extreme rainfall on monday happened in major parts",
  },
];

const CityReducer = (state = initialState, action) => {
  console.log(state, action);

  if (action.type == "add") {
    console.log("adddddd");
    let newCity = action.payload;
    let newState = [...state, newCity];
    return newState;
  }

  if (action.type == "delete") {
    let index = action.payload;
    let newState = state.filter((val, indx) => index != indx);
    return newState;
  }

  if (action.type == "reset") {
    return [];
  }

  if (action.type == "show") {
    return state;
  }
  return state;
};

export default CityReducer;
