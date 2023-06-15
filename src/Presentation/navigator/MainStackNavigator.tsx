import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../../../src/Presentation/views/home/Home';
import { SingUp } from '../views/register/SingUp';
import { RegisterInformation } from '../views/register/registerInformation/RegisterInformation';
import { RegisterCompletedScreen } from '../views/register/RegisterCompleted';
import { LogInScreen } from '../../../src/Presentation/views/login/LogIn';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
// import { UserProvider } from '../../../src/Presentation/context/UserContext'
import { Touchable } from 'react-native';
import { User } from '../../Domain/entities/User';
import { UserProvider } from '../../../src/Presentation/context/UserContext'



export type RootStackParamList = {
  HomeScreen: undefined,
  SingUp: undefined,
  RegisterInformation: undefined,
  RegisterCompletedScreen: undefined,
  ProfileInfoScreen: undefined,
  LogInScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export const MainStackNavigator = () => {
  return (
    <UserState>
      <Stack.Navigator
        initialRouteName="HomeScreen" 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name="RegisterInformation"
          component={RegisterInformation}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="RegisterCompletedScreen"
          component={RegisterCompletedScreen}
          options={{
            headerShown: false
        }}
          />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          options={{
            headerShown: false
          }}
        />


      </Stack.Navigator>
    </UserState>
  )
}

const UserState = ({ children }: any) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}