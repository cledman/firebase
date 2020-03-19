import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAg-EHPGlmqLHst0qshoESZjczit5PNN7U",
    authDomain: "projeto-teste-6171d.firebaseapp.com",
    databaseURL: "https://projeto-teste-6171d.firebaseio.com",
    projectId: "projeto-teste-6171d",
    storageBucket: "projeto-teste-6171d.appspot.com",
    messagingSenderId: "69606961474",
    appId: "1:69606961474:web:201a53b37c71c4757dd8db"
};
/*
firebase.database().ref("nome").on('value', (snapshot) =>{
    let state = this.state
    state.nome = snapshot.val()
    this.setState(state)
})
*/

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.database().ref("usuarios/1/nome").on('value', (snapshot) =>{
        let state = this.state
        state.nome = snapshot.val()
        this.setState(state)
    })    
 }
 else
 {
    firebase.app();
 }




//export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();