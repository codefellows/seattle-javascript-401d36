import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(status === 'granted' ? true : false);
  }

  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  }

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].digits;
    let phoneLink = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneLink)
      .then(isSupported => Linking.openURL(phoneLink))
      .catch(console.error);
  }

  useEffect(() => {
    getPermissions();
  }, []);
  // console.log(contacts);
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <StatusBar style="auto" />
      <View style={styles.box1}>
        <Button
          onPress={showContacts}
          title="Show Contacts"
        />
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Button
                title={item.name}
                onPress={() => call(item)}
              />
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderColor: 'red'
  },
  box1: {
    flex: 0.9,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    width: '100%',
  }
});
