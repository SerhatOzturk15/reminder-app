import React, { useEffect, useState } from "react";
import Form from "./../components/Form";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setProviders,
  setForm,
} from "./../actions/reminderAction";

const RemainderFormContainer = ({ history }) => {
  const dispatch = useDispatch();

  //store states
  const storetitle = useSelector((store) => store.title);
  const storecategory = useSelector((store) => store.category);
  const storeprovider = useSelector((store) => store.provider);
  const storecontractEndDate = useSelector((store) => store.contractEndDate);
  const storenoticePeriod = useSelector((store) => store.noticePeriod);
  const categories = useSelector((store) => store.categories);
  const providers = useSelector((store) => store.providers);

  //local states
  const [title, setTitle] = useState(storetitle);
  const [category, setCategory] = useState(storecategory);
  const [provider, setProvider] = useState(storeprovider);
  const [contractEndDate, setContractEndDate] = useState(storecontractEndDate);
  const [noticePeriod, setNoticePeriod] = useState(storenoticePeriod);

  const fetchFromAPI = (endpoint) => {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
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
      dispatch(
        setForm({ title, category, provider, contractEndDate, noticePeriod })
      );
      history.push("/details");
    }
    return;
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.currentTarget.value;
    fetchFromAPI(
      `https://api-gateway.remind.me/provider/categoryProvider/category/${categoryId}`
    ).then((response) => {
      setCategory(categoryId);
      dispatch(setProviders(response));
    });
  };

  const handleProviderChange = (e) => {
    const provider = e.currentTarget.value;
    setProvider(provider);
  };
  const handleDateChange = (date) => {
    if (date) {
      const selectedDate = date.toString();
      setContractEndDate(selectedDate);
    }
  };
  const handleTitleChange = (e) => {
    const title = e.currentTarget.value;
    setTitle(title);
  };
  const handleNoticeChange = (e) => {
    const notice = e.currentTarget.value;
    setNoticePeriod(notice);
  };

  return (
    <div className="form-container">
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
