import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  initializeFirebase() {
    // const firebase = require('firebase');
    var config = {
      apiKey: "AIzaSyAg_U8cef-0Ww6JrwWmytyY0xYEfCGEETI",
      authDomain: "authentication-67940.firebaseapp.com",
      databaseURL: "https://authentication-67940.firebaseio.com",
      projectId: "authentication-67940",
      storageBucket: "authentication-67940.appspot.com",
      messagingSenderId: "706751184343"
    };

    firebase.initializeApp(config);

  }
  componentWillMount() {
    this.initializeFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }


  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;