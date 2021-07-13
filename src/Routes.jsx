import React from 'react';
import {Route, Switch } from "react-router-dom";

import { Home } from "./page/Home";
import { About } from "./page/About";
import { Products } from "./page/Products";
import { ProductCategory } from "./page/ProductCategory";
import { NotFound } from "./page/NotFound";

export const Routes = () => {
    return(
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/products" exact={true} component={Products} />
          <Route path="/products/:category/:brand?" component={ProductCategory} />
          <Route path="/products/:category/:brand?" component={ProductCategory} />
          <Route path="*" component={NotFound} />
        </Switch>
    )
}