import React from "react";
import Constants from "expo-constants";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import SvgUri from "react-native-svg";

const Ponto = () => {

    const navigation = useNavigation()

    function voltar() {
      navigation.goBack()
    }
    function irParaDetalhe() {
      navigation.navigate('Detalhe')
    }
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={voltar}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo !</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                <View style={styles.mapContainer}>
                    <MapView style={styles.map} 
                    initialRegion={{
                      latitude: -12.9488864,
                      longitude: -38.4323967,
                      latitudeDelta: 0.014,
                      longitudeDelta: 0.014
                    }}
                    >
                      <Marker
                      onPress={irParaDetalhe}
                      style={styles.mapMarker}
                      coordinate={{
                        latitude: -12.9488864,
                        longitude: -38.4323967
                      }}
                      >
                        <View style={styles.mapMarkerContainer}>
                          <Image style={styles.mapMarkerImage} source={{uri:'https://www.brasilcoleta.com.br/wp-content/uploads/2019/11/Cooperativa-de-Reciclagem-e-como-funciona_2.png'}}/>
                          <Text style={styles.mapMarkerTitle}>Mercado</Text>
                        </View>
                      </Marker>
                    </MapView>
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}
                >
                    <TouchableOpacity style={styles.item} onPress={() => {}} >
                        <SvgUri width={42} height={42} uri="http://svgsilh.com/svg/42600.svg" />
                        <Text style={styles.itemTitle}> SVG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}} >
                        <SvgUri width={42} height={42} uri="http://svgsilh.com/svg/42600.svg" />
                        <Text style={styles.itemTitle}> SVG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}} >
                        <SvgUri width={42} height={42} uri="http://svgsilh.com/svg/42600.svg" />
                        <Text style={styles.itemTitle}> SVG</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });

export default Ponto;