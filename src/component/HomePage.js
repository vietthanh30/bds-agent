import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HomePage = React.createClass ({
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
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent:'center', alignItems:'center', marginRight:12}}>
                <Text style={{fontSize: 23, color: 'white' }}>Landber</Text>
          </View> 
          <View style={{width: 40}}></View> 
        </View>
        <ScrollView style={{ flex:1, backgroundColor:'white'}}>
          <View style={{ width:width, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:15, color:'#00a8e6', marginTop: 2}}>BỘ SƯU TẬP</Text>
            <Text style={{fontSize:14, color:'black', marginTop: 1, marginBottom: 1}}>Nhà Mới Đăng</Text>
            <Text style={{fontSize:12, color:'#7b8b91', marginBottom: 2}}>xung quanh vị trí hiện tại</Text>
          </View>
          <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{borderBottomWidth:1, borderColor:'#e8e9e9'}}>
              <TouchableOpacity style={{width:width,height:150}}>
               <Image style={{width: width,height:150}} source={require('../assets/image/housesale.png')} />
                <View style={{marginTop: -55, marginLeft: 10}}>
                   <Text style={{fontSize:15,backgroundColor: 'transparent', color:'white'}}>2.2 tỷ</Text>
                    <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>Bình Chánh, HCM</Text>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>82m2</Text>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>  2p.ngủ</Text>
                     </View>
                </View> 
              </TouchableOpacity>
            </View>

            <View style={{width: width,height:150, flexDirection:'row'}}>
              <View style={{borderBottomWidth:1, borderColor:'#e8e9e9'}}>
                <TouchableOpacity style={{width:width*2/5,height:150}}>
                 <Image style={{width: width*2/5,height:150}} source={require('../assets/image/housesale.png')} />
                  <View style={{marginTop: -55, marginLeft: 10}}>
                     <Text style={{fontSize:15,backgroundColor: 'transparent', color:'white'}}>2.2 tỷ</Text>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>Bình Chánh, HCM</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>82m2</Text>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>  2p.ngủ</Text>
                       </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1, borderLeftWidth:1, borderColor:'#e8e9e9'}}>
                <TouchableOpacity style={{width:width*3/5,height:150}}>
                 <Image style={{width: width*3/5,height:150}} source={require('../assets/image/housesale.png')} />
                  <View style={{marginTop: -55, marginLeft: 10}}>
                     <Text style={{fontSize:15,backgroundColor: 'transparent', color:'white'}}>2.2 tỷ</Text>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>Bình Chánh, HCM</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>82m2</Text>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>  2p.ngủ</Text>
                       </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{width: width,height:150, flexDirection:'row'}}>
              <View style={{borderBottomWidth:1, borderColor:'#e8e9e9'}}>
                <TouchableOpacity style={{width:width*3/5,height:150}}>
                 <Image style={{width: width*3/5,height:150}} source={require('../assets/image/housesale.png')} />
                  <View style={{marginTop: -55, marginLeft: 10}}>
                     <Text style={{fontSize:15,backgroundColor: 'transparent', color:'white'}}>2.2 tỷ</Text>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>Bình Chánh, HCM</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>82m2</Text>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>  2p.ngủ</Text>
                       </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1, borderLeftWidth:1, borderColor:'#e8e9e9'}}>
                <TouchableOpacity style={{width:width*2/5,height:150}}>
                 <Image style={{width: width*2/5,height:150}} source={require('../assets/image/housesale.png')} />
                  <View style={{marginTop: -55, marginLeft: 10}}>
                     <Text style={{fontSize:15,backgroundColor: 'transparent', color:'white'}}>2.2 tỷ</Text>
                      <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>Bình Chánh, HCM</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>82m2</Text>
                        <Text style={{fontSize:12,backgroundColor: 'transparent', color:'white'}}>  2p.ngủ</Text>
                       </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center',height: 38}}>
          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', backgroundColor:'#00a8e6', marginTop: 10, borderRadius: 5, height: 38, width: width- 39}}>
            <Text style={{fontSize:18, color:'white', fontFamily:'Open Sans'}}>Xem thêm</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    );
  }
});

const styles = StyleSheet.create({

 toolbar :{
  height: 64,
  flexDirection:'row',
  backgroundColor:'#00a8e6',
  marginTop:0,
  borderBottomWidth:1,
  borderColor:'#e8e9e9'
},
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
});

export default HomePage;
