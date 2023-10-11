import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Routes } from "./routes";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    [Routes.HOME]: HomeScreen,
    [Routes.COMPONENTS]: ComponentsScreen,
    [Routes.LIST]: ListScreen,
    [Routes.IMAGE]: ImageScreen,
    [Routes.COUNTER]: CounterScreen,
    [Routes.COLOR]: ColorScreen,
    [Routes.SQUARE]: SquareScreen,
    [Routes.TEXT]: TextScreen,
    [Routes.BOX]: BoxScreen,
  },
  {
    initialRouteName: Routes.HOME,
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
