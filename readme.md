


## Getting started

![](https://global.discourse-cdn.com/twitter/original/3X/6/f/6f0aa55a015f6b4cfabc51016b3c665a59925ebe.gif)

`$ npm install @react-native-picker/picker --save`


#### MacOS
CocoaPods on MacOS needs this extra step (called from the MacOS directory)

```
pod install
```



## Usage

Import Picker from `@react-native-picker/picker`:

```javascript
import {Picker} from '@react-native-picker/picker';
```

Create state which will be used by the `Picker`:

```javascript
const [selectedLanguage, setSelectedLanguage] = useState();
```

Add `Picker` like this:

```javascript
<Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
```



