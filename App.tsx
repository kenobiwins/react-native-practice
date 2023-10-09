import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import { Routes } from "./routes";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    [Routes.HOME]: HomeScreen,
    [Routes.COMPONENTS]: ComponentsScreen,
    [Routes.LIST]: ListScreen,
    [Routes.IMAGE]: ImageScreen,
  },
  {
    initialRouteName: Routes.HOME,
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
