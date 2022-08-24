import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabScreen from '../BottomTabScreens/BottomTabNavigator';
import Profile from './DrawrScreens/Profile';
import Contact from './DrawrScreens/Contact';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={BottomTabScreen} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}