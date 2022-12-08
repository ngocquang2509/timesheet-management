export const Greeting = (props: any) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      <h1>The current user is: {isLoggedIn ? "Logged User" : "Guest"}</h1>
    </div>
  );
};
