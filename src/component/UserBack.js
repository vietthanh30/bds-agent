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
var Modal  = require('react-native-modalbox');

var UserBack = React.createClass ({
  getInitialState: function(){
    return({
      user:'',
      password:'',
      email:'',
      phone:'',
      makichhoat:'',
      newpassword:'',
      xacnhan:''
    });
  },
  forgetPassWord : function()
      {
       this.refs.modalForgetPassWord.open();
      },
  
  resetPassWord : function()
      {
       this.refs.modalResetPassWord.open();
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
            <Text style={styles.textWelcome} >Chào mừng bạn quay lại</Text>
          </View>
          <View style ={styles.viewInput}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType='go' 
              style={styles.viewTextInput}
              placeholder="  Nhập mật khẩu" placeholderTextColor='#adb4b7'
              onChangeText={(text) => this.setState({password: (text)})}
              value={this.state.password}
              //onSubmitEditing={() => Actions.()}
              />
          </View>
          <TouchableOpacity onPress = {() => Actions.Register()} style={styles.viewAction} >
              <Text style={styles.textAction} >Thực hiện</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.forgetPassWord()} style ={styles.viewForgetPass}>
            <Text style={styles.textForgetPass} >Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        
        <Modal open={this.state.open} style={styles.modalmore} ref={"modalForgetPassWord"} position={"center"} swipeToClose={false}>
            <View style={styles.modalContainer}>
              <View style={[styles.toolbarModalSend, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
                <TouchableOpacity onPress={()=>this.refs.modalForgetPassWord.close()} style={styles.passWordHuy}>
                       <Text style={styles.textPassHuy}>Huỷ</Text>     
                </TouchableOpacity>
                <View style={styles.modalViewTitle}>
                      <Text style={styles.modalTextTile}></Text>
                </View> 
                <View style={styles.modalTextCan}></View> 
              </View>
              <View style={styles.modalBody}>
                <View style ={styles.bodyForget}>
                  <Text style={styles.bodyTextFoget} >Quên mật khẩu?</Text>
                </View>
                <TextInput
                  underlineColorAndroid='rgba(0,0,0,0)'
                  returnKeyType='go' 
                  style={styles.modalInput}
                  placeholder="  Nhập email hoặc số điện thoại" placeholderTextColor='#adb4b7'
                  onChangeText={(text) => this.setState({email: (text)})}
                  value={this.state.email}
                  />
                <TouchableOpacity onPress={()=>this.resetPassWord()} style={styles.actionButton} >
                    <Text style={styles.textActionButton}>Tiếp tục</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        
        <Modal open={this.state.open} style={styles.modalmore} ref={"modalResetPassWord"} position={"center"} swipeToClose={false}>
            <View style={styles.modalContainer}>
              <View style={[styles.toolbarModalSend, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
                <TouchableOpacity onPress={()=>this.refs.modalResetPassWord.close()} style={styles.modalBack} >
                    <Image style={styles.imageBack} source={require('../assets/image/nav-back.png')}/>
                </TouchableOpacity>
                <View style={styles.modalViewTitle}>
                      <Text style={styles.modalTextTile}>Cập nhật mật khẩu</Text>
                </View> 
                <View style={styles.modalTextCan}></View> 
              </View>
              <View style={styles.modalBody}>
                <View style ={styles.viewCapNhat}>
                  <Text style={styles.textXacNhan} >Hãy cập nhật mật khẩu mới cho tài khoản của bạn.</Text>
                </View>
                <TextInput
                  underlineColorAndroid='rgba(0,0,0,0)'
                  returnKeyType='next' 
                  style={styles.modalInput}
                  placeholder="  Email hoặc số điện thoại" placeholderTextColor='#adb4b7'
                  onChangeText={(text) => this.setState({makichhoat: (text)})}
                  value={this.state.makichhoat}
                  />
                <TextInput
                  underlineColorAndroid='rgba(0,0,0,0)'
                  returnKeyType='next' 
                  style={styles.modalInputDone}
                  placeholder="  Mã xác nhận" placeholderTextColor='#adb4b7'
                  onChangeText={(text) => this.setState({newpassword: (text)})}
                  value={this.state.newpassword}
                  />
                <TextInput
                  underlineColorAndroid='rgba(0,0,0,0)'
                  returnKeyType='go' 
                  style={styles.modalInputDone}
                  placeholder="  Mật khẩu mới" placeholderTextColor='#adb4b7'
                  onChangeText={(text) => this.setState({xacnhan: (text)})}
                  value={this.state.xacnhan}
                  />
                <TouchableOpacity onPress={() => Actions.Login()} style={styles.actionButton} >
                    <Text style={styles.textActionButton} >Thực hiện</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        
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
  modalmore: {
    position:'absolute',
    backgroundColor: 'white',
    width: width,
    height: height
},
  toolbarModalSend :{
    height: 64,
    flexDirection:'row',
    backgroundColor:'#00a8e6',
    borderBottomWidth:1,
    borderColor:'#e8e9e9'
},
  container: {
    backgroundColor:'transparent',
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
  viewCan: {
    width: 40
  },
  viewBody: {
    flex:1,
    alignItems:'center'
  },
  viewWelcome: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:46
  },
  textWelcome: {
    fontSize:23,
    color:'black', 
    fontFamily:'Open Sans'
  },
  viewInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:35
  },
  viewTextInput: {
    fontFamily:'Open Sans',
    backgroundColor:'white',
    width: width- 39,
    height:37, 
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#c6cbce', 
    fontSize: 15
  },
  viewAction: {
    backgroundColor:'#00a8e6', 
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    width: width- 39,
    height: 38
  },
  textAction: {
    fontSize:18, 
    color:'white',
    fontFamily:'Open Sans'
  },
  viewForgetPass: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:38
  },
  textForgetPass: {
    fontSize:13.5,
    color:'#7b8b91',
    fontFamily:'Open Sans'
  },
  modalContainer: {
    backgroundColor:'transparent',
    flex:1,
    alignItems:'center'
  },
  passWordHuy: {
    width: 40,
    marginLeft:12, 
    marginTop: 30
  },
  textPassHuy: {
    fontSize: 16,
    color: 'white',
    fontFamily:'Open Sans'
  },
  modalViewTitle: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:15
  },
  modalTextTile: {
    fontSize: 18,
    color: 'white'
  },
  modalTextCan: {
    width: 40
  },
  modalBody: {
    flex:1, 
    alignItems:'center'
  },
  bodyForget: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:46
  },
  bodyTextFoget: {
    fontSize:21, 
    color:'black',
    fontFamily:'Open Sans'
  },
  modalInput: { 
    fontFamily:'Open Sans',
    backgroundColor:'white',
    width: width- 39,
    height:38,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#c6cbce', 
    fontSize: 15,
    marginTop:46,
  },
  modalInputDone: { 
    fontFamily:'Open Sans',
    backgroundColor:'white',
    width: width- 39,
    height:38,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#c6cbce',
    fontSize: 15, 
    marginTop:10,

  },
  actionButton: {
    backgroundColor:'#00a8e6',
    borderRadius: 5, 
    marginTop: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    width: width- 39,
    height: 38
  },
  textActionButton: {
    fontSize:18,
    color:'white', 
    fontFamily:'Open Sans'
  },
  modalBack: {
    width: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },
  imageBack: {
    width: 21, 
    height: 21
  },
  viewXacNhan: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:28
  },
  viewCapNhat: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:46
  },
  textXacNhan: {
    fontSize:15,
    color:'black',
    fontFamily:'Open Sans'
  },
  
});

export default UserBack;
