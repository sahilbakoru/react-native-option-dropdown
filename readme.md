
#####  react-native-option-dropdown is light (less then 5kb) dropdown for simple react native apps.
![](./Demo1.gif)
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
        />
    </View>
  )
}

export default App




```

#### Suggestions and feedback are welcome at  sahilbakoru1999@gmail.com .




