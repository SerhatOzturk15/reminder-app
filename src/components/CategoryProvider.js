import React from "react";
import Form from "react-bootstrap/Form";

const CategoryProvider = ({
  categories,
  providers,
  selectedCategory,
  selectedProvider,
  handleCategoryChange,
  handleProviderChange
}) => {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>SELECT LABEL</Form.Label>
      <Form.Control as="select" onChange = {handleCategoryChange}>
        {categories.map((category) => {
          return <option key = {category.id} value = {category.id} {...category.id === selectedCategory ? "selected" : ""}>{category.categoryName}</option>;
        })}
      </Form.Control>
      <Form.Control as="select" onChange = {handleProviderChange}>
        {providers.map((provider) => {
          return <option key = {provider.id}>{provider.id}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default CategoryProvider;
