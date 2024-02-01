import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { SidebarResizeContext } from "../layouts/RootLayout";

export function CardsList({ cards }) {
  const isSidebarResizing = useContext(SidebarResizeContext);

  return (
    <div className="cards-list">
      {cards.map((card) => {
        const { cardId, title, desc, icon, path } = card;
        return (
          <Link
            key={cardId}
            to={path}
            className={isSidebarResizing ? "disabled" : ""}
          >
            <Card title={title} desc={desc} icon={icon} />
          </Link>
        );
      })}
    </div>
  );
}
