import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
} from 'react-native';

const Detail = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Detail Screen</Text>
        <Text>{user.firstName}</Text>
        <Text>{user.lastName}</Text>
        <Text>{user.age}</Text>
        <Text>{user.gender}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.birthDate}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 66,
    height: 58,
  },
  item: {},
});

export default Detail;
