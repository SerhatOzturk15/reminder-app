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
    <Form.Group controlId="exampleForm.ControlSelect1" className = 'category-provider-container'>
      <Form.Label >Category Name</Form.Label>
      <Form.Control required as="select" onChange = {handleCategoryChange} size="lg" className = 'form-dropdown'>
      <option />
        {categories.map((category) => {
          return <option key = {category.id} value = {category.id} selected = {category.id === selectedCategory}>{category.categoryName}</option>;
        })}
      </Form.Control>
      <Form.Label >Provider Name</Form.Label>
      <Form.Control required as="select" onChange = {handleProviderChange} size="lg" className = 'form-dropdown'>
      <option />
        {providers.map((provider) => {
          return <option key = {provider.id} value = {provider.id} selected = {provider.id === selectedProvider}>{provider.company.companyName}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default CategoryProvider;
