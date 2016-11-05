import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Modal   = require('react-native-modalbox');
var resData = [{'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')},
               {'img': require('../assets/image/housesale.png')}]
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var ChatWith = React.createClass({
  getInitialState: function (){
    return ({
     size: {width: width, height: 100},
      curr_tab: 'homepg',
      dataSource: ds.cloneWithRows(resData),
      resData:resData,
    });
    },
   chon: function (data, sectionID , rowID){
      this.setState({
          kihieu: data.name,
          dataSource: ds.cloneWithRows(resData)
        });
    },
 
  _renderRow: function(data, sectionID , rowID){
    
      return(      
         
           <View style={{height: 100, justifyContent: 'center', alignItems: 'center'} }>
            <TouchableOpacity style={{ marginTop:20,width: width/3, height: 100, borderColor: '#CCCCCC', borderWidth: 1, borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: width/3, height: 100}} source={data.img} />
            </TouchableOpacity>
           </View>
       
        );
    }, 
    onSwitchTab: function(tab: number)
    {
        switch (tab) {
            case 1:
                this.setState({curr_tab: 'homepg'});
                break;
            case 2:
                this.setState({curr_tab: 'chatwith'});
                break;
            case 3:
                this.setState({curr_tab: 'camera'});
                break;
            case 4:
                this.setState({curr_tab: 'detail'});
                break;
            case 5:
                this.setState({curr_tab: 'myaccount'});
                break;
        }
    },
  render(){
    var bg_Homepj = (this.state.curr_tab == 'homepg') ? '#00a8e6' : 'transparent';
    var bg_ChatWith = (this.state.curr_tab == 'chatwith') ? '#00a8e6' : 'transparent';
    var bg_Camera = (this.state.curr_tab == 'camera') ? '#00a8e6' : 'transparent';
    var bg_Detail = (this.state.curr_tab == 'detail') ? '#00a8e6' : 'transparent';
    var bg_MyAccount = (this.state.curr_tab == 'myaccount') ? '#00a8e6' : 'transparent';
    
      var content;
      if (this.state.curr_tab == 'homepg')
        {
          content =
        <ScrollView style={{ flex:1, backgroundColor:'white'}}>
          <View style={{ width:width, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:15, color:'#00a8e6', marginTop: 2, fontFamily:'Open Sans' }}>BỘ SƯU TẬP</Text>
            <Text style={{fontSize:14, color:'black', marginTop: 1, marginBottom: 1, fontFamily:'Open Sans'}}>Nhà Mới Đăng</Text>
            <Text style={{fontSize:12, color:'#7b8b91', marginBottom: 2, fontFamily:'Open Sans' }}>xung quanh vị trí hiện tại</Text>
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
        }
      else {
        if (this.state.curr_tab == 'camera')
          {
            content = <View style={{flex: 1,backgroundColor:'white'}} >
                          <ListView 
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap'}} dataSource={this.state.dataSource}  renderRow={this._renderRow}
                            />
                      </View>
          }
      }
    
    
  return (
    <View style={{backgroundColor:'#00a8e6', flex: 1}}>
      <View style={[styles.toolbar, Platform.OS === 'ios' ? {marginTop: 0} : null]}>
         <TouchableOpacity onPress={() =>Actions.pop()} style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 21, height: 21}} source={require('../assets/image/nav-back.png')}/>
          </TouchableOpacity>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 22, color: 'white' }}>Landber</Text>
          </View>
          <View style={{width: 40}}/>
      </View>

    <View style={{flex:1, backgroundColor:'white'}} >
           <View style={{height: 45, padding:0, margin: 0, borderWidth: 0, justifyContent: 'center', alignItems: 'center', borderColor: '#dddddd', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(1)} style={{flex: 1/5, height:45, borderRadius: 0, backgroundColor: bg_Homepj, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../assets/image/home.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(2)} style={{flex: 1/5, height:45, borderRadius: 0, backgroundColor: bg_ChatWith, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../assets/image/chat.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(3)} style={{flex: 1/5, height:45, borderRadius: 0, backgroundColor: bg_Camera, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../assets/image/photo-camera.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(4)} style={{flex: 1/5, height:45, borderRadius: 0, backgroundColor: bg_Detail, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../assets/image/news.png')} />
                        </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.onSwitchTab(5)} style={{flex: 1/5, height:45, borderRadius: 0, backgroundColor: bg_MyAccount, justifyContent: 'center', alignItems: 'center'}}>
                           <Image style={{width: 32,height:32}} source={require('../assets/image/user.png')} />
                        </TouchableOpacity>
              </View>
         <View style={{flex:1,backgroundColor:'white'}}>{content}</View>
      </View>
    </View>
  );
}
});

const styles = StyleSheet.create({
  toolbar :{
  justifyContent:'center',
  alignItems:'center',
  height: 64,
  flexDirection:'row',
}
});

export default ChatWith;

