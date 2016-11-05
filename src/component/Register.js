import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';

import {Actions} from 'react-native-router-flux';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var Register = React.createClass ({
  getInitialState: function(){
    return({
      number:'',
      user:'',
      password:''
    });
  },

  render(){
    return(
      <View style={styles.container}>
      <View style={[styles.toolbar, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
        <TouchableOpacity onPress = {() => Actions.pop()} style={styles.viewHuy} onPress={() => {Actions.pop()}}>
               <Text style={styles.textHuy}>Huỷ</Text>     
        </TouchableOpacity>
        <View style={styles.viewTitle}>
              <Text style={styles.textTitle}></Text>
        </View> 
        <View style={styles.viewCan}></View> 
      </View>
        <View style={styles.viewBody}>
          <View style ={styles.viewWelcome}>
            <Text style={styles.textWelcome} >Chào mừng đến với Landber</Text>
          </View>
          <View style ={styles.viewInput1}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType='next' 
              style={styles.viewTextInput}
              placeholder="  (+84)978 666768" placeholderTextColor='#adb4b7'
              onChangeText={(text) => this.setState({number: (text)})}
              value={this.state.number}
              //onSubmitEditing={() => Actions.tabbar()}
              />
          </View>
          <View style ={styles.viewInput2}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType='next' 
              style={styles.viewTextInput}
              placeholder="  Chọn một mật khẩu" placeholderTextColor='#adb4b7'
              onChangeText={(text) => this.setState({password: (text)})}
              value={this.state.password}
              />
          </View>
          <View style ={styles.viewInput2}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType='go' 
              style={styles.viewTextInput}
              placeholder="  Họ và tên" placeholderTextColor='#adb4b7'
              onChangeText={(text) => this.setState({user: (text)})}
              value={this.state.user}
              />
          </View>
          <View style ={styles.changeImage}>
            
            <TouchableOpacity>
              <Image style={styles.detailImage} source={require('../assets/image/user.png')}/>
            </TouchableOpacity>
            <Text style={styles.textImage} >Chạm để thêm ảnh đại diện</Text>
          </View>
          <TouchableOpacity onPress = {() => Actions.tabbar()}style={styles.viewAction} >
              <Text style={styles.textAction} >Thực hiện</Text>
          </TouchableOpacity>
          
        </View>
      </View>

    );
  }
});

const styles = StyleSheet.create({

 toolbar :{
  height: 64,
  flexDirection:'row',
  backgroundColor:'#f5f6f7',
  borderBottomWidth:1,
  borderColor:'#e8e9e9'
},
  container: {
    backgroundColor:'white',
    flex:1,
    alignItems:'center'
  },
  
  viewHuy: {
    width: 40,
    marginLeft:12, 
    marginTop: 30 
 },
  textHuy: {
    fontSize: 16, 
    color: '#00a8e6', 
    fontFamily:'Open Sans'
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 18,
    color: 'white' 
  },
  viewCan: {width: 40},
  viewBody: {
    flex:1, 
    alignItems:'center'
  },
  viewWelcome: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:47
  },
  textWelcome: {
    fontSize:23,
    color:'black',
    fontFamily:'Open Sans'
  },
  viewInput1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:34
  },
  viewTextInput: {
    fontFamily:'Open Sans',
    backgroundColor:'white',
    width: width- 40,
    height:37,
    borderRadius: 6,
    borderWidth:1, 
    borderColor:'#c6cbce',
    fontSize: 14
  },
  viewInput2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10.5
  },
  changeImage: {
    alignItems: 'center',
    marginTop:16, 
    flexDirection:'row',
    width: width- 40
  },
  detailImage: {
    width: 40,
    height: 40
  },
  textImage: {
    fontSize:13,
    color:'#a9a9a9',
    marginLeft: 10,
    fontFamily:'Open Sans', 
    marginBottom:7
  },
  viewAction: {
    backgroundColor:'#00a8e6',
    borderRadius: 6,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center', 
    width: width- 39,
    height: 39
  },
  textAction: {
    fontSize:18,
    color:'white',
    fontFamily:'Open Sans'
  },
         
});

export default Register;
