import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';



const Flex2 = ({navigation}) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column",
            padding: 0
        }]}>
            <View style={{ flex: 2, backgroundColor: "white", alignItems: 'center', paddingTop: 50 }} >
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                            'https://static.vecteezy.com/ti/vetor-gratis/p1/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg',
                    }}
                />
            </View>

            <View style={{ flex: 2, backgroundColor: "white", alignItems: "center" }} >
                <Input
                    placeholder='Digite seu usuário'
                    leftIcon={
                        <Icon
                            name='user'
                            size={30}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Digite sua senha'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />

            </View>

            <View style={{ flex: 3, backgroundColor: "white" }} >
                <Button
                    title="Logar"
                    onPress={()=> navigation.navigate('Lista')}
                />
                <Button
                    style={{ marginTop: 20 }}
                    title="Cadastre-se"
                    onPress={()=> navigation.navigate('Cadastro')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });


  export default Flex2;