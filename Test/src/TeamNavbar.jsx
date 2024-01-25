import { Link, useLoaderData } from "react-router-dom";

function TeamNavbar() {
  const teamMembers = useLoaderData();
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id.toString()}>Team - {member.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TeamNavbar;
