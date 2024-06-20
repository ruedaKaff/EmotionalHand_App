import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, TouchableRipple, Text} from 'react-native-paper';

interface CardItemProps {
  title: string;
  onClick: () => void;
}

const CardItem: React.FC<CardItemProps> = ({title, onClick}) => {
  return (
    <View style={styles.item}>
      <TouchableRipple onPress={onClick}>
        <Card style={{backgroundColor: '#AF47D2', alignContent: 'center'}}>
          <Card.Content>
            <Card.Title
              title={title}
              titleStyle={{
                color: '#FEF8F6',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '648 0',
              }}></Card.Title>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
  },
});

export default CardItem;
