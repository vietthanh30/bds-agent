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
var Login = React.createClass ({
  getInitialState: function(){
    return({
      user:'',
      password:''
    });
  },

  render(){
    return(
      <View style={styles.container}>
      <View style={[styles.toolbar, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
        <TouchableOpacity style={styles.loginTouch01}>
               <Text style={styles.loginText01}>Huỷ</Text>     
        </TouchableOpacity>
        <View style={styles.viewCenter}>
              <Text style={styles.textViewCenter}></Text>
        </View> 
        <View style={styles.viewDoi}></View> 
      </View>
        <View style={styles.viewDetail}>
          <View style ={styles.wiewWelcome}>
            <Text style={styles.textWelcome} >Đăng nhập hoặc đăng ký</Text>
            <Text style={styles.textWelcome} >để lưu nhà, chat và đăng tin</Text>
          </View>
          <View style ={styles.viewInput}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType='go' 
              style={styles.viewTextInput}
              placeholder="  Nhập email hoặc số điện thoại" placeholderTextColor='#adb4b7'
              onChangeText={(text) => this.setState({password: (text)})}
              value={this.state.password}
              //onSubmitEditing={() => Actions.tabbar()}
              />
            
          </View>
          <TouchableOpacity onPress = {() => Actions.UserBack()} style={styles.buttonAction} >
              <Text style={styles.buttonTextAction} >Thực hiện</Text>
          </TouchableOpacity>
          <View style ={styles.buttonRegister}>
            <Text style={styles.buttonTextRegister} >Hoặc đăng nhập với</Text>
            <TouchableOpacity>
              <Image style={styles.loginFacebook} source={require('../images/facebook.png')}/>
            </TouchableOpacity>
          </View>
          <View style ={styles.viewAccept}>
            <Text style={styles.textAccept} >Tôi đồng ý với điều khoản dịch vụ của Landber</Text>
          </View>
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
    backgroundColor:'transparent', 
    flex:1,
    alignItems:'center'
},
  loginTouch01: {
    width: 40,
    marginLeft: 12,
    marginTop: 30 
},
  loginText01: {
    fontSize: 16, 
    color: '#00a8e6', 
    fontFamily:'Open Sans'
},
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
  textViewCenter: {
    fontSize: 18,
    color: 'white' },
  
  viewDoi: {width: 40},
  
  viewDetail: {
    flex:1,
    alignItems:'center'},
  
  wiewWelcome: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop:36
  },
  textWelcome: {
    fontSize:23, 
    color:'black',  
    fontFamily:'Open Sans'
  },
  viewInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:13
  },
  viewTextInput: {
    fontFamily:'Open Sans',
    backgroundColor:'white',
    width: width- 39,
    height:38, 
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#c6cbce',
    fontSize: 15}
  ,
  buttonAction: {
    backgroundColor:'#00a8e6',
    borderRadius: 5, 
    marginTop: 10, 
    justifyContent: 'center', 
    alignItems: 'center',  
    width: width- 39,
    height: 38
  },
  buttonTextAction: {
    fontSize:18, 
    color:'white',
    fontFamily:'Open Sans'
  },
  buttonRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18, 
    flexDirection:'row'
  },
  buttonTextRegister: {
    fontSize:14,
    color:'black',
    fontFamily:'Open Sans'
  },
  loginFacebook: {
    width: 30, 
    height: 30,
    marginLeft: 5
  },
  viewAccept: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  textAccept: {
    fontSize:13,
    color:'#7b8b91',
    fontFamily:'Open Sans'
  }
   
});

export default Login;
