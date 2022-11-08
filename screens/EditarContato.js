import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const EditarContato = ({navigation, route}) => {

  const [getNome,setNome] = useState();
  const [getEmail,setEmail] = useState();
  const [getTelefone,setTelefone] = useState();
  const [getId,setId] = useState();
  const [getAlterar,setAlterar] = useState();
 

  useEffect(()=>{
    if(route.params){
      const { nome } =  route.params 
      const { email } = route.params 
      const { telefone } = route.params
      const { id } = route.params
      const { alterar } = route.params
      
  
        setNome(nome);
        setTelefone(telefone);
        setEmail(email);
        setId(id);
        setAlterar (alterar);
      
    }
        
    }, [])

    async function editarDados(){

        await axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
          })
          .then(function (response) {
            setNome('');
            setEmail('');
            setTelefone('');
            setId('');
            //navigation.navigate('Cadastro')
            alert("Alterado com sucesso!");
          })
          .catch(function (error) {
            alert("Ocorreu um erro, por favor tente novamente")
          });
         
      }

    return (
        <View style={[styles.container, {
            flexDirection: "column",
            padding: 0
        }]}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 100, alignItems: "center" }} >
                <Text h1 style={{ fontSize: 50 }}>Contato</Text>
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
                    onChangeText={text => setNome(text)}
            value={getNome}
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
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
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
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: "white" }} >
                <Button
                    title="Alterar"
                    onPress={()=>editarDados()}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: "white", marginTop: -100 }} >
                <Button
                    title="Excluir"
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

export default EditarContato;