import React from "react";
import { View ,StyleSheet,useWindowDimensions,Image,Text, Alert} from "react-native";



export default function BgroundOnBoardingItems({item})  {
    const {width}=useWindowDimensions();
    return (
        <View style={[styles.bground,{width}]} onTouchEnd={()=>Alert.alert('hello')} >
            <Image source={item.image} style={[styles.logo,{width,resizeMode:'contain'}]} ></Image>
           <View style={{flex:0.3}}>
                <Text style={styles.title_head} >{item.title}</Text>
                <Text style={styles.title_content}>{item.description_1}</Text>
                <Text style={styles.title_content}>{item.description_2}</Text>
                
           </View>
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    bground: {
        flex: 1,
        backgroundColor: '#5ea33a',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:241,
        
      },
    logo: {
        flex: 0.7,
        marginBottom:50,
        justifyContent:'center',
        
      },
      title_head: {
        color: 'white',
        marginBottom: 20,
        fontSize:17,
        textAlign:'center',
      },
      title_content: {
        color: 'white',
        textAlign:'center',
        fontSize:17,
        
      },
});