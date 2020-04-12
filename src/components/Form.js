import React from "react";
import Form from "react-bootstrap/Form";
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
  handleSubmit,
  submitText,
  endDateLabel,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label >Title</Form.Label>
        <Form.Control
          required
          size="lg"
          type="text"
          placeholder="Title"
          value={selectedTitle}
          onChange={handleTitleChange}
        />
      </Form.Group>
      <CategoryProvider
        categories={categories}
        providers={providers}
        selectedCategory={selectedCategory}
        selectedProvider={selectedProvider}
        handleCategoryChange={handleCategoryChange}
        handleProviderChange={handleProviderChange}
      ></CategoryProvider>
      <Form.Group>
      <Form.Label >Contract End Date</Form.Label>
        <DatePicker
          required
          className="date-picker"
          selected={new Date(selectedContractEndDate)}
          onSelect={(e) => handleDateChange(e)}
          onChange={(e) => handleDateChange(e)}
        />
      </Form.Group>
      <Form.Group>
      <Form.Label >Notice Period</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Notice Period"
          value={selectedNoticePeriod}
          onChange={handleNoticeChange}
        />
      </Form.Group>
      <button className="btn btn-primary" type="submit">
        {submitText}
      </button>
    </Form>
  );
};

export default FormView;
