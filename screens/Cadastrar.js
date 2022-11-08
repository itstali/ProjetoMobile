import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';



const Flex3 = ({navigation}) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column",
            padding: 0,
            backgroundColor: "white"
        }]}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 100, alignItems: "center" }} >
                <Text h1 style={{ fontSize: 50 }}>Cadastro</Text>
            </View>
            <View style={{ flex: 2, backgroundColor: "white" }} >
                <Input
                    placeholder='Nome'
                    leftIcon={
                        <Icon
                            name='user-circle-o'
                            size={30}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='envelope'
                            size={25}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Senha'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={30}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='CPF'
                    leftIcon={
                        <Icon
                            name='pencil'
                            size={30}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={{ flex: 2, backgroundColor: "white", marginTop: 60 }} >
                <Button
                    title="Cadastrar"
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Flex3;