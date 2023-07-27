
##  react-native-option-dropdown

<img src="https://user-images.githubusercontent.com/68190549/256564524-3cbe7c49-cffa-475f-b33b-7c4a9b730afb.gif?raw=true" width = "180" height = "300" alt="Demo 1"/>

## Getting started



`$ npm i react-native-option-dropdown`

#### MacOS
CocoaPods on MacOS needs this extra step (called from the MacOS directory)

```
pod install
```



## Usage

Import Dropdown from `react-native-option-dropdown'`:

```javascript
import Dropdown from 'react-native-option-dropdown';
```

Create state which will be used by the `Dropdown`:

```javascript
    const [selectedItem, setSelectedItem] = useState(null);
```

Add `Dropdown` like this:

```javascript
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import Dropdown from 'react-native-option-dropdown'

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    let data = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Today'},
        {id: 3, name: 'Yesterday'},
        {id: 4, name: 'Current Week'},
      ];

      const onSelect = item=>{
        setSelectedItem(item);
        alert(item.name)
      } 
  return (
    <View style={{marginTop:'10%'}}>
          <Dropdown
          data={data}
          onSelect={onSelect}
          value={selectedItem}
          transparent ={false}
          alignList={'center'}
          fontSize={20}
          defaultText={"Please Select"}
          animationType={'slide'}
          DropdownWidth={'50%'}
          dropDownStyle ={
               {paddingVertical: 4,
               paddingHorizontal: 8,
               borderRadius: 3,
               minHeight: 32,
               justifyContent: 'space-between',
               flexDirection: 'row',
               alignItems: 'center',
               marginBottom: 8,
               borderColor: '#000',
               borderWidth: 0.5,
             overflow:'scroll' }
          }
        />
    </View>
  )
}

export default App




```

#### Suggestions and feedback are welcome at  sahilbakoru1999@gmail.com .




