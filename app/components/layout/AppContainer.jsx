import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Link } from "@remix-run/react";

function AppContainer({ children }) {
  return (
    <Provider store={store}>
      <nav className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex justify-between h-16 items-center px-5">
            <div className="w-1/2 flex flex-row items-center justify-between">
              <Link to="/">
                <span className=" text-white font-bold">akakçe</span>
              </Link>
              <div className="w-8/12 hidden md:block px-7  "></div>
            </div>
            <ul className="w-1/2 flex justify-end">
              <li className="flex flex-row items-center">
                <span className="text-white text-sm font-thin">
                  ALBEK ALTAY
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl  px-2 xl:px-0 flex flex-col sm:flex-row py-4 min-h-[700px]">
        <div className="w-full sm:px-6 mb-4 sm:mb-0">{children}</div>
      </div>
    </Provider>
  );
}

export default AppContainer;
