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
import LoginView from './loginView';
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
     <LoginView />
    );
  }
}
  

AppRegistry.registerComponent('MyApp', () => MyApp);
