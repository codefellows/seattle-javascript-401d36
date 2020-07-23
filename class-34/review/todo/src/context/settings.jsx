import React, { useState } from 'react';

// defining our context object. So that we encapsulate information pertaining to Settings, 
//  and pass them to differenet components.
export const SettingsContext = React.createContext();

const SettingsProvider = (props) => {

  // we define some default values to put into context.
  let defaultSettings = {
    showComplete: true,
    pageMax: 3,
    sort: 'difficulty'
  };

  // why don't we do something?
  //   If we do this, React does not know what needs to be changed ( what components need to be updated when values update)
  // let settings = [];
  // let setSetting = () => {
  //   settings.push(defaultSettings);
  // }

  // define our getters and setter for React.  Why hooks?
  //  Garhett: Sets state in React!
  const [settings, setSettings] = useState([defaultSettings]);

  // here we just an object that contains the relevant information / capabilites to pass to our children.
  const state = {
    // these are the settings that are set.
    settings,

    // this is a function to set new settings.
    changeSetting: (setting => setSettings({ ...settings, setting }))
  }

  // we finally pass our settings data into our provider, as value
  // settSettings({ ...settings, { Name: 'Jacob' }});
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;