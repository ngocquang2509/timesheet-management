export const Greeting = (props: any) => {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>Welcome back user</h1>;
  }

  return <h1>Hello guest</h1>;
};
