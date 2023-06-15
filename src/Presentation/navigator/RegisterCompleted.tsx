import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RegisterCompletedScreen } from '../views/register/RegisterCompleted';
import { LogInScreen } from '../../../src/Presentation/views/login/LogIn';

// import { UserProvider } from '../../../src/Presentation/context/UserContext'

import { Touchable } from 'react-native';
import { User } from '../../Domain/entities/User';
export type RegisterCompletedParamList = {
    RegisterCompletedScreen: { user: User },
    LogInScreen: undefined,
  

}

const Stack = createNativeStackNavigator<RegisterCompletedParamList>();


export const RegisterCompletedNavigator = () => {
  return (
    // <UserState>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen
            name="RegisterCompletedScreen"
            component={RegisterCompletedScreen}
            // initialParams={{ user: route.params.estanco}}
            options={{
                headerShown: false
              }}
            />
            <Stack.Screen
            name="LogInScreen"
            component={LogInScreen}
            />

      </Stack.Navigator>
    // {/* </UserState> */}
  )
}

// const UserState = ({ children }: any) => {
//   return (
//     <UserProvider>
//       {children}
//     </UserProvider>
//   )
// }