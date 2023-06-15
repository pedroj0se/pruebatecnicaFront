import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: MyColors.encima,
      // alignItems: 'center',
      // justifyContent: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInput: {
        // flex: 1,
        position: 'relative',
        // width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        top: '30%'
    },
    image : {
      flex: 2    
    },
    header:{
        backgroundColor: MyColors.icon,
        width: 100,
        height: 100,
        borderRadius: 35,
        top: '20%'
    },
    imageHeader: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        top: '25%'
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
    containerButton: {
      flex: 1,
      alignSelf: 'center',
    //   position: 'relative',
      marginTop: '90%',
    //   flexDirection: 'column',
    },
    roundedButton: {
      width: 280,
      height: 50,
    //   marginTop: 100,
      backgroundColor: MyColors.icon,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        // fontFamily: 'Pacifico',
        fontWeight: 'bold'
    },
    missingPass: {
        marginTop: 10,
    },
    register: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textRegister: {
        color: MyColors.icon,
        fontWeight: 'bold',
        fontSize: 15
    },
    textPass: {
        color: MyColors.primary,
        fontWeight: 'bold',
        fontSize: 15
    },
    // 
    btnEye: {
        position: 'absolute',
        top: 76,
        right: 20,

    },

  
  });

export default LoginStyles;