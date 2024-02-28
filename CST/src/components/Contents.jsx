import React from "react";
import { getContents } from "../../api/contents";
import { TreeView } from "./TreeView";
import { useLoaderData } from "react-router-dom";

export function Contents() {
  const contents = useLoaderData();
  return <TreeView data={contents} />;
}

async function loader({ request: { signal } }) {
  return await getContents("react", { signal });
}

export const contentsRoute = {
  element: <Contents />,
  loader,
};
