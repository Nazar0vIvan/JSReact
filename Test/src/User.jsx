import React from "react";

function User({ address: { street, city }, name, email, username, phone }) {
  return (
    <li>
      {name} {email} {username} {phone} {street} {city}
    </li>
  );
}

export default User;

/*

*/
