import React from "react";

const withHoverImg = (ImageComponent: React.ElementType) => {
  return class extends React.Component<{}, {opacity: number}> {
    constructor(props: any) {
      super(props);
      this.state = {
        opacity: 1,
      };

      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseLeave() {
      this.setState({
        opacity: 0.5,
      });
    }

    onMouseEnter() {
      this.setState({
        opacity: 1,
      });
    }

    render() {
      return (
        <div
          style={{ opacity: this.state.opacity }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <ImageComponent />
        </div>
      );
    }
  };
};

export default withHoverImg;
