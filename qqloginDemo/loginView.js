/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
//导入json数据
var BadgeData=require('./BadgeData.json');
var Dimension=require('Dimensions');
var width=Dimension.get('window').width;
var cols=3;
var boxWidth=100;
var vMargin=(width-cols*boxWidth)/(cols+1);
var hMargin=25;
export  default class loginView extends Component {
  render() {
    return (
      <View style={styles.container}>          
       <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
       <TextInput placeholder="请输入用户名" style={styles.textInputStyle}/>
       <TextInput placeholder="请输入密码" password={true}style={styles.textInputStyle}/>
       <TouchableOpacity onPress={()=>this.process()}>
       <View style={styles.btn}>
           <Text style={{color:'white',fontSize:16,}} 
           ref="logintext"
           >登录</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.otherStyle}>
           <Text style={{color:'white'}}>无法登陆</Text>
           <Text style={{color:' white'}}>新用户</Text>
        </View>
        <View style={styles.bottomStyle}>
            <Text>其他登录方式</Text>
        <Image source={require('./img/qq.png')} style={{width:80,height:80,borderRadius:40}}/>
        <Image source={require('./img/wx.png')} style={{width:80,height:80,borderRadius:40,marginLeft:8}}/>
        <Image source={require('./img/wy.png')} style={{width:80,height:80,borderRadius:40,marginLeft:8}}/>
        </View>
      </View>
    );
  }
    process(){
    console.log(this.refs.logintext);   
    }
  }

  const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#dddddd',
  },
  iconStyle:{
      width:80,
      height:80,
      borderRadius:40,
      borderWidth:5,
      borderColor:'white',
      marginTop:50,
      marginBottom:30,
  },
  textInputStyle:{
    height:38,
    backgroundColor:'white',
    marginBottom:2,
    textAlign:'center'
  },
  btn:{
    height:35,
    width:300,
    backgroundColor:'blue',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  otherStyle:{
      width:350,
      marginTop:5,
      flexDirection:'row',
     justifyContent:'space-between',
  },
  bottomStyle:{
      position:'absolute',
      bottom:10,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      width:350
      }
  })
  
