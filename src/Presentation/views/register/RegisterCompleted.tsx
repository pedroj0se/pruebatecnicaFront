import React, { useEffect, useState } from 'react'
import {  Image, StyleSheet, View, Text, ScrollView, ToastAndroid, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import CheckBox from 'expo-checkbox'
// import { Icon } from 'react-native-elements';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import styles from './Style';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../theme/AppTheme';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RegisterCompletedParamList } from '../../navigator/RegisterCompleted';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterCompletedScreen'>{};

export const RegisterCompletedScreen = ({navigation, route}: Props) => {
  return (
    // COLUMN
    <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.containerLogin}>
            <View style={{flexDirection: 'row', left: '5%'}}>
                <View style={styles.header} >
                    <Text style={{color: 'white', fontSize: 25,fontWeight: 'bold', top: '12%', textAlign: 'center'}}>1</Text>
                </View>
                <View style={styles.header} >
                    <Text style={{color: 'white', fontSize: 25,fontWeight: 'bold', top: '12%', textAlign: 'center'}}>2</Text>
                </View>
                <View style={styles.header} >
                    <Text style={{color: 'white', fontSize: 25,fontWeight: 'bold', top: '12%', textAlign: 'center'}}>3</Text>
                </View>
                <View style={styles.header} >
                    <Text style={{color: 'white', fontSize: 25,fontWeight: 'bold', top: '12%', textAlign: 'center'}}>4</Text>
                </View>
            </View>

            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>¡TU CUENTA HA SIDO CREADA!</Text>
                {/* <Text style={styles.textHeader}>¡BIENVENIDO {usuario}!</Text> */}
                <Image
                    style={styles.imageChecked}
                    source={require('../../../../assets/user-interface.png')}
                />
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.roundedButton}
                        onPress={() => { navigation.navigate('ProfileInfoScreen') }}
                    >
                        <Text style={styles.textButton}>COMPLETA PERFIL</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
                        
            

            

            
        </View>

    </View>
    );
}

