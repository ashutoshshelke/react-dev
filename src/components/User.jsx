import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+" constructor");
    this.state = {
      count: 10,
    };
  }

  componentDidMount() {
    console.log(this.props.name+" component did mount");
  }

  render() {
    console.log(this.props.name+" render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default User;
