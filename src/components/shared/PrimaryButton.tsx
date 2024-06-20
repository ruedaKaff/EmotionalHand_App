

import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';

export const PrimaryButton = () => {
  return (
    <Pressable style={styles.button}>
    <Text style={styles.title} >+</Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({

    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginVertical: 20,
    },
  
    button: {
      borderRadius: 15,
      backgroundColor: '#5856D6',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
  });
  export default PrimaryButton;