import React from "react";

export class Counter extends React.Component<{}, { counter: number }> {
  constructor(props: any) {
    super(props);

    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(): void {
    console.log("ComponentWillMount run");
  }

  componentDidMount(): void {
    console.log("ComponentDidMount run");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ counter: number }>
  ): void {
    if (prevState.counter !== this.state.counter) {
      console.log("counter", this.state.counter);
    }
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Plus 1</button>
        <div>Current value is: {counter}</div>
      </div>
    );
  }
}
