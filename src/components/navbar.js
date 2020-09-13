import * as React from "react";
import { useStyletron } from "baseui";
import { StyledLink } from "baseui/link";
import { Layer } from "baseui/layer";

import {
  Alert as Icon,
} from "baseui/icon";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";

function renderItem(item) {
  return item.label;
}

const MAIN_NAV = [
  {
    icon: Icon,
    item: { label: "Logout", icon: Icon },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  }
];

function isActive(arr, item, activeItem) {
  let active = false;
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    if (elm === item) {
      if (item === activeItem) return true;
      return isActive((item && item.nav) || [], activeItem, activeItem);
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem);
    }
  }
  return active;
}

function Navbar() {
  const [css] = useStyletron();
  const [activeNavItem, setActiveNavItem] = React.useState();
  const containerStyles = css({
    boxSizing: "border-box",
    width: "100vw",
    position: "fixed",
    top: "0",
    left: "0",
  });
  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: "none",
        color: "inherit",
        ":hover": { color: "inherit" },
        ":visited": { color: "inherit" },
      }}
      href={"/"}
    >
      Flex Funding Time Log
    </StyledLink>
  );
  return (
    <React.Fragment>
      <Layer>
        <div className={containerStyles}>
          <AppNavBar
            appDisplayName={appDisplayName}
            mainNav={MAIN_NAV}
            isNavItemActive={({ item }) => {
              return (
                item === activeNavItem ||
                isActive(MAIN_NAV, item, activeNavItem)
              );
            }}
            onNavItemSelect={({ item }) => {
              if (item === activeNavItem) return;
              setActiveNavItem(item);
            }}
          />
        </div>
      </Layer>
    </React.Fragment>
  );
}

export default Navbar;
