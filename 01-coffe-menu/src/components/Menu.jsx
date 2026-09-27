import Coffee from "./Coffee";

function Menu({ coffee }) {
  const numOfCoffees = coffee.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {numOfCoffees > 0 ? (
        <>
          <p>
            Freshly roasted, small-batch beans. 6 handcrafted drinks to choose
            from. All brewed to order, all organic, all delicious.
          </p>
          <ul className="coffees">
            {coffee.map((coffee, index) => (
              <Coffee coffee={coffee} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>Come Back letter</p>
      )}
    </main>
  );
}

export default Menu;
