import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    AlertDialog,
    AlertDialogBackdrop,
    Spinner
} from "@gluestack-ui/themed";


const SpinerWrapper = (props) => {
  return (
    <AlertDialog isOpen={props.loading}>
        <AlertDialogBackdrop />
        <Spinner size="large" />
    </AlertDialog>
  )
}

export default SpinerWrapper

