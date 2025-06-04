
##  `react-native-option-dropdown` is light dropdown for simple react native apps. (< 5 KB)

<img src="https://raw.githubusercontent.com/sahilbakoru/nodeTest/main/Simulator%20Screen%20Recording%20-%20iPhone%2014%20-%202023-07-13%20at%2001.22.55.gif?raw=true" width = "250" height = "" alt="Demo 1"/>

## Getting started



```
npm i react-native-option-dropdown
```

#### MacOS
MacOS needs this extra step (called from the MacOS directory)

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




