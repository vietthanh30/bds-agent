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
var resData = [{'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')},
               {'img': require('../images/housesale.png')}]
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
   render_style_bgColor: function( number)
    {
        if(number == 0)
        {
            return ({
                width: width/3 - 15,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#eeeeee',
                borderWidth: 1,
                borderRadius: 5,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            });
        }
        else if(number == 1)
        {
            return ({
                width: width/3 - 15,
                height: 50,
                backgroundColor: '#00A9FF',
                borderColor: '#00A9FF',
                borderWidth: 1,
                borderRadius: 5,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            });
        }
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
                this.setState({curr_tab: 'chat'});
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
    var bg_DiaDiem = (this.state.curr_tab == 'diadiem') ? '#00a8e6' : 'transparent';
    var bg_HuongDan = (this.state.curr_tab == 'huongdan') ? '#00a8e6' : 'transparent';
    var bg_HinhAnh = (this.state.curr_tab == 'hinhanh') ? '#00a8e6' : 'transparent';
    var bg_MyAccount = (this.state.curr_tab == 'myaccount') ? '#00a8e6' : 'transparent';
      var content;
      if (this.state.curr_tab == 'homepg')
        {
          content = <ScrollView style={{flex: 1}}>
                    <Text style={{fontSize: 14, marginLeft: 10, marginTop: 15}}> Install Landber and make your life beautiful </Text>
                  </ScrollView>
        }
      else {
        if (this.state.curr_tab == 'hinhanh')
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
                    <Image style={{width: 21, height: 21}} source={require('../images/nav-back.png')}/>
          </TouchableOpacity>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 22, color: 'white' }}>Landber</Text>
          </View>
          <View style={{width: 40}}/>
      </View>

    <View style={{flex:1, backgroundColor:'white'}} >
           <View style={{height: 45, padding:0, margin: 0, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#dddddd', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(1)} style={{flex: 1/5, height:30, borderRadius: 0, backgroundColor: bg_Homepj, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../images/home.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(2)} style={{flex: 1/5, height:30, borderRadius: 0, backgroundColor: bg_DiaDiem, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../images/chat.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(3)} style={{flex: 1/5, height:30, borderRadius: 0, backgroundColor: bg_HuongDan, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../images/photo-camera.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSwitchTab(4)} style={{flex: 1/5, height:30, borderRadius: 0, backgroundColor: bg_HinhAnh, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 32,height:32}} source={require('../images/news.png')} />
                        </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.onSwitchTab(5)} style={{flex: 1/5, height:30, borderRadius: 0, backgroundColor: bg_MyAccount, justifyContent: 'center', alignItems: 'center'}}>
                           <Image style={{width: 32,height:32}} source={require('../images/home.png')} />
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

