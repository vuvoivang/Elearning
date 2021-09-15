import React from "react";
import { Route } from "react-router-dom";
function LayoutAdmin(props) {
  return <>{props.children}</>;
}
export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutAdmin>
          <Component {...propsComponent} />
        </LayoutAdmin>
      )}
    />
  );
}
