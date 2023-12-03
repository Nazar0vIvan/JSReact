// export function TodoListItem({ children, isComlpete }) {
//   return (
//     <label>
//       <input
//         type="checkbox"
//         defaultChecked={isComlpete}
//       />
//       {children}
//     </label>
//   );
// }

import { Component } from "react";

export class TodoListItemClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, isComlpete } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          defaultChecked={isComlpete}
        />
        {children}
      </label>
    );
  }
}
