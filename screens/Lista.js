
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ListItem, Header } from 'react-native-elements'
import axios from 'axios';

const Listagem = ({ navigation }) => {

    const [getData, setData] = useState([]);

    useEffect(() => {

        async function resgatarDados() {
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
            );
            setData(result.data);
        }
        resgatarDados();
    }, [])

    return (
        <View style={[styles.container, {
            flexDirection: "column",
            padding: 0 ,
            backgroundColor: "white"
        }]}>
             <Header
                    centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={
                        <Button
                            title= "+"
                            onPress={() => navigation.navigate('CadastroContato')}
                        ></Button>}
                />
            {
                    getData.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('EditarContato')}>
                            <Avatar source={{ uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.nome}</ListItem.Title>
                                <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Listagem; 
