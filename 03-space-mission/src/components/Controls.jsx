import Button from "./Button";

function Controls({ onPrev, onNext }) {
  return (
    <div className="controls">
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

export default Controls;
