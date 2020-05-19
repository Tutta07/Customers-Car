import React, {Fragment} from 'react';
import {
  Dimensions,
  Image,
  Text,

  } from 'react-native';
  import estilo from './estilo';

const Foto = () => {
  return ( 
    <Fragment>

   <Image source={require('../../assets/dogi.jpg')} 
    style={estilo.imagen}/>

    </Fragment>
  )
};


 export default Foto;
