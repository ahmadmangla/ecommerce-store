import Form from "react-bootstrap/Form";

const SelectQuantity = (props) => {
  const { counter, setCounter } = props;

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <form className="d-flex w-25">
      <div role="button" className="p-2 px-3 bg-light cursor-pointer" id="decrease" onClick={decrease} value="Decrease Value">
        -
      </div>
      <Form.Control className="rounded-0" type="number" id="number" value={counter} />
      <div role="button" className="p-2 px-3 bg-light " id="increase" onClick={increase} value="Increase Value">
        +
      </div>
    </form>
  );
};

export default SelectQuantity;
