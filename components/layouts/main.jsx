import Header from "components/shared/header";
import React from "react";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayoutMain;
