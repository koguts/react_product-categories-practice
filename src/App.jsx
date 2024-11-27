/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const users = [...usersFromServer];
const categories = [...categoriesFromServer];
const products = [...productsFromServer];

// function findProductCategory(productCategory) {
//   return (categories.find(cat => cat.id === product));
// }

// function findProductOwner(ownerId) {
//   return (user.find(cat => user.id === ownerId));
// }

// const product = productsFromServer.map(product => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId

//   return null;
// });

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Product Categories</h1>

      <div className="block">
        <nav className="panel">
          <p className="panel-heading">Filters</p>

          <p className="panel-tabs has-text-weight-bold">
            <a data-cy="FilterAllUsers" href="#/">
              All
            </a>
            {users.map(user => (
              <a key={user.id} data-cy="FilterUser" href="#/">
                {user.name}
              </a>
            ))}

            {/* <a
              data-cy="FilterUser"
              href="#/"
              className="is-active"
            >
              User 2
            </a>

            <a
              data-cy="FilterUser"
              href="#/"
            >
              User 3
            </a> */}
          </p>

          <div className="panel-block">
            <p className="control has-icons-left has-icons-right">
              <input
                data-cy="SearchField"
                type="text"
                className="input"
                placeholder="Search"
                value="qwe"
              />

              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>

              <span className="icon is-right">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete"
                />
              </span>
            </p>
          </div>

          <div className="panel-block is-flex-wrap-wrap">
            <a
              href="#/"
              data-cy="AllCategories"
              className="button is-success mr-6 is-outlined"
            >
              All
            </a>
            {categories.map(category => (
              <a
                key={category.id}
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="panel-block">
            <a
              data-cy="ResetAllButton"
              href="#/"
              className="button is-link is-outlined is-fullwidth"
            >
              Reset all filters
            </a>
          </div>
        </nav>
      </div>

      <div className="box table-container">
        <p data-cy="NoMatchingMessage">
          No products matching selected criteria
        </p>

        <table
          data-cy="ProductTable"
          className="table is-striped is-narrow is-fullwidth"
        >
          <thead key="ProductTable-th">
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  ID
                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Product
                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort-down" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Category
                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort-up" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  User
                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>
            </tr>
          </thead>

          <tbody key="ProductTable-tbody">
            {products.map(prod => {
              const category = categories.find(
                cat => cat.id === prod.categoryId,
              );
              const user = users.find(owner => owner.id === category.ownerId);

              return (
                <tr data-cy="Product">
                  <td className="has-text-weight-bold" data-cy="ProductId">
                    {prod.id}
                  </td>

                  <td data-cy="ProductName">{prod.name}</td>
                  <td data-cy="ProductCategory">
                    {category.icon} - {category.title}
                  </td>

                  <td
                    data-cy="ProductUser"
                    className={
                      user.sex === 'm' ? 'has-text-link' : 'has-text-danger'
                    }
                  >
                    {user.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
