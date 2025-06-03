import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';

  
  const Dropdown = ({data = [], Lable, value = {}, onSelect = () => {}}) => {
    const [showOption, setShowOption] = useState(false);
  
    const onSelectedItem = val => {
      setShowOption(false);
      onSelect(val);
    };
  
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '50%'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.dropDownStyle}
            onPress={() => setShowOption(!showOption)}>
            <Text style={{fontSize: 20}}>{value?.name ?? ' Please Select '}</Text>
       
          </TouchableOpacity>
          {showOption && (
            <View style={{maxHeight: 150, marginBottom:10}}>
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
                      <Text style={{fontSize: 20}}>{e?.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    );
  };
  
  export default Dropdown;
  
  const styles = StyleSheet.create({
    dropDownStyle: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 3,
      minHeight: 32,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
  
    selectedItemStyle: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  });
  