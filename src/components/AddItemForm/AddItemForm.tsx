import React, {KeyboardEvent, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

type AddItemFormPropsType = {
  addItem: (title: string) => void
  disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem}: AddItemFormPropsType) {
  let [title, setTitle] = useState('');

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title);
      setTitle('');
    }
  };

  const onChangeHandler = (e: string/*ChangeEvent<HTMLInputElement>*/) => {
    setTitle(e);
  };

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    }}>
      <TextInput value={title} onChangeText={onChangeHandler} style={styles.input}/>
      <View>
        <TouchableOpacity onPress={addItemHandler}>
          <AntDesign name="pluscircleo" size={28} color="black"/>
        </TouchableOpacity>
      </View>
    </View>);
});

const styles = StyleSheet.create({
  input: {
    width: 150
  }
});