import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList80178Navigator from '../features/NotificationList80178/navigator';
import Settings80177Navigator from '../features/Settings80177/navigator';
import Settings80169Navigator from '../features/Settings80169/navigator';
import UserProfile80167Navigator from '../features/UserProfile80167/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList80178: { screen: NotificationList80178Navigator },
Settings80177: { screen: Settings80177Navigator },
Settings80169: { screen: Settings80169Navigator },
UserProfile80167: { screen: UserProfile80167Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
