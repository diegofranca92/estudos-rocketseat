import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoIMG from "../../assets/images/logo.png";
import styles from "./styles";

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const {navigate} = useNavigation()

    function goToLanding() {
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={goToLanding}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={logoIMG} resizeMode="contain" />
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default PageHeader;