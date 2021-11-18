import React, { useEffect } from "react";
import "./ContentContainer.scss";

function ContentContainer({ children }) {
  useEffect(() => {
    // console.log("ContentContainer render");
  }, []);

  return <section className="content-container">{children}</section>;
}

export default ContentContainer;
