import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [addedItemId, setAddedItemId] = useState(null);

   const [user2, setUser2] = useState({
    name: "Le Duc Binh", 
    email: 'abc@gmail.com', 
    phone: "098876654331"
  });

  useEffect(() => {
    fetch('https://66f4d07977b5e889709a8de9.mockapi.io/chat')
      .then(response => response.json())
      .then(jsonResponse => {
        console.log('Data from API:', jsonResponse);
        setData(jsonResponse); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const sentAPI = () => {
    fetch('https://66f4d07977b5e889709a8de9.mockapi.io/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Nguyen Van Anh', email: 'anh.nguyen@gmail.com', phone: '0123456789' }),
    })
    .then(response => response.json())
    .then(jsonResponse => {
      setData(prevData => [...prevData, jsonResponse]);
      setAddedItemId(jsonResponse.id);
    })
    .catch(error => console.error('Error:', error));
  };

  const deleteAPI = (itemId) => {
    fetch(`https://66f4d07977b5e889709a8de9.mockapi.io/chat/${itemId}`, {
      method: 'DELETE',
    })
    .then(() => {
      console.log(`Item with id ${itemId} deleted.`);
      setData(prevData => prevData.filter(item => item.id !== itemId));
    })
    .catch(error => console.error('Error:', error));
  };
 
  const updateUserData = () => { 
  if (addedItemId) {
    const updatedUser = { ...user2 };
    fetch(`https://66f4d07977b5e889709a8de9.mockapi.io/chat/${addedItemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
    .then(response => response.json())
    .then(updatedItem => {
      console.log('Updated Response:', updatedItem);
      setData(prevData => prevData.map(item => 
        item.id === addedItemId ? updatedItem : item
      ));
    })
    .catch(error => console.error('Error:', error));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <View style={styles.textContainer1}>
        <Image source={require('./assets/Screen2/checkicon.png')} />
        <View style={styles.titleContainer}>
          <Text style={styles.listTitle}>{item.job}</Text>
        </View>
      </View>
      <View style={styles.groupButton}>
        <TouchableOpacity onPress={updateUserData}>
          <Image source={require('./assets/Screen2/editicon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sentAPI}>
          <Image style={styles.button_size} source={require('./assets/Screen2/addbutton.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteAPI(item.id)}>
          <Image style={styles.button_size} source={require('./assets/Screen2/minusbutton.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}>
          <Image source={require('./assets/Screen2/ArrowIcon.png')}/>
        </TouchableOpacity>
        <View style={styles.user_group}>
          <Image source={require('./assets/Screen2/faceicon.png')}/>
          <View style={styles.username}>
            <Text style={{fontFamily: 'Epilogue', fontWeight: 700, fontSize: 20}}>Hi Twinkle</Text>
            <Text style={{fontFamily: 'Epilogue',fontWeight: 700, fontSize: 14, color: 'gray'}}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <View style={styles.search_box}>
        <Image source={require('./assets/Screen2/searchicon.png')}/>
        <TextInput style={{width: '100%', height: '100%', color:'gray', outline: 'none', marginLeft: 5}} placeholder='Search'/>
      </View>
      <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={true}
      />
       <TouchableOpacity 
        onPress={()=>navigation.navigate('Screen3')}
        style={{marginTop: 12}}>
        <Image source={require('./assets/Screen2/plusbutton.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    height: 60
  },
  user_group: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginRight: 20
  },
  username: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  search_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 30
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(144, 149, 160, 1)',
    borderRadius: 10,
    marginVertical: 12,
  },
  listTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
  },
  textContainer1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    marginRight: 5
  },
  button_size: {
    width: 23,
    height: 23,
  },
});

export default Screen2;
