const initialState = {
  title: "",
  category: "",
  provider: "",
  contractEndDate: new Date(),
  noticePeriod: "",
};

const ReminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        title: action.payload.title,
        category: action.payload.category,
        provider: action.payload.provider,
        contractEndDate: action.payload.contractEndDate,
        noticePeriod: action.payload.noticePeriod,
      };
    case "SET_TITLE":
      return {...state, title: action.payload.title}
    case "SET_CATEGORY":
      return {...state, category: action.payload.category}
    case "SET_PROVIDER":
      return {...state, provider: action.payload.provider}
    case "SET_DATE":
      return {...state, contractEndDate: action.payload.contractEndDate}
    case "SET_NOTICE":
      return {...state, noticePeriod: action.payload.noticePeriod}
    default:
      return state;
  }
};

export default ReminderReducer;
