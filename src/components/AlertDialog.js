import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Heading,
  ButtonGroup,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const AlertDialogComponent = (props) => {
  return (
    <AlertDialog isOpen={props.showAlertDialog}>
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">{props.headerAlert}</Heading>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">{props.bodyAlert}</Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              bg="$error600"
              action="negative"
              onPress={() => {
                props.onClose();
              }}
            >
              <ButtonText>Trở về</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
