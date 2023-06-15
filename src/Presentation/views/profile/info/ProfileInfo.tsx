import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { ImageBackground, View, Text, Button, Image, Pressable } from 'react-native'
import useViewModel from './ViewModel';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';

export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { user, removeUserSession } = useViewModel();

  useEffect(() => {
    if (user.id === '') {
      navigation.replace('HomeScreen');
    }
  }, [user])
  

  return (
    <View style={styles.container}>

      <Image
        source={require('../../../../../assets/fondo.jpg')}
        style={styles.imageBackground}
      />
      {/* <ImageBackground source={require('../../../../../assets/fondo.jpg')} style={styles.imageBackground} resizeMode={'cover'}></ImageBackground> */}

      <Pressable
        style={styles.logout}
        onPress={() => {
          removeUserSession();
        }}>
        <Image
          source={require('../../../../../assets/logout.png')}
          style={styles.logoutImage}
        />
      </Pressable>


      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../../assets/user.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
            <Text style={styles.user}>USUARIO:</Text>
            <Text style={styles.userUser}>{user?.usuario} </Text>
          </View>
      </View>
            
            

            {/* <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
              <Image
                source={ require('../../../../../assets/phone.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                <Text>{ user?.phone }</Text>
                <Text style={ styles.formTextDescription }>Telefono</Text>
              </View>
            </View> */}

            {/* <RoundedButton
              onPress={() => {
                navigation.navigate('ProfileUpdateScreen', { user: user! })
              }}
              text='ACTUALIZAR INFORMACION' /> */}

        {/* </View> */}

    </View>
  )
}




{/* <Button 
  onPress={() => {
    removeSession();
    navigation.navigate('HomeScreen');
  }}
  title='Cerrar sesion'
/> */}