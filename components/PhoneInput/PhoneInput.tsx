import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { PhoneInputProps } from './PhoneInputProps';
import InputStyle from '../../common_styles/inputStyles';

const PhoneInput = ({ value = '', onChangeText }: PhoneInputProps) => {
    const [formattedValue, setFormattedValue] = useState<string>(value);
    const [phoneLength, setPhoneLength] = useState<number | undefined>(12);

    const standartizePhoneNumber = (formattedText: string): string => {
        if (formattedText.length === 12 && formattedText.charAt(0) === '+') {
            return formattedText.slice(2)
        } else if (formattedText.length === 11 && formattedText.charAt(0) === '8') {
            return formattedText.slice(1)
        }

        return formattedText
    }

    const handleTextChange = (text: string) => {
        const formattedText = formatPhoneNumber(text.replace(/[^+\d]/g, ''));
        setFormattedValue(formattedText);
        onChangeText(standartizePhoneNumber(formattedText));
    };

    const formatPhoneNumber = (input: string): string => {
        let formatted = input;
        if (formatted.charAt(0) === '+' && formatted.charAt(1) === '7') {
            setPhoneLength(12)
        } else if (formatted.charAt(0) === '8') {
            setPhoneLength(11)
        } else {
            formatted = '+7';
        }
        return formatted;
    };

    return (
        <View style={InputStyle.container}>
            <TextInput
                placeholder={'Номер телефона'}
                value={formattedValue}
                onChangeText={handleTextChange}
                style={InputStyle.input}
                placeholderTextColor="#39241380"
                keyboardType="phone-pad"
                maxLength={phoneLength}
            />
            <View style={InputStyle.underline} />
        </View>
    );
};

export default PhoneInput;