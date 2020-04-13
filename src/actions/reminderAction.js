export const setForm = (formObject) => {
  return {
    type: "SET_FORM",
    payload: formObject,
  };
};

export const setCategories = (categories) => {
  return {
    type: "SET_CATEGORIES",
    payload: { categories },
  };
};

export const setProviders = (providers) => {
  return {
    type: "SET_PROVIDERS",
    payload: { providers },
  };
};
