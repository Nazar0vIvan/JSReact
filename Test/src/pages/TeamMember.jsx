import { useLoaderData, useParams } from "react-router-dom";

function TeamMember() {
  const member = useLoaderData();
  return <h1>Team Member - {member.name}</h1>;
}

export default TeamMember;
