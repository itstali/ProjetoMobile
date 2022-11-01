import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';



const CadastroContato = ({navigation}) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column",
            padding: 0
        }]}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 100, alignItems: "center" }} >
                <Text h1 style={{ fontSize: 30 }}>Cadastro de Contato</Text>
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
                    placeholder='E-mail'
                    leftIcon={
                        <Icon
                            name='envelope'
                            size={25}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Telefone'
                    leftIcon={
                        <Icon
                            name='phone'
                            size={30}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={{ flex: 2, backgroundColor: "white" }} >
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

export default CadastroContato;