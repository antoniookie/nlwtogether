import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {SignIn} from '../screens/Signin';
import { theme } from "../global/styles/theme";

const {Navigator, Screen} = createStackNavigator()

export function AuthRoutes(){
          return(
                    <Navigator 
                              screenOptions={{
                                        cardStyle: {
                                                  backgroundColor: theme.color.secondary80,
                                        },
                                        headerShown: false,
                                        }}>
                              <Screen name="SignIn" component={SignIn} />
                              <Screen name="Home" component={Home} />
                    </Navigator>
          )
}