import React, { Fragment,useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import {Cabecalho} from './components/Cabecalho/index';
import {Foto} from './components/Foto/index';

const largura = Dimensions.get('screen').width;
// const informacoes = [ // tentar trazer uma api externa
//   { id: 1, name: 'Nelismy', age: 33 },
//   { id: 2, name: 'Orlando', age: 34 },
//   { id: 3, name: 'Pedro', age: 44 },
// ];

const App = () => {
 const[carros,setCarros]= useState([]);


    useEffect(() => {
    const leercarros = async () =>{
    const carroHTTP = await fetch("https://fipeapi.appspot.com/api/1");
    const carroJson = await carroHTTP.json();
    setCarros(carroJson);
   }
   leercarros();
  
 },[])
  return (
    <View style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <FlatList
          //  data={informacoes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Fragment>
                <Cabecalho nomeUsuario={item.fipe_name} />
                <Foto />
                <Text>{item.age}</Text>
              </Fragment>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    fontWeight: 800,
  },
  body: {
    backgroundColor: '#00ffff',
    width: largura,
    height: largura,
  },
});

export default App;
