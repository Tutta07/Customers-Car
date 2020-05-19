import React,{Fragment} from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import estilos from './estilos';

const Cabecalho = ({nomeUsuario}) =>{
  return (
    <View style={estilos.Cabecalho}>
    <Image source={require('../../assets/dogi.jpg')}
    style={estilos.fotoUsuario} />
    <Text>{nomeUsuario}</Text>
    </View>
    );
}
export default Cabecalho;