
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://thumbs.dreamstime.com/b/pessoa-feliz-retrato-de-uma-mulher-sorridente-com-pele-curtida-e-cabelo-encaracolado-jovem-amig%C3%A1vel-belos-cabelos-encaracolados-197501184.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg',
      subtitle: 'Vice Chairman'
    }
    
]

const Listagem = () => {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20, alignItems: "center", flexDirection: "row" }} >
                <Text h1 style={{ fontSize: 30, paddingLeft: 50 }}>Lista de Contatos</Text>
                <Button style={ { paddingLeft: 10}}
                    icon={
                        <Icon
                            name="plus"
                            size={15}
                            color="white"
                        /> }
                />
            </View>
            <View style={{ flex: 2, backgroundColor: "white", paddingLeft: 10 }} >
                {
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar source={{ uri: l.avatar_url }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
            <View style={{ flex: 1, backgroundColor: "white"}} >
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

export default Listagem; 