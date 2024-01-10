import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

type EditableSpanPropsType = {
  value: string
  onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const changeTitle = (e: string) => {
    setTitle(e);
  };

  return editMode
    ? (
      <View style={{flexDirection: 'row'}}>
        <TextInput value={title} onChangeText={changeTitle}/>
        <View>
          <MaterialIcons name="done" size={24} color="black" onPress={activateViewMode}/>
        </View>
      </View>
    )
    : (
      <View>
        <Text onLongPress={activateEditMode} style={{fontSize: 18, fontWeight: '500'}}>
          {props.value}
        </Text>
      </View>
    );
});
