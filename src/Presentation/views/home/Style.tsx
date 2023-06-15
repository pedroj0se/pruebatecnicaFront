import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 2
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    top: '40%'
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    // fontFamily: 'Roboto',
    fontStyle: 'italic',
    textShadowColor: 'black',
  },
  imageHeader: {
    width: 50,
    height: 50,
  },
  button: {
    // position: 'absolute',
    marginBottom: 15,
    alignSelf: 'center',
    top: '80%'
  },
  containerButton: {
    flex: 1,
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 40,
    flexDirection: 'column',
  },
  roundedButton: {
    width: 280,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textButton: {
    color: 'black',
    fontSize: 20,
    // fontFamily: 'Pacifico',
    fontWeight: 'bold'
  }
});
    

export default HomeStyles;