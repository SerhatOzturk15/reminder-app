import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FormLabel from "react-bootstrap/FormLabel";
import CategoryProvider from "./CategoryProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";

const FormView = ({
  selectedTitle,
  categories,
  selectedCategory,
  providers,
  selectedProvider,
  selectedContractEndDate,
  selectedNoticePeriod,
  handleCategoryChange,
  handleProviderChange,
  handleTitleChange,
  handleDateChange,
  handleNoticeChange,
  handleSubmit
}) => {

  return (
    <Form>
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Title" value = {selectedTitle} onChange = {handleTitleChange} />
      </Form.Group>
      <CategoryProvider
        categories={categories}
        providers={providers}
        selectedCategory={selectedCategory}
        selectedProvider = {selectedProvider}
        handleCategoryChange = {handleCategoryChange}
        handleProviderChange = {handleProviderChange}
      ></CategoryProvider>
      <Form.Group>
        <FormLabel>Contract end date</FormLabel>
        <DatePicker
          selected={new Date(selectedContractEndDate)}
          onSelect={(e) => handleDateChange(e)}
          onChange={(e) => handleDateChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Notice Period" value = {selectedNoticePeriod} onChange = {handleNoticeChange}/>
      </Form.Group>
      <Link to={`/details`}>
        <button className="btn btn-primary" onSubmit = {handleSubmit}>Search</button>
      </Link>
    </Form>
  );
};

export default FormView;
