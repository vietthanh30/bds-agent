import React from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicatorIOS,
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Login from './Login';
import UserBack from './UserBack';
import Register from './Register';
import HomePage from './HomePage';
import ChatWith from './ChatWith';
import DangTin from './DangTin';
import QuanLyTin from './QuanLyTin';
import MyAccount from './MyAccount';
import TabTitle from '../src/TabTitle';



var App = React.createClass({

  render(){
    return (
      <Router>
        <Scene key="root">
          
          <Scene 
            hideNavBar
            key="Login"
            component={Login}
            title="Login"
            initial
          />
          <Scene
            key="UserBack"
            component={UserBack}
            title="UserBack"
            hideNavBar
            />
          <Scene
            key="Register"
            component={Register}
            title="Register"
            hideNavBar
            />
          <Scene
            key="HomePage"
            component={HomePage}
            title="HomePage"
            hideNavBar
            />
          <Scene
          key="tabbar"
          tabs
          tabBarStyle={{backgroundColor:'white',height:55}}
          >
            <Scene key="trangchu"
              title="Trang chủ"
              icon={TabTitle}
              ic = {require('../images/tab-KhamPha.png') }
              icActive = {require('../images/tab-KhamPha-Active.png') }
              navigationBarStyle={{
              backgroundColor: 'rgba(30,30,30,0.6)',
              borderBottomColor: 'rgba(204,204,204,0.2)',
              borderBottomWidth: 0.5,
                  }}
              titleStyle={{ color: 'white' }} >
              <Scene
                key="HomePage"
                component={HomePage}
                title="HomePage"
                hideNavBar
                />
               
            </Scene>
          
            <Scene key="chat"
              title="Chat"
              icon={TabTitle}
              ic = {require('../images/tab-KhamPha.png') }
              icActive = {require('../images/tab-KhamPha-Active.png') }
              navigationBarStyle={{
              backgroundColor: 'rgba(30,30,30,0.6)',
              borderBottomColor: 'rgba(204,204,204,0.2)',
              borderBottomWidth: 0.5,
              }}
              titleStyle={{ color: 'white' }}
              hideNavBar
              >
              <Scene
                key="ChatWith"
                component={ChatWith}
                title="ChatWith"
                hideNavBar
                />
            </Scene> 
          
            <Scene
                key="dangtin"
                title="Đăng tin"
                icon={TabTitle}
                ic = {require('../images/tab-KhamPha.png') }
                icActive = {require('../images/tab-KhamPha-Active.png') }
                navigationBarStyle={{
                backgroundColor: 'rgba(30,30,30,0.6)',
                borderBottomColor: 'rgba(204,204,204,0.2)',
                borderBottomWidth: 0.5,
                }}
                titleStyle={{ color: 'white' }}
                hideNavBar
                >
              <Scene
                key="DangTin"
                component={DangTin}
                title="DangTin"
                hideNavBar
                />
            </Scene>
            <Scene
                key="quanlytin"
                title="Quản lý tin"
                icon={TabTitle}
                ic = {require('../images/tab-KhamPha.png') }
                icActive = {require('../images/tab-KhamPha-Active.png') }
                navigationBarStyle={{
                backgroundColor: 'rgba(30,30,30,0.6)',
                borderBottomColor: 'rgba(204,204,204,0.2)',
                borderBottomWidth: 0.5,
                }}
                titleStyle={{ color: 'white' }}
                hideNavBar
                >
              <Scene
                key="QuanLyTin"
                component={QuanLyTin}
                title="QuanLyTin"
                hideNavBar
                />
            </Scene>
            <Scene
                key="myaccount"
                title="Tôi"
                icon={TabTitle}
                ic = {require('../images/tab-KhamPha.png') }
                icActive = {require('../images/tab-KhamPha-Active.png') }
                navigationBarStyle={{
                backgroundColor: 'rgba(30,30,30,0.6)',
                borderBottomColor: 'rgba(204,204,204,0.2)',
                borderBottomWidth: 0.5,
                }}
                titleStyle={{ color: 'white' }}
                hideNavBar
                >
              <Scene
                key="MyAccount"
                component={MyAccount}
                title="MyAccount"
                hideNavBar
                />
            </Scene>
            
          </Scene>
     </Scene>
      </Router>
      
    );
  }
});
module.exports = App;