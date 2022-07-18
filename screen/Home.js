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
          alignItems: 'center',
          margin: 8,
        }}>
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.card}>
          <Text style={styles.text}>{item.firstName}</Text>
          <Text style={styles.text}>{item.age}</Text>
          <TouchableOpacity>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
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
      <TouchableOpacity style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  image: {
    width: 200,
    height: 200,
    position: 'relative',
    zIndex: 0,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    top: '50%',
  },
  closeButton: {
    top: 3,
    left: 40,
    fontSize: 22,
    color: 'white',
  },
  button: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    margin: 8,
  },
});

export default Home;
