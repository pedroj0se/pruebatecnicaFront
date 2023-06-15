import React, { useState, useEffect, useContext } from 'react'
import {  Image, StyleSheet, View, Text, ScrollView, ToastAndroid, TouchableOpacity, StatusBar, TextInput, ActivityIndicator} from 'react-native';
import CheckBox from 'expo-checkbox'
// import { Icon } from 'react-native-elements';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Style';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../../theme/AppTheme';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../../../context/UserContext';
import { RegisterAuthUseCase } from '../../../../Domain/useCases/user/RegisterAut';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterInformation'>{};

export const RegisterInformation = ({navigation, route}: Props) => {
    // const { usuario, password, confirmPassword, register, loading, errorMessage, onChange, user} = useViewModel();
    const [showPassword, setShowPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    
    const [values, setValues] = useState({
        usuario: '',
        rol: 'CLIENTE',
        password: '',
        confirmPassword: '',
    });
    const { user, saveUserSession } = useContext( UserContext );
        // const { user, saveUserSession } = useContext( UserContext );
    const [loading, setLoading] = useState(false);
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }
    const register = async () => {
        try {
            if (isValidForm()) {
                setLoading(true);
                const response = await RegisterAuthUseCase(values);
                setLoading(false);
                console.log('RESULT: ' + JSON.stringify(response));        
                if (!response.success) {
                    alert(response.message);
                }
                else {
                    saveUserSession(response.data);
                }
            }
            navigation.navigate('RegisterCompletedScreen'); // navigate to the welcome screen
        } catch (error) {
            alert(`Error : ${error}`); // show the error.
        }
    }
    const isValidForm = (): boolean => {
        if (values.usuario === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.password === '') {
            setErrorMessage('Ingresa tu correo electronico');
            return false;
        }
        if (values.confirmPassword === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }

        return true;
    }

    useEffect(() => {
        if (errorMessage != '') {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
      }, [errorMessage])
    

    // useEffect(() => {      
    //     if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
    //         navigation.replace('RegisterCompletedScreen');
    //     }
    //   }, [user])

  return (
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
                <View style={styles.headerOpacity} >
                    <Text style={{color: 'white', fontSize: 25,fontWeight: 'bold', top: '12%', textAlign: 'center'}}>4</Text>
                </View>
            </View>

            <View style={styles.containerPhone}>
                
                <TextInput
                    style={styles.input}
                    placeholder="    Usuario"
                    value={values.usuario}
                    keyboardType='email-address'
                    onChangeText={text => onChange('usuario', text)}
                />


                <TextInput
                    style={styles.input}
                    placeholder="    Contraseña"
                    keyboardType='default'
                    value={values.password}
                    onChangeText={text => onChange('password', text)}
                    secureTextEntry={visiblePassword}
                />
                <TouchableOpacity 
                      style={styles.btnEye}
                      onPress={
                          () => {
                              setVisiblePassword(!visiblePassword)
                              setShowPassword(!showPassword)
                          }}>
                      <MaterialCommunityIcons
                          name={showPassword === false ? 'eye-off-outline' : 'eye-outline'}
                          size={25}
                          color={'black'}
                      />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="    Repetir Contraseña"
                    keyboardType='default'
                    value={values.confirmPassword}
                    onChangeText={text => onChange('confirmPassword', text)}
                    secureTextEntry={visiblePassword}
                />
                {/* <TouchableOpacity
                    style={styles.btnEye}
                    onPress={
                        () => {
                            setVisiblePassword(!visiblePassword)
                            setShowPassword(!showPassword)
                        }}>
                    <MaterialCommunityIcons
                        name={showPassword === false ? 'eye-off-outline' : 'eye-outline'}
                        size={25}
                        color={'black'}
                    />
                </TouchableOpacity> */}

            
            </View>
            
            <Text style={styles.orText}>ó ingrese con</Text>  

            <View style={styles.containerSocial}>
                <TouchableOpacity
                    style={styles.roundedButtonSocial}
                    onPress={() => {}}
                >
                    <View style={styles.containerButtonSocial}>
                        <Image
                            style={styles.imageSocial}
                            source={require('../../../../../assets/facebook.png')}
                        />
                        <Text style={styles.textButtonSocial}>FACEBOOK</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundedButtonSocial}
                    onPress={() => {}}
                >
                    <View style={styles.containerButtonSocial}>
                        <Image
                            style={styles.imageSocial}
                            source={require('../../../../../assets/google.png')}
                        />
                        <Text style={styles.textButtonSocial}>GOOGLE</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>

            <View style={styles.containerCheckbox1}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox1}
                    style={styles.checkbox}
                    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                />
                <Text style={styles.textCheckBox}>Acepto las condiciones de uso y políticas de privacidad</Text>
            </View>
            <View style={styles.containerCheckbox2}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox2}
                    style={styles.checkbox}
                    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                />
                <Text style={styles.textCheckBox}>Acepto el envío de comunicaciones comerciales</Text>
            </View>
            





            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.roundedButton}
                    onPress={() => { register() }}
                >
                    <Text style={styles.textButton}>CREAR</Text>
                </TouchableOpacity>
            </View>
                        
            

            

            
        </View>
        {
          loading && 
          <ActivityIndicator 
            style={styles.loading} 
            size="large" 
            color={ MyColors.primary }  
          />
        }
    </View>
    );
}

