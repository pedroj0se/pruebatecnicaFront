import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import Display from '../../components/Display';

const RegisterStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: MyColors.encima,
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
        
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loading: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left:0, 
    },
    header:{
        backgroundColor: MyColors.icon,
        width: 50,
        height: 50,
        borderRadius: 8,
        top: '20%',
        marginRight: 30,
        
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerOpacity:{
        backgroundColor: MyColors.icon,
        width: 50,
        height: 50,
        borderRadius: 8,
        top: '20%',
        marginRight: 30,
        opacity: 0.5,
    },
    // REGISTER WHIT PHONE
    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
        top: 10,
    },
    countryListContainer:{
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
    phoneInputContainer:{
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

    containerPhone: {
        // marginBottom: 18,
        // marginLeft: 15,
        // marginRight: 15,
        marginTop: 120,
        // position: 'relative',
        borderRadius: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
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
    // 
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
    // 

    button: {
        // position: 'absolute',
        marginBottom: 15,
        alignSelf: 'center',
        top: '5%'
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
    input: {
        width: 280,
        height: 50,
        backgroundColor: MyColors.encima,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 15,
        alignSelf: 'center',
        // top: '0%'
    },
    // 
    btnEye: {
        position: 'absolute',
        top: 80,
        right: 55,

    },
    orText: {
        color: MyColors.text,
        fontWeight: 'bold',
        lineHeight: 15 *1.4,
        marginLeft: 5,
        fontSize: 16,
        alignSelf: 'center',
        opacity: 0.6,
        // marginTop: 10,
    },
    // SOCIAL
    containerSocial: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    roundedButtonSocial: {
        width: 120,
        height: 60,
        // backgroundColor: MyColors.icon,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 10,
    },
    textButtonSocial: {
        color: 'black',
        marginLeft: 10,
        // fontSize: 20,
        // fontFamily: 'Pacifico',
        fontWeight: 'bold'
    },
    imageSocial: {
        width: 40,
        height: 40,
    },
    containerButtonSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
        // marginRight: 20,
    },
    // 
    containerCheckbox1:{
        flexDirection: 'row',
        // width: 190,
        marginLeft: 45,
        marginRight: 45,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCheckbox2:{
        flexDirection: 'row',
        // width: 190,
        marginLeft: 55,
        marginRight: 80,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        alignSelf: "center",
        color: MyColors.icon,
        // marginTop: 20,
        // marginRight: 20,
    },
    textCheckBox:{
        color: MyColors.text,
        fontWeight: 'bold',
        // lineHeight: 15 *1.4,
        marginLeft: 15,
        fontSize: 16,
        alignSelf: 'center',
        opacity: 0.6,
    },
    //
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 15,
        marginRight: 15,
        marginTop: '40%',
        marginBottom: 40,
    },
    textHeader: {
        color: MyColors.icon,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
    },
    imageChecked: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        top: '5%',
        marginBottom: '35%'
    },
    // 
    containerReenviar: {
        marginTop: '15%',
        marginBottom: 50,
    },
    reenviar: {
        marginTop: 10,
    },
    textReenviar: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonReenviar: {
        width: 190,
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        alignSelf: 'center',
        top: '5%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
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
      color: '#FBA83C',
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
    }


  
  });

export default RegisterStyles;