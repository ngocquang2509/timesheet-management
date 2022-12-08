import React, { useState } from "react";
import { USDtoVND } from "./USDtoVND";
import { VNDtoUSD } from "./VNDtoUSD";

export class Caculator extends React.Component<
  {},
  { vnd: number; usd: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }

  handleChange = (data: any) => {
    this.setState(data);
  };

  render() {
    return (
      <div style={{ margin: "3%" }}>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
      </div>
    );
  }
}
