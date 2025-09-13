import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";

import Home from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import { TopbarMenuLinkConfig } from "./types.ts";

import "./index.css";

const links: TopbarMenuLinkConfig[] = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout links={links} />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
