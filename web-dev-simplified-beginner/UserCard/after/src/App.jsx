import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";

import "./user.css";
import user from "./user.json";

export default function App() {
  const { name, age, phoneNumber, address } = user;
  return (
    <div>
      <UserCard
        name={name}
        age={age}
        phoneNumber={phoneNumber}
        address={address}
      />
      <br />
      <UserCardClass
        name={name}
        age={age}
        phoneNumber={phoneNumber}
        address={address}
      />
    </div>
  );
}
