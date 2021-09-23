import React, { useCallback, useState } from "react";

const OpenClose = ({ text }) => {
  const [show, setShow] = useState(true);
  const onClickHandler = useCallback(() => setShow(!show), [show]);
  const textClassName = show ? "shown" : "hidden";
  const buttonText = show ? "Hide text" : "Show text";

  return (
    <div>
      <button onClick={onClickHandler}>{buttonText}</button>
      <p className={textClassName}>{text}</p>
    </div>
  );
};

export default OpenClose;
