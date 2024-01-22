import { Component } from "react";

export class UserCardClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, phoneNumber, address } = this.props;
    return (
      <div className="card">
        <h2 className="name">{name}</h2>
        <div className="body">
          <div className="label">Age:</div>
          <div>{age}</div>
          <div className="label">Phone:</div>
          <div>{phoneNumber}</div>
          <div className="label">Address:</div>
          <div>{address}</div>
        </div>
      </div>
    );
  }
}
