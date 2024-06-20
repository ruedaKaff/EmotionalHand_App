import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import CardItem from '../components/shared/CardList';

export const MainEmotionsScreen = () => {
  const data = [
    'Alegre',
    'Triste',
    'Deprimido',
    'Ansioso',
    'Frustrado',
    'No sabes',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.tittle}>
          Hola @Name
        </Text>
        <Text style={styles.tittle2}>
        ¿Como te sientes hoy ?
        </Text>
      </View>
      <View style={styles.containerScreen}>
        <View style={styles.containerScreenGallery}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <CardItem title={item} onClick={() => console.log(item)} />
            )}
            keyExtractor={item => item}
            numColumns={2} // specify number of columns
            style={{margin: 0.2}}
          />

          {/* <Text style={styles.tittle}>Item 1</Text>
        <Text style={styles.tittle}>Item 1</Text>
        <Text style={styles.tittle}>Item 1</Text>
        <Text style={styles.tittle}>Item 1</Text> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEE34A',
    padding: 10,
    paddingTop: 35,
  },
  container2: {
    flex: 0.8,
    backgroundColor: '#FEE34A',
    
    
  },
  containerScreen: {
    flex: 4,
    backgroundColor: '#FEF8F6',
    padding: 8,
    borderRadius: 35,
  },
  containerScreenGallery: {
    flex: 4,
  },
  tittle: {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#523B60',
  },
  tittle2: {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF8F00',
  },
  inputName: {
    borderRadius: 15,
    width: 'auto',
    color: 'black',
    backgroundColor: 'white',
  },
});
