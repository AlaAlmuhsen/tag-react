function Summary({ items }) {
  if (!items.length) {
    return (
      <p className="summary">
        <em>Your cart is empty. Start adding some groceries 🍎</em>
      </p>
    );
  }

  const numOfItems = items.length;
  const numOfBought = items.filter((i) => i.bought).length;
  const percentage = Math.round((numOfBought / numOfItems) * 100);

  return (
    <footer className="summary">
      <em>
        {percentage === 100
          ? "All done! Time to head to the checkout 🧾"
          : `🛍️ You have ${numOfItems} items on your list, and you already bought ${numOfBought} (${percentage}%)`}
      </em>
      <div className="summary__bar">
        <div
          className="summary__fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </footer>
  );
}

export default Summary;
