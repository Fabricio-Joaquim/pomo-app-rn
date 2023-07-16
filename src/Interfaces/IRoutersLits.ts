import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { RoutesEnum } from '@enums/RoutesEnum'
import React from 'react'

export interface IRoutesList {
    name: RoutesEnum,
    component: React.FC,
    isPrivate: boolean,
    options?: NativeStackNavigationOptions
}