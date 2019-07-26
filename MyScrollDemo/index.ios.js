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
  ScrollView,
  Image
} from 'react-native';
import ImageData from './ImageData.json';

var TimerMixin=require('react-timer-mixin');
var Dimensions=require('dimension');
var {width}=Dimensions.getConfirmation('window');
var MyScrollDemo =React.createClass({
  //注册计时器
  mixins:[TimerMixin],

  getDefaultProps(){
    return{
duration:1000
    }
  },
  ComponentDidmount(){ 
    //开启定时器
    this.startTimer();
  },
  //设置可变的和初始值
  getInitialState(){
    return{
      currentPage:0
    }
  },

  render() {
    return (
      <View style={styles.container}>
         <ScrollView  ref="scrollView" horizontal={true}
         //隐藏水瓶滚动条
         showsHorizontalScrollIndicator={false}
         //自动分页
         pagingEnabled={true}
         onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
         onScrollBeginDrag={()=>this.onBeginDrag()}
         onScrollEndDrag={()=>this.onEndDrag()}
         >
           {this.renderAllImage()}
          </ScrollView>
          {/*返回指示器 */}
          <View style={styles.pageViewStyle}>
            {this.renderFivePoint()}
            </View>
      </View>
    );
  },
  renderAllImage(){
    //数组
    var AllImage=[];
    
    var imgData=ImageData.data;
    for(var i=0;i<imgData.length;i++){
      var imgitem=imgData[i];
    AllImage.push(
      <Image source={{uri:imgitem.img}} key={i} style={{width:400,height:120}}/>
    )
    }
return AllImage;
  },

  renderFivePoint(){
    var points=[];
    var imgData=ImageData.data;
    var style;
    for(var i=0;i<imgData.length;i++){
      style=(i==this.state.currentPage)?{color:"orange"}:{color:"#ddd"}
    points.push(
      <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
    )
    }
    return points;
  },
  //当一真滚动结束后调用
  onAnimationEnd(e){
    //求出水平方向偏移
    var offsetX=e.nativeEvent.contentOffset.x;
    //求出当前页数
    var curentpage=math.floor(offsetX/width);
    //更新状态
    this.setState({
      currentPage:curentpage,
    })
  },
  //开启定时器
  startTimer(){
   var scrollView=this.refs.scrollView;
   var imgCount=ImageData.length;
   this.timer=this.setInterval(function(){
     var activePage;
     if((this.state.currentPage+1)>=imgCount){
       activePage=0;
     }else{
       activePage=this.state.currentPage+1;
     }
     this.setState({
       currentPage:activePage
     })
     var offsetX=activePage*width;
     scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true})
   },this.props.duration)
  },
  onBeginDrag(){
  //停止定时器
  this.clearInterval(this.timer);
  },
  onEndDrag(){
    //停止定时器
    this.startTimer();
    }
});

const styles = StyleSheet.create({
  container:{
  marginTop:25,
  },
  pageViewStyle:{
    width:width,
    height:25,
    backgroundColor:'rgba(241,241,241,0.2)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }
});

AppRegistry.registerComponent('MyScrollDemo', () => MyScrollDemo);
