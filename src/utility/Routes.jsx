import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../page/Home";
import { About } from "../page/About";
import { Category } from "../page/Category";
import { ProductCategory } from "../component/ProductCategory";
import { ProductCategoryClickedItem } from "../component/ProductCategoryClickedItem";
import { NotFound } from "../page/NotFound";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/products" exact={true} component={Category} />
            <Route
                path="/products/:category"
                component={ProductCategory}
                exact
            />

            <Route
                path="/products/:category/:id"
                component={ProductCategoryClickedItem}
            />

            <Route path="*" component={NotFound} />
        </Switch>
    );
};
