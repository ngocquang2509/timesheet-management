export const ListNumber = (props: any) => {
  const listNumber = props.value.map((num: any) => (
    <li key={num.toString()}>{num}</li>
  ));

  return (
    <>
      <ul>{listNumber}</ul>
    </>
  );
};
