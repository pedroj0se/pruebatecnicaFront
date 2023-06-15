import React, { useEffect, useState, useRef } from 'react';
import { MyColors } from '../../theme/AppTheme';
import firebase from 'firebase/compat/app';
import { getApp, initializeApp } from 'firebase/app';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import auth, { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button, Image, StyleSheet, View, Text, ScrollView, ToastAndroid, TouchableOpacity, StatusBar, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { CountryCode } from '../../contants';
import { StackScreenProps } from '@react-navigation/stack';
import { Platform } from 'react-native';
import FlagItem from '../../components/FlagItem';
import { StaticImageService } from '../../services';
import Display from '../../components/Display';
import fbConfig from '../../../config/config';

const getDropdownStyle = (y: number) => ({ ...styles.countryDropdown, top: y + 60 });
interface Props extends StackScreenProps<RootStackParamList, 'SingUp'> { };
export const SingUp = ({ navigation, route }: Props) => {

    const [selectedCountry, setSelectedCountry] = useState(
        CountryCode.find(country => country.name === 'Colombia'),
    );
    const [inputsContainerY, setInputsContainerY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState<any>({});


    try {
        firebase.initializeApp(fbConfig);
    } catch (error) {
        console.log("Initializing error ", error);
    }

    const app = getApp();
    const auth = getAuth(app);

    if (!app?.options || Platform.OS === 'web') {
        throw new Error(
            'This example only works on Android or iOS, and requires a valid Firebase config.'
        );
    }
    const recaptchaVerifier = useRef<any>(null);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setVerificationID] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const firebaseConfig = app ? app.options : undefined;
    const [info, setInfo] = useState("");
    const attemptInvisibleVerification = false;

    const handleSendVerificationCode = async () => {
        try {
            const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
            const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
            ); // get the verification id
            setVerificationID(verificationId); // set the verification id
            setInfo('Success : Verification code has been sent to your phone'); // If Ok, show message.
        } catch (error) {
            setInfo(`Error : ${error}`); // show the error
        }
    };
    const handleVerifyVerificationCode = async () => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode); // get the credential
            await signInWithCredential(auth, credential); // verify the credential
            setInfo('Success: Phone authentication successful'); // if OK, set the message
            navigation.navigate('RegisterInformation'); // navigate to the welcome screen
        } catch (error) {
            setInfo(`Error : ${error}`); // show the error.
        }
    }
    return (
        <View style={styles.container}>

            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />

            {
                // info && <Text style={styles.text}>{info}</Text>
            }

            { // show the phone number input field when verification id is not set.
                !verificationId && (
                    <View style={styles.container}>
                        <View style={styles.containerLogin}>
                            <View style={{ flexDirection: 'row', left: '5%' }}>
                                <View style={styles.header} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>1</Text>
                                </View>
                                <View style={styles.headerOpacity} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>2</Text>
                                </View>
                                <View style={styles.headerOpacity} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>3</Text>
                                </View>
                                <View style={styles.headerOpacity} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>4</Text>
                                </View>
                            </View>
                            <View style={styles.containerPhone}>
                                <Image
                                    source={require('../../../../assets/phone.png')}
                                    style={styles.imageHeader}
                                />
                                <Text style={styles.textPhone}>Ingresa tu número de celular para continuar</Text>
                            </View>
                            <View
                                style={styles.inputsContainer}
                                onLayout={({
                                    nativeEvent: {
                                        layout: { y },
                                    },
                                }) => setInputsContainerY(y)}>
                                <TouchableOpacity
                                    style={styles.countryListContainer}
                                    onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <Image
                                        source={{ uri: StaticImageService.getFlagIcon(selectedCountry?.code) }}
                                        style={styles.flatIcon}
                                    />
                                    <Text style={styles.countryCodeText}>
                                        {selectedCountry?.dial_code}
                                    </Text>
                                    <AntDesign name="circledowno" size={15} />
                                </TouchableOpacity>
                                <View style={styles.phoneInputContainer}>
                                    <TextInput
                                        placeholder="+570000000000"
                                        placeholderTextColor={'#0E122B'}
                                        selectionColor={'#F8F7F7'}
                                        textContentType='telephoneNumber'
                                        keyboardType="number-pad"
                                        onFocus={() => setIsDropdownOpen(false)}
                                        style={styles.inputText}
                                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                    />
                                </View>
                            </View>
                            <View style={styles.missingPass}>
                                <TouchableOpacity onPress={() => navigation.navigate('RegisterInformation')}>
                                    <Text style={styles.textPass}>¿Ya tienes cuenta?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.register}>
                                <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')}>
                                    <Text style={styles.textRegister}>Iniciar sesión con usuario y contraseña</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.signinButton}
                                activeOpacity={0.8}
                                onPress={() => handleSendVerificationCode()}
                                // title= "Send Verification Code"
                                disabled={!phoneNumber}>
                                <Text style={styles.signinButtonText}>CONTINUAR</Text>
                            </TouchableOpacity>
                            {isDropdownOpen && (
                                <View
                                    style={getDropdownStyle(inputsContainerY)}
                                    onLayout={({
                                        nativeEvent: {
                                            layout: { x, y, height, width },
                                        },
                                    }) => setDropdownLayout({ x, y, height, width })}>
                                    <FlatList
                                        data={CountryCode}
                                        keyExtractor={item => item.code}
                                        renderItem={({ item }) => (
                                            <FlagItem
                                                {...item}
                                                onPress={(country: any) => {
                                                    setSelectedCountry(country);
                                                    setIsDropdownOpen(false);
                                                }}
                                            />
                                        )}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                )

            }

            { // if verification id exists show the confirm code input field.
                verificationId && (
                    <View style={styles.container}>
                        <View style={styles.containerLogin}>
                            <View style={{ flexDirection: 'row', left: '5%' }}>
                                <View style={styles.header} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>1</Text>
                                </View>
                                <View style={styles.header} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>2</Text>
                                </View>
                                <View style={styles.headerOpacity} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>3</Text>
                                </View>
                                <View style={styles.headerOpacity} >
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: '12%', textAlign: 'center' }}>4</Text>
                                </View>
                            </View>
                            <View style={styles.containerPhone}>
                                <Image
                                    source={require('../../../../assets/telefono-inteligente.png')}
                                    style={styles.imageReenviar}
                                />
                                {/* INGRESAR EL CODIGO ENVIADO AL CELULAR */}
                                <Text style={styles.content}>
                                    Ingresa el codigo que fue enviado a tu celular{' '}
                                    <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
                                </Text>
                            </View>

                            <View style={styles.otpContainer}>
                                <View style={styles.otpBox}>
                                    {/* <TextInput
                                        style={styles.otpText}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={firstInput}
                                        onChangeText={text => {
                                        setOtp({ ...otp, 1: text });
                                        text && secondInput.current?.focus();
                                        }}
                                    /> */}
                                    <TextInput
                                        style={styles.otpText}
                                        placeholder='Confirma el código'
                                        keyboardType="number-pad"
                                        onChangeText={setVerificationCode}
                                    />
                                </View>
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    disabled={!verificationCode}
                                    style={styles.roundedButton}
                                    onPress={() => handleVerifyVerificationCode()}
                                >
                                    <Text style={styles.textButton}>VERIFICAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    // <View>
                    //     <Text style={styles.text}>Enter the verification code</Text>

                    //     <TextInput
                    //         editable={!!verificationId}
                    //         placeholder= "123456"
                    //         onChangeText={setVerificationCode}
                    //     />

                    //     <Button
                    //         title= "Confirm Verification Code"
                    //         disabled={!verificationCode}
                    //         onPress = {() => handleVerifyVerificationCode()}
                    //     />
                    // </View>
                )
            }

            {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#aaa"
    },
    container: {
        flex: 1,
        backgroundColor: MyColors.encima,
    },
    header: {
        backgroundColor: MyColors.icon,
        width: 50,
        height: 50,
        borderRadius: 8,
        top: '20%',
        marginRight: 30,
    },
    headerOpacity: {
        backgroundColor: MyColors.icon,
        width: 50,
        height: 50,
        borderRadius: 8,
        top: '20%',
        marginRight: 30,
        opacity: 0.5,
    },
    containerLogin: {
        flex: 1,
        marginBottom: 18,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        position: 'relative',
        backgroundColor: MyColors.background,
        borderRadius: 30,
    },
    containerPhone: {
        marginTop: 120,
        borderRadius: 30,
    },
    imageHeader: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        top: '5%'
    },
    textPhone: {
        color: 'black',
        fontSize: 18,
        top: '12%',
        textAlign: 'center',
        opacity: 0.6,
        marginLeft: 50,
        marginRight: 50,
    },
    // REGISTER WHIT PHONE
    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
        top: 10,
    },
    countryListContainer: {
        backgroundColor: '#F8F7F7',
        width: Display.setWidth(22),
        marginRight: 10,
        height: Display.setHeight(6),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        bordereWidth: 0.5,
        borderColor: '#EAEAEA',
        flexDirection: 'row',
    },
    phoneInputContainer: {
        backgroundColor: '#F8F7F7',
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#EAEAEA',
        justifyContent: 'center',
        flex: 1,
    },
    flatIcon: {
        height: 20,
        width: 20,
    },
    countryCodeText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: '#0E122B',
        // fontFamily: Fonts.POPPINS_MEDIUM,
    },
    inputText: {
        fontSize: 15,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: '#0E122B',
    },
    countryDropdown: {
        backgroundColor: '#F8F7F7',
        position: 'absolute',
        width: Display.setWidth(80),
        height: Display.setHeight(50),
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#EAEAEA',
        zIndex: 3,
    },
    missingPass: {
        // marginTop: '5%',
    },
    register: {
        marginTop: 10,
    },
    textRegister: {
        color: MyColors.icon,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
    },
    textPass: {
        color: MyColors.text,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
        opacity: 0.6,
    },
    signinButton: {
        backgroundColor: MyColors.icon,
        borderRadius: 12,
        marginHorizontal: 40,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: '#FFFFFF',
        // fontFamily: Fonts.POPPINS_MEDIUM,
    },
    imageReenviar: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        top: '5%'
    },
    content: {
        fontSize: 18,
        // fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 40,
        // marginBottom: 20,
        marginHorizontal: 20,
    },
    phoneNumberText: {
        fontSize: 18,
        //   fontFamily: Fonts.POPPINS_REGULAR,
        lineHeight: 16 * 1.4,
        color: MyColors.icon,
    },
    otpContainer: {
        marginHorizontal: 40,
        //   marginBottom: 20,
        top: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: 8,
        borderColor: MyColors.icon,
        borderWidth: 1.7,
    },
    otpText: {
        fontSize: 25,
        color: '#191d35',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    button: {
        // position: 'absolute',
        marginBottom: 15,
        alignSelf: 'center',
        top: '15%'
    },
    roundedButton: {
        width: 280,
        height: 50,
        backgroundColor: MyColors.icon,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },

    textButton: {
        color: 'white',
        fontSize: 20,
        // fontFamily: 'Pacifico',
        fontWeight: 'bold'
    },
});