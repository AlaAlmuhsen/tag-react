function ListItem({ item, onDeleteItem, onToggleItem }) {
  const { id, amount, name, bought } = item;
  return (
    <li className="list-item">
      <input
        type="checkbox"
        checked={bought}
        onChange={() => onToggleItem(id)}
      />
      <span className="list-item__amount ">{amount}</span>
      <span className="list-item__name ">{name}</span>
      <button onClick={() => onDeleteItem(id)}>🗑️</button>
    </li>
  );
}

export default ListItem;
