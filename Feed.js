import * as React from 'react';
import {Text,View,StyleSheet, StatusBar, FlatList} from 'react-native';
import PostCard from 'PostCard';

export default class Feed extends React.Component{
    renderItem=({item:post})=>{
        return <PostCard post={post}></PostCard>
    };
    keyExtractor=(item,index)=>index.toString();
    render(){
        return(
            <View style={styles.contain}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image source={require("./logo.png")}
                                    style={styles.iconImage}/>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}> Spectagram </Textt>
                        </View>
                    </View>
                    <View styles={styles.cardContainer}>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                        />
                    </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
contain:{
    flex:1,
    backgroundColor:"black"
},
droidSafeArea:{
    marginTop:Platfoem.OS==="android"?StatusBar.currentHeight:RFvalue(30)
},
appTitle:{
    flex:0.07,
    flexDirection:"row"
},
appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
},
iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain"
},
appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
},
appTitleText:{
    color:"white",
    fontSize:RFvalue(28)
},
cardContainer:{
    flex:0.05
}
})
