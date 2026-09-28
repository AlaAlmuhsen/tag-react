import { useState } from "react";
import Stages from "./Stages";
import Messages from "./Messages";
import Controls from "./Controls";
import Button from "./Button";

const messages = [
  "Build the rocket 🚀",
  "Train the crew 👩‍🚀",
  "Land on the Moon 🌕",
  "ss",
];

function Steps() {
  const [isOpen, setIsOpen] = useState(true);
  const [stage, setStage] = useState(1);

  function handleOpen() {
    setIsOpen((i) => !i);
  }

  function handlePrev() {
    if (stage > 1) {
      setStage((s) => s - 1);
    }
  }

  function handleNext() {
    if (stage < messages.length) {
      setStage((s) => s + 1);
    }
  }

  return (
    <div>
      <Button className="toggle" onClick={handleOpen}>
        &times;
      </Button>
      {/* <button className="toggle" onClick={handleOpen}></button> */}
      {isOpen && (
        <div className="mission">
          <Stages messages={messages} stage={stage} />
          <Messages step={stage} message={messages[stage - 1]} />
          <Controls onPrev={handlePrev} onNext={handleNext} />
        </div>
      )}
    </div>
  );
}

export default Steps;
