import { Link } from "react-router-dom";

function TeamNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/team/joe">Team - Joe</Link>
        </li>
        <li>
          <Link to="/team/sally">Team - Sally</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TeamNavbar;
