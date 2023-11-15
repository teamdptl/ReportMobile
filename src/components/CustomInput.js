import {
    Input,
    InputField,
} from "@gluestack-ui/themed";

const CustomInput = (props) => {
  return (
    <Input
      variant="outline"
      size="sm"
      isDisabled={false}
      isInvalid={props.isInvalid}
      isReadOnly={false}
    >
      <InputField
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </Input>
  );
};

export default CustomInput;

