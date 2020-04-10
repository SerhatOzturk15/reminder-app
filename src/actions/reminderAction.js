export const setForm = (formObject) => {
  return {
    type: "SET_FORM",
    payload: formObject,
  };
};
export const setTitle = (title) => {
  return {
    type: "SET_TITLE",
    payload: { title },
  };
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: { category },
  };
};
export const setProvider = (provider) => {
  return {
    type: "SET_PROVIDER",
    payload: { provider },
  };
};
export const setContractEndDate = (contractEndDate) => {
  return {
    type: "SET_DATE",
    payload: {contractEndDate},
  };
};

export const setNoticePeriod = (noticePeriod) => {
  return {
    type: "SET_NOTICE",
    payload: { noticePeriod },
  };
};
