import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    logout: {
        position: 'absolute',
        alignSelf: 'center',
        top: 30,
        right: 15,
    },
    logoutImage: {
        width: 40,
        height: 40,
    },
    infoContainer: {
        // width: '100%',
        marginLeft: '28%',
        marginTop: '55%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    userUser: {
        fontSize: 25,
        color: 'white',
    },


});

export default ProfileInfoStyles;