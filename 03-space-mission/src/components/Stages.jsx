function Stages({ messages, stage }) {
  return (
    <div className="stages">
      {messages.map((i, index) => (
        <div className={`${stage >= index + 1 ? "active" : ""}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Stages;
