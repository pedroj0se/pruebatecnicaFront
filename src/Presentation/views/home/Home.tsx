import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
// import useViewModel from './ViewModel';
import styles from './Style';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RootStackParamList } from '../../navigator/MainStackNavigator';


interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    // const { email, password, errorMessage, onChange, login, user } = useViewModel();
    
    // useEffect(() => {
    //     if (errorMessage !== '') {
    //         ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    //     }
    // }, [errorMessage])

    // useEffect(() => {      
    //     if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
    //         if (user.roles?.length! > 1) {
    //             navigation.replace('RolesScreen'); 
    //         }
    //         if(user?.rol == '1'){
    //             navigation.replace('AdminTabsNavigator');
    //         }
    //         if(user?.rol == '3'){
    //             navigation.replace('ClientTabsNavigator');
    //         }
    //         if(user?.rol == '4'){
    //             navigation.replace('EmpresarioTabsNavigator');
    //         }
    //     }
    // }, [user])
    
    // COLUMN
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <ImageBackground source={require('../../../../assets/fondo.jpg')} style={styles.image} resizeMode={'cover'}>

                <View style={styles.header} >
                    <Image
                        source={require('../../../../assets/copa.png')}
                        style={styles.imageHeader}
                    />
                    <Text style={styles.text}>WECUP!</Text>
                </View>


                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <RoundedButton
                            text='INICIAR SESION'
                            onPress={() => navigation.navigate('LogInScreen')}
                        />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.roundedButton}
                            onPress={() => { navigation.navigate('SingUp') }}
                        >
                            <Text style={styles.textButton}>REGISTRO</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </ImageBackground>
        </View>
    );
}
    
