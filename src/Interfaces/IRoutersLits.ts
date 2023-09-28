import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { RoutesEnum, ModalRoutesEnum } from '@enums/RoutesEnum'
import React from 'react'

export interface IRoutesList {
    name: RoutesEnum,
    component: React.FC,
    isPrivate: boolean,
    options?: NativeStackNavigationOptions
}

export interface IModalRoutesList {
    name: ModalRoutesEnum,
    component: React.FC,
    isPrivate: boolean,
    options?: NativeStackNavigationOptions
}