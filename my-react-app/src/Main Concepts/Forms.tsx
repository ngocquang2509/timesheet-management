import React from "react";

export class Form extends React.Component<{}, {value: string}> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e: any) {
    e.preventDefault()
    console.log(this.state.value);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value='Submit' />
        </form>
    )
  }
}
