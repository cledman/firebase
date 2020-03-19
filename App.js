import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import Firebase from './firebase'
import * as firebase from 'firebase';



export default class PrimeiroProjeto extends Component{
  constructor (props){

    super(props)
    this.state = {
      nomeInput:'',
      idadeInput:''
    }

    const config = {
      apiKey: "AIzaSyAg-EHPGlmqLHst0qshoESZjczit5PNN7U",
      authDomain: "projeto-teste-6171d.firebaseapp.com",
      databaseURL: "https://projeto-teste-6171d.firebaseio.com",
      projectId: "projeto-teste-6171d",
      storageBucket: "projeto-teste-6171d.appspot.com",
      messagingSenderId: "69606961474",
      appId: "1:69606961474:web:201a53b37c71c4757dd8db"
  };


  if (!firebase.apps.length)
  {
    firebase.initializeApp(config);
    //Aqui ele monitora qualquer mudança
    firebase.database().ref("usuarios/1/nome").on('value', (snapshot) =>{    

    //Aqui ele monitora uma vez apenas
    //firebase.database().ref("usuarios/1/nome").once('value', (snapshot) =>{
        let state = this.state
        state.nome = snapshot.val()
        this.setState(state)
    })    
  }
  else
  {
      firebase.app();
  }  

  this.inserirUsuario = this.inserirUsuario.bind(this)
  
  //Alterações de dados
  //firebase.database().ref('contagem').set('90')
  //firebase.database().ref('usuarios').child('2').child('idade').set(26)

  //Exemplo de remoção
  //firebase.database().ref('usuarios').child('-M2n9Nn58y8RfhXLDWKd').remove()

  }


  inserirUsuario() {
    
    if(this.state.nomeInput.length>0){

      let usuarios = firebase.database().ref('usuarios')
      let chave = usuarios.push().key //gera chave aleatório dentro do nó "usuários"
      usuarios.child(chave).set({
        nome:this.state.nomeInput,
        idade:this.state.idadeInput
      })

      alert("usuário inserido!")

    }

  }

  render(){
    return(
        <View style={styles.container}>
          <Text>Meu nome é: 13 min</Text>
          <TextInput  style={styles.input} onChangeText={ (nomeInput)=>this.setState({nomeInput}) }   />
          
          <Text>Idade do usupário</Text>                    
          <TextInput  style={styles.input}  onChangeText={ (idadeInput)=>this.setState({idadeInput}) }   />          

          <Button title="Inserir usuário" onPress={ this.inserirUsuario } />

        </View>
    )
  }




}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    padding:20
  },
  input:{
    borderColor:"#000000",
    borderWidth:1,    
    height:40
  }
});
