import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CardsList } from "../components/CardsList";
import db from "../../api/db.json";

const SIDEBAR_MIN_WIDTH = 150;
const SIDEBAR_MAX_WIDTH = 1000;

export const SidebarResizeContext = createContext();

export default function RootLayout() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(200);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        let width =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left;
        if (width > SIDEBAR_MAX_WIDTH) width = SIDEBAR_MAX_WIDTH;
        if (width < SIDEBAR_MIN_WIDTH) width = SIDEBAR_MIN_WIDTH;
        setSidebarWidth(width);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  function handleResize(isSizebarResizing) {
    
  }

  return (
    <SidebarResizeContext.Provider value={isResizing}>
      <div className="app">
        <div
          ref={sidebarRef}
          className="sidebar"
          style={{ width: sidebarWidth }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <CardsList cards={db.cards} />
        </div>
        <div
          className={`handler ${isResizing ? "handler_resize" : ""}`}
          onMouseDown={startResizing}
        ></div>
        <div className="notes" />
      </div>
    </SidebarResizeContext.Provider>
  );
}

async function loader() {
  console.log("RootLayout loader");
  return null;
}

export const rootLayoutRoute = {
  element: <RootLayout />,
  loader,
};
