import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';


const Dropdown = ({
  data = [],
  alignList = {},
  fontSize = {},
  transparent = {},
  value = {},
  animationType={},
  defaultText={},
  dropDownStyle={},
  DropdownWidth={},
  onSelect = () => {},
}) => {
  const [showOption, setShowOption] = useState(false);

  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val);
  };

  return (
    <View >
      <View style={{width: DropdownWidth}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style= {dropDownStyle}
          onPress={() => setShowOption(!showOption)}>
          <Text style={{fontSize: fontSize}}>
            {value?.name ?? defaultText}
          </Text>
        </TouchableOpacity>

        {showOption && (
          <Modal
            animationType={animationType}
            transparent={transparent}
            visible={showOption}
            onRequestClose={() => {
              setShowOption(!showOption);
            }}>
            <View style={{width: '100%', alignItems: alignList}}>
              <View style={{maxHeight: '80%', marginTop: '30%'}}>
                <ScrollView keyboardShouldPersistTaps="handled">
                  {data?.map((e, i) => {
                    return (
                      <TouchableOpacity
                        style={{
                          ...styles.selectedItemStyle,
                          backgroundColor:
                            value?.id == e.id ? 'lightgrey' : 'white',
                        }}
                        onPress={() => onSelectedItem(e)}
                        key={String(i)}>
                        <Text style={{fontSize: 21}}>{e?.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginHorizontal: '10%',
                    marginVertical: '5%',
                    borderColor: '#ff0000',
                    borderWidth: 0.5,
                    padding: '2%',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                  }}
                  onPress={() => setShowOption(!showOption)}>
                  <Text
                    style={{fontSize: 25, color: '#ff0000', fontWeight: '300'}}>
                    CLOSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({


  selectedItemStyle: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
