import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen3 = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style = {styles.titleContainer}>
          <Image source={require('./assets/Screen2/faceicon.png')}/>
          <View style={styles.titleContainer1}>
            <Text style={styles.title1}>Hi Twinkle</Text>
            <Text style={styles.title2}>Have agrate day a head</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
          <Image source={require('./assets/Screen2/ArrowIcon.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.group2}>
        <Text style={styles.title3}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.group3}>
        <View style={styles.inputBox}>
          <Image source={require('./assets/Screen3/indexicon.png')}/>
          <TextInput style={styles.inputYourJob} placeholder="Input your job"/>
        </View>
      </View>
      <View style={styles.group3}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Screen2')}
        style={styles.btn}>
          <Text style={styles.btnTitle}>FINISH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group3}>
        <Image style={styles.bookIcon}
        source={require('./assets/Screen1/screen1icon1.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  group1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title1: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 400
  },
  title2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 700,
    color: 'gray'
  },
  group2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title3: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 700
  },
  inputBox: {
    width: 334,
    height: 44,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  group3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputYourJob: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    paddingLeft: 12,
    color: 'gray',
    width: '100%',
    height: '100%',
    outline: 'none'
  },
  btn: {
    height: 44,
    width: 190,
    backgroundColor: 'rgba(0, 189, 214, 1)',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTitle: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
    color: 'white'
  },
  bookIcon: {
    width: 190,
    height: 170
  }
})
export default Screen3;