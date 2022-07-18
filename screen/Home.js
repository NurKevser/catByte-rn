import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

const Home = ({navigation}) => {
  const [userList, setUserList] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      console.log(response);
      setUserList(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {
          user: item,
        });
      }}>
      <View
        style={{
          width: '45%',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#ccc',
          margin: 10,
        }}>
        <Image style={styles.image} source={{uri: item.image}} />

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{item.firstName}</Text>
          <Text>{item.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
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

export default Home;
