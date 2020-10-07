import React from 'react';
import { View, Image } from 'react-native';

import styles from "./styles";
import LandingIMG from "../../assets/images/landing.png";

function Landing() {
    return (
      <View>
          <Image source={LandingIMG} />
      </View>
    );
}

export default Landing