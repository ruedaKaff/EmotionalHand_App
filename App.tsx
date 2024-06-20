import React from 'react';
import {SafeAreaView} from 'react-native';
import HelloUserScreen from './src/screens/HelloUserScreen';
import {MainEmotionsScreen} from './src/screens/MainEmotionsScreen';
import {PaperProvider} from 'react-native-paper';
import {ActiviyScreen} from './src/screens/ActiviyScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props}></IonIcon>,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <MainEmotionsScreen></MainEmotionsScreen>
        {/* <HelloUserScreen></HelloUserScreen> */}
        {/* <ActiviyScreen></ActiviyScreen> */}
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
