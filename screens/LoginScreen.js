import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
    state = {
        name: ''
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }

    render(){
        return(
            <View style={styles.container}>
               
                <View style={{marginTop: 64}}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS69_x2pHLE-8NJgd2OBD6Eza_1oxZ3a8gUdg&usqp=CAU'}}
                    style={{width: 100, height: 100, alignSelf: "center"}} />

                </View>
                <View style={{marginHorizontal: 30}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput style={styles.input}
                     placeholder="Enter username"
                      onChangeText={name => {
                        this.setState({name});
                    }}
                    value={this.state.name} />
                    <View style={{alignItems: "flex-end" , marginTop: 64}}>
                        <TouchableOpacity style={styles.continue}
                        onPress={this.continue}>
                            <Ionicons name="md-arrow-round-forward" 
                            size={24} 
                            color="#FFF" />

                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7'
    },
   
    header: {
      
        fontSize: 30,
        color: '#514E5A',
        marginTop: 80
    },
    input:{
        marginTop: 30,
        height: 50,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A"
    },
    continue:{
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#9075E3',
        alignItems: "center",
        justifyContent: "center"
    }
})