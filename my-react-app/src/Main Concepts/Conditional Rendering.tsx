export const Greeting = (props: any) => {
  const isLoggedIn = props.isLoggedIn;
  let AuthBtn;
  if (isLoggedIn) {
    AuthBtn = <button>Logout</button>;
    return (
      <div>
        <h1>Hello user</h1>
        {AuthBtn}
      </div>
    );
  } else {
    AuthBtn = <button>Login</button>;
    return (
      <div>
        <h1>Hello guest</h1>
        {AuthBtn}
      </div>
    );
  }
};
