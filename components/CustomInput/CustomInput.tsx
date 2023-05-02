import { View, TextInput } from 'react-native';
import { CustomInputProps } from './CustomInputProps';
import InputStyle from '../../common_styles/inputStyles'

const CustomInput = ({ placeholder, value = '', onChangeText }: CustomInputProps) => {

    return (
        <View style={InputStyle.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={InputStyle.input}
                placeholderTextColor="#39241380"
            />
            <View style={InputStyle.underline} />
        </View>
    );
};


export default CustomInput;
