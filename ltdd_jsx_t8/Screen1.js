import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Image source={require('./assets/Screen1/screen1icon1.png')} />
        <Text style={styles.title}>MANAGE YOUR {'\n'} TASK</Text>
      </View>
      <View style={styles.subcontainer2}>
        <View style={styles.enter_name_fill}>
          <View style={styles.sub_enter_name_fill}>
            <Image source={require('./assets/Screen1/emailicon.png')} />
            <TextInput style={styles.inputText} placeholder ='Enter your name'/>
          </View>
        </View>
      </View>
      <View style={styles.subcontainer2}>
        <TouchableOpacity style={styles.btn}
        onPress={()=>navigation.navigate('Screen2')}>
          <Text style={styles.btnText}>GET STARTED ➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#fff',
  },
  subcontainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: 'rgba(131, 83, 226, 1)',
    textAlign: 'center',
    marginTop: 10,
  },
  enter_name_fill: {
    width: 334,
    height: 43,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  sub_enter_name_fill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: 'gray',
    paddingLeft: 5,
    width: '100%',
    height: '100%',
    outline: 'none'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 44,
    backgroundColor: 'rgba(0, 189, 214, 1)',
    borderRadius: 12,
  },
  btnText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
});

export default Screen1;
