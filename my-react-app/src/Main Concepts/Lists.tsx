const CarList = (props: any) => {
  return <li>{props.brand}</li>;
};

export const Garage = () => {
  const cars = ["Audi", "BMW", "Ford", "KIA"];

  return (
    <>
      <h1>Cars in the garage</h1>
      <ul>
        {cars.map(car => <CarList brand={car}/>)}
      </ul>
    </>
  );
};
