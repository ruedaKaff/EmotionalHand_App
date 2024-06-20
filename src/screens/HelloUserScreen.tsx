import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native';
import {Button, FAB} from 'react-native-paper';
import {globalStyles} from '../Theme/global.Styles';
import Icon from 'react-native-vector-icons/Ionicons';
// import TextField from '@material-ui/core/TextField';

interface Props {
  names?: string;
}

const HelloUserScreen = ({names = 'master01'}: Props) => {
  const [name, setName] = useState('Master01');

  const handleChange = (text: string) => {
    setName(text);
  };

  return (
    <ImageBackground
      source={require('../Theme/Background.png')}
      style={globalStyles.centerContainer}>
      <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>¿Cómo te llamas?</Text>

        <TextInput
          style={globalStyles.inputName}
          onChangeText={handleChange}
          placeholder="Escribe"
          value={name}
        />
        {/* <Button mode="contained" onPress={() => console.log('Pressed')}>
        +
      </Button> */}
        <Icon name="arrow-forward-circle-outline" size={40}></Icon>
        <FAB
          icon="arrow-forward-circle-outline"
          label="Bienvenido,"
          style= {globalStyles.fab}
          onPress={() => console.log('Pressed')}
        />

        <Text style={globalStyles.welcomeUser1st}>Bienvenid@, {name}</Text>
      </View>
    </ImageBackground>
  );
};

export default HelloUserScreen;
