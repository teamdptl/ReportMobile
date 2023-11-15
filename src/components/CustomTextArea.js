import {
    Textarea,
    TextareaInput,
  } from "@gluestack-ui/themed";

const CustomTextArea = (props) => {
  return (
    <Textarea
      size="sm"
      isReadOnly={false}
      isDisabled={false}
      isInvalid={props.isInvalid}
      w={props.width}
    >
      <TextareaInput
        placeholder={props.placeholder}
        role="none"
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </Textarea>
  );
};

export default CustomTextArea;
