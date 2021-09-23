import React, { useCallback, useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);
  const onClickHandler = useCallback(() => setCounter(counter + 1), [counter]);
  const buttonText = counter ? "Click one more time" : "Make the first click!";

  return (
    <div>
      <button onClick={onClickHandler}>{buttonText}</button>
      <p>{counter}</p>
    </div>
  );
};

export default ClickCounter;
