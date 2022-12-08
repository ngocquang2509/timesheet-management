export const Garage = (props: any) => {
  const listCars = props.cars.map((car: any) => <li>{car}</li>)

  return (
    <>
      <h1>Cars in the garage</h1>
      <ul>
        {listCars}
      </ul>
    </>
  );
};
