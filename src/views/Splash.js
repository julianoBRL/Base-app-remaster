import React, {Component, component} from 'react'
import { Alert, View } from 'react-native';

import LottieView from 'lottie-react-native'

const Splash = ({navigation: {replace}}) => {
    return (
        <View style={{flex:1,backgroundColor:'green'}}>
            <LottieView source={require('../assets/splash.json')} autoPlay loop={false}
            onAnimationFinish={() => {replace('SignIn')}}/>
        </View>
    )
}

export default Splash;