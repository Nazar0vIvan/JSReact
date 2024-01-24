import { Link } from "react-router-dom";
import teamMembers from "./teamMembers.json";
import { useEffect } from "react";

function TeamNavbar() {
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id}>Team - {member.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TeamNavbar;
