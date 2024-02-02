import { Link } from "react-router-dom";
import { Card } from "./Card";

export function CardsList({ cards, isResizing }) {
  return (
    <div className="cards-list">
      {cards.map((card) => {
        const { cardId, title, desc, icon, path } = card;
        return (
          <Link key={cardId} to={path} className={isResizing ? "disabled" : ""}>
            <Card title={title} desc={desc} icon={icon} />
          </Link>
        );
      })}
    </div>
  );
}
