import { Outlet } from "react-router";
import pick from "lodash/pick";

import { TopbarMenuLinkConfig } from "src/types";
import { TopBar } from "src/components/TopBar";
import Footer from "src/components/Footer";

type LayoutProps = {
  links?: TopbarMenuLinkConfig[];
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <TopBar {...pick(props, "links")} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
