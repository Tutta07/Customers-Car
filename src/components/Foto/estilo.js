import React, {Fragment}from 'react';
import {Dimensions, StyleSheet} from 'react-native';

 const largura= Dimensions.get("screen").width
 const estilo=StyleSheet.create({
  imagen:{
    width:largura,
    heigth:largura,
    
  }
})

export default estilo;