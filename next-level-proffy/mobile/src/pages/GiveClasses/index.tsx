import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import styles from "./styles";

function GiveClasses() {

    const {goBack} = useNavigation();

    function goToBack() {
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
            source={giveClassesBgImage}
            style={styles.content}
            resizeMode="contain"
            >

                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, precisa se cadastrar como professor na nossa plataforma web.
                </Text>

            </ImageBackground>

            <RectButton onPress={goToBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;