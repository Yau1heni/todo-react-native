import React from 'react';
// import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList';
import {useAppSelector} from './store';
import {RequestStatusType} from './app-reducer';
import {View} from 'react-native';


export const Main = () => {
  const status = useAppSelector<RequestStatusType>((state) => state.app.status);
  return (
    <View>
      <TodolistsList/>
    </View>
  );
};

