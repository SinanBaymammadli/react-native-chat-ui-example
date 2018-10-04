import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
// import Home from "./screens/Home";
import Inbox from "./screens/Inbox";
import Chat from "./screens/Chat";

// const HomeStackNav = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: "Home",
//     },
//   },
// });

const InboxStackNav = createStackNavigator({
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      title: "Inbox",
    },
  },
});

const RootTabNav = createBottomTabNavigator({
  // HomeStackNav: {
  //   screen: HomeStackNav,
  //   navigationOptions: {
  //     title: "Home",
  //   },
  // },
  InboxStackNav: {
    screen: InboxStackNav,
    navigationOptions: {
      title: "Inbox",
    },
  },
});

const RootStackNav = createStackNavigator({
  RootTabNav: {
    screen: RootTabNav,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "Chat",
    },
  },
});

export default RootStackNav;
