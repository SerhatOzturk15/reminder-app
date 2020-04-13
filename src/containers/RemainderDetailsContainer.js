import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const RemainderDetailsContainer = () => {
  const title = useSelector((store) => store.title);
  const category = useSelector((store) => store.category);
  const provider = useSelector((store) => store.provider);
  const contractEndDate = useSelector((store) => store.contractEndDate);
  const noticePeriod = useSelector((store) => store.noticePeriod);
  const categories = useSelector((store) => store.categories);
  const providers = useSelector((store) => store.providers);

  const categoryElement = categories.find((item) => item.id === category);
  const categoryName = categoryElement ? categoryElement.categoryName : "";
  const providerElement = providers.find((item) => item.id === provider);
  const providerName = providerElement
    ? providerElement.company.companyName
    : "";
  return (
    <div className = 'details-container'>
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{categoryName}</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>{providerName}</td>
          </tr>
          <tr>
            <td>Contract End Date</td>
            <td>{new Date(contractEndDate).toISOString().slice(0, 10)}</td>
          </tr>
          <tr>
            <td>Notice Period</td>
            <td>{noticePeriod}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RemainderDetailsContainer;
