import React from "react";
import { View ,StyleSheet,Text,Image, FlatList, Button} from "react-native";
import slides from "../../slides";

import BgroundOnBoardingItems from "./OnBoardingItems";

export default function BgroundOnBoarding(){
    return (
        <View style={styles.bground}>
            {/* <Image style={styles.logo} source={require('../../assets/icons8-restaurant-menu-101.png')}></Image>

            <Text style={styles.title_head}>Browse Food</Text>
            <Text style={styles.title_content}>Welcome to our restaurant app! Log in</Text>
            <Text style={styles.title_content}>and check out our delicious food.</Text> */}
            <View>
            <FlatList data={slides} renderItem={({item}) => <BgroundOnBoardingItems item ={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
            />
            </View>
            <Text style={styles.link}>Please press to continue </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
   
    bground: {
      flex: 1,
      backgroundColor: '#5ea33a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
       marginBottom:90,
       marginTop:30,
        fontSize:18,
        color:'white',
        fontWeight:'600'
      },
  });