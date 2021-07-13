import React from "react";

export const ProductCategory = (props) => {
  const { category, brand } = props.match.params;

  const getQuerysParams = (query, name) => {
    return new URLSearchParams(query).get(name);
  };

  const order = getQuerysParams(props.location.search,"order");

  return (
    <div>
      Product Category <br />
      Category: {category} <br />
      Brand: {brand} <br />
      Order: {order}
    </div>
  );
};

//  const order = new URLSearchParams(props.location.search).get('order')
