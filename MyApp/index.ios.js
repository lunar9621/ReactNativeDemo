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
  TextInput
} from 'react-native';
//导入json数据
var BadgeData=require('./BadgeData.json');
var Dimension=require('Dimensions');
var width=Dimension.get('window').width;
var cols=3;
var boxWidth=100;
var vMargin=(width-cols*boxWidth)/(cols+1);
var hMargin=25;
export  default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>     
       {this.renderAllBadge()}
        <TextInput style={styles.inputStyle}/>
      </View>
    );
  }

  renderAllBadge(){
    //定义数组装所有的子组件
    var allBadge=[];
    //bianlijson
    for(var i=0;i<BadgeData.data.length;i++){
      //取出单独的数据对象
      var badge=BadgeData.data[i];
      //直接装入数组
      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
          <Text style={styles.maintitleStyle}
          keyboardType={'number-pad'}
          >
            {badge.title}
          </Text>
          </View>
        )
    }
    return allBadge;
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignContent:"space-around",
  },
  outViewStyle:{
 backgroundColor:"#ccc",
 height:150,
 width:boxWidth,
 marginLeft:vMargin,
 marginTop:hMargin,
 alignItems:'center',
 justifyContent:'center',
  },
  imageStyle:{
 width:80,
 height:80
  },
  inputStyle:{
 width:300,
 height:50,
 borderWidth:1,
 borderColor:'#e8e8e8'
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
