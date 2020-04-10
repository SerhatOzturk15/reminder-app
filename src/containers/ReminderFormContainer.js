import React, { useState, useEffect } from "react";
import Form from "./../components/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setProviders,
  setTitle,
  setContractEndDate,
  setNoticePeriod,
} from "./../actions/reminderAction";

const RemainderFormContainer = () => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.title);
  const category = useSelector((store) => store.category);
  const provider = useSelector((store) => store.provider);
  const contractEndDate = useSelector((store) => store.contractEndDate);
  const noticePeriod = useSelector((store) => store.noticePeriod);
  const [categories, setCategories] = useState([]);
  const [providers, setProviders] = useState([]);

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
        setCategories(response);
      }
    );
    if (category) {
      fetchFromAPI(
        `https://api-gateway.remind.me/provider/categoryProvider/category/${"01f5af94-bd33-4d4e-864e-fe04c67fcd0e"}`
      ).then((response) => {
        setProviders(response);
      });
    }
  }, [category]);

  const handleCategoryChange = (e) => {
    const categoryId = e.currentTarget.value;
    fetchFromAPI(
      `https://api-gateway.remind.me/provider/categoryProvider/category/${categoryId}`
    ).then((response) => {
      dispatch(setCategory(categoryId))
      setProviders(response);
    });
  };

  const handleProviderChange = (e) => {};
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
      />
    </div>
  );
};

export default RemainderFormContainer;
