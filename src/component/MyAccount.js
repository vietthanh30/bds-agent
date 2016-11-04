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

var MyAccount = React.createClass ({
  getInitialState: function(){
    return({
      user:'',
      password:''
    });
  },

  render(){
    return(
      <View style={{backgroundColor:'transparent', flex:1, alignItems:'center'}}>
      <View style={[styles.toolbar, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
        <TouchableOpacity style={{width: 40, marginLeft:12, justifyContent:'center', alignItems:'center'}}>
               <Text style={{fontSize: 16, color: 'white', fontFamily:'Open Sans'}}>Huỷ</Text>     
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 18, color: 'white' }}></Text>
        </View> 
        <View style={{width: 40}}></View> 
      </View>
        
      <View style={{flex:1, alignItems:'center'}}>
        <View style ={{justifyContent: 'center', alignItems: 'center',marginTop:35}}>
        </View>
        <TouchableOpacity style ={{justifyContent: 'center', alignItems: 'center',marginTop:38}}>
          <Text style={{fontSize:20, color:'darkorange', fontFamily:'Open Sans'}} >Tai Khoan Cua Toi</Text>
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
  backgroundColor:'#00a8e6',
  borderBottomWidth:1,
  borderColor:'#e8e9e9'
}
});

export default MyAccount;
