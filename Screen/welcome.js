import { View, Text, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';

const Welcome = () => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require('../assets/bk.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,
              transform: [
                { rotate: '-15deg' },
                { translateX: 20 },
                { translateY: 50 },
              ],
            }}
          />
          <View
            style={{
              paddingHorizontal: 22,
              position: 'absolute',
              top: 400,
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 46,
                fontWeight: '800',
                color: COLORS.white,
              }}
            >
              Let's Get
            </Text>
            <Text
              style={{
                fontSize: 46,
                fontWeight: '800',
                color: COLORS.white,
              }}
            >
              Started
            </Text>
            <View style={{marginVertical:22}}>
                <Text style={{fontSize:16,color:COLORS.white,
                marginVertical:4}}>
                    Welcome to the world Digital Twin
                </Text>

            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
