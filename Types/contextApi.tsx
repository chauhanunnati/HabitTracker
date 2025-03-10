"use client";

import { ReactNode, createContext, useState, useContext } from "react";

import { GlobalContextType } from "./GlobalContextTypes";
import { menuItemType } from "./MenuItemTypes";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faLayerGroup , faList} from "@fortawesome/free-solid-svg-icons";


const GlobalContext = createContext<GlobalContextType>({
    menuItemsObject: {
      menuItems: [],
      setMenuItems: () => {},
    },
    openSideBarObject: {
      openSideBar: false,
      setOpenSideBar: () => {},
    },
  });
  
  function GlobalContextProvider({ children }: { children: ReactNode }) {
    const [menuItems, setMenuItems] = useState<menuItemType[]>([
      { name: "All Habits", isSelected: true, icon: faRectangleList },
      { name: "Statistics", isSelected: false, icon: faChartSimple },
      { name: "Areas", isSelected: false, icon: faLayerGroup },
    ]);
  
    const [openSideBar, setOpenSideBar] = useState(false);
  
    return (
      <GlobalContext.Provider
        value={{
          menuItemsObject: { menuItems, setMenuItems },
          openSideBarObject: { openSideBar, setOpenSideBar },
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }

export function useGlobalContextProvider() {
    return useContext(GlobalContext);
}

export default GlobalContextProvider;