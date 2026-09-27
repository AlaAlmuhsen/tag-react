function Coffee({ coffee }) {
  const { name, ingredients, price, photoName, soldOut } = coffee;
  return (
    <li className={`coffee${soldOut ? " sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `${price.toFixed(2)}$`}</span>
      </div>
    </li>
  );
}

export default Coffee;

// {
//     "name": "Cappuccino",
//     "ingredients": "Espresso, steamed milk, and a thick layer of foam",
//     "price": 4,
//     "photoName": "coffees/cappuccino.svg",
//     "soldOut": false
// }
