import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Booking } from "./components/Booking";
import { JoinTeam } from "./components/JoinTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "booking", Component: Booking },
      { path: "join-our-team", Component: JoinTeam },
    ],
  },
]);
