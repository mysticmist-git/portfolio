import { Outlet } from "react-router";
import pick from "lodash/pick";
import { TopbarMenuLinkConfig } from "../types";
import { TopBar } from "./TopBar";

type LayoutProps = {
  links?: TopbarMenuLinkConfig[];
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <TopBar {...pick(props, "links")} />
      <Outlet />
    </div>
  );
}

export default Layout;
