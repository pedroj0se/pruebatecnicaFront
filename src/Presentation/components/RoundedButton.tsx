import React, {useEffect, useState} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'
import { useFonts } from 'expo-font'

interface Props {
    text: string,
    onPress: () => void
}

export const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
        style={ styles.roundedButton }
        onPress={() => onPress()}
    >
        <Text style={ styles.textButton }>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: 280,
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        // fontFamily: 'Pacifico',
        fontWeight: 'bold'
    }
});
