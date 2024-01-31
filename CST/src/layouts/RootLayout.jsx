import React, { useCallback, useEffect, useRef, useState } from "react";

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
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
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

  return (
    <div className="app">
      <div
        ref={sidebarRef}
        className="sidebar"
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}>
        <div className="sidebar__contents" />
      </div>
      <div className="handler" onMouseDown={startResizing} />
      <div className="frame" />
    </div>
  );
}
