const initialState = {
  title: "",
  category: "",
  provider: "",
  contractEndDate: new Date(),
  noticePeriod: "",
  categories: [],
  providers: [],
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
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload.categories };
    case "SET_PROVIDERS":
      return { ...state, providers: action.payload.providers };
    default:
      return state;
  }
};

export default ReminderReducer;
