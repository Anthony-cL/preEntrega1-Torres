import React from "react";

const CardWidget = (props) => {
  const { className, imgSrc,  } = props;

  return (
    <button className={className} type="button">
      <img src={imgSrc} width="30" height="30" />
      0
    </button>
  );
};


CardWidget.defaultProps = {
  className: "btn btn-outline-secondary",
};

export default CardWidget;