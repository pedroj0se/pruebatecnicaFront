import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, Text, ScrollView, ToastAndroid, TouchableOpacity, StatusBar, TextInput} from 'react-native';
// import { Icon } from 'react-native-elements';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Style';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../theme/AppTheme';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface Props extends StackScreenProps<RootStackParamList, 'LogInScreen'>{};

export const LogInScreen = ({navigation, route}: Props) => {

    const { usuario, password, login, errorMessage, user, onChange} = useViewModel();
    const [showPassword, setShowPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(true);
    useEffect(() => {
        if (errorMessage != '') {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
      }, [errorMessage])

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user])
    

    return (
        // COLUMN
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <View style={styles.containerLogin}>
                <View style={styles.header} >
                    <Image
                        source={require('../../../../assets/usuario.png')}
                        style={styles.imageHeader}
                    />
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        style={styles.input}
                        placeholder="    Usuario"
                        value={usuario}
                        keyboardType='email-address'
                        onChangeText={ text => onChange('usuario', text)}

                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="    Contraseña"
                        keyboardType='default'
                        value={password}
                        onChangeText={ text => onChange('password', text)}
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
                            name={ showPassword === false ? 'eye-off-outline' : 'eye-outline'}
                            size={25}
                            color={'black'}
                        />
                    </TouchableOpacity>


                    <View style={styles.missingPass}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={styles.textPass}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <Text>Aún no tienes cuenta. </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                            <Text style={styles.textRegister}>Registrate</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.roundedButton}
                        onPress={ () => { login() }}
                    >
                        <Text style={styles.textButton}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </View>

                
            </View>

        </View>
        );
}

