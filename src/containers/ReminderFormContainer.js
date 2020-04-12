import React, { useEffect } from "react";
import Form from "./../components/Form";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setTitle,
  setContractEndDate,
  setNoticePeriod,
  setProvider,
  setCategories,
  setProviders
} from "./../actions/reminderAction";

const RemainderFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.title);
  const category = useSelector((store) => store.category);
  const provider = useSelector((store) => store.provider);
  const contractEndDate = useSelector((store) => store.contractEndDate);
  const noticePeriod = useSelector((store) => store.noticePeriod);
  const categories = useSelector((store) => store.categories);
  const providers = useSelector((store) => store.providers);

  const fetchFromAPI = (endpoint) => {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          //setIsLoading(false);
        });
    });
  };
  useEffect(() => {
    fetchFromAPI(`https://api-gateway.remind.me/provider/category`).then(
      (response) => {
        dispatch(setCategories(response));
      }
    );

  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      history.push("/details");
    }
    return;
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.currentTarget.value;
    fetchFromAPI(
      `https://api-gateway.remind.me/provider/categoryProvider/category/${categoryId}`
    ).then((response) => {
      dispatch(setCategory(categoryId));
      dispatch(setProviders(response));
    });
  };

  const handleProviderChange = (e) => {
    const provider = e.currentTarget.value;
    dispatch(setProvider(provider));
  };
  const handleDateChange = (date) => {
    const B = date.toString();
    dispatch(setContractEndDate(B));
  };
  const handleTitleChange = (e) => {
    const title = e.currentTarget.value;
    dispatch(setTitle(title));
  };
  const handleNoticeChange = (e) => {
    const notice = e.currentTarget.value;
    dispatch(setNoticePeriod(notice));
  };

  return (
    <div className="formContainer">
      <Form
        selectedTitle={title}
        categories={categories}
        selectedCategory={category}
        providers={providers}
        selectedProvider={provider}
        selectedContractEndDate={contractEndDate}
        selectedNoticePeriod={noticePeriod}
        handleCategoryChange={handleCategoryChange}
        handleProviderChange={handleProviderChange}
        handleDateChange={handleDateChange}
        handleTitleChange={handleTitleChange}
        handleNoticeChange={handleNoticeChange}
        submitText="Submit"
        endDateLabel="Contract End Date"
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default withRouter(RemainderFormContainer);
