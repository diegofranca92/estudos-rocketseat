import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null)
  useEffect(() => {
    async function loadInicialPosition() {
      const {granted} = await requestPermissionsAsync()

      if (granted) {
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true
        })

        const {latitude, longitude} = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }
    loadInicialPosition()
  }, [])

  if (!currentRegion) {
    return null;
  }
  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{latitude:-12.9410842, longitude:-38.4453697}}>
        <Image style={styles.avatar} source={{uri: 'https://avatars2.githubusercontent.com/u/29843809?s=460&u=187c94875705090dc975e649f670765e61957651&v=4'}} />

        <Callout onPress={() => {
          navigation.navigate('Profile', {git_username:'diegofranca92'});
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>Diego França</Text>
            <Text style={styles.devBio}>Bio de Diego França ta ficando bem grande</Text>
            <Text style={styles.devTechs}>Techs Diego França</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

  const styles = StyleSheet.create({
    map: {
      flex: 1
    },
    avatar: {
      width: 54,
      height: 54,
      borderRadius: 4,
      borderWidth: 4,
      borderColor:'#fff'
    },
    callout: {
      width: 260,
    },
    devName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    devBio: {
      color: '#666',
      marginTop: 5,
    },
    devTechs: {
      marginTop: 5,
    },
  })