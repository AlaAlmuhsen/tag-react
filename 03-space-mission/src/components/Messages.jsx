function Messages({ step, message }) {
  return (
    <p className="briefing">
      Step {step}: {message}
    </p>
  );
}

export default Messages;
