import React from "react";
import { View } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import commonStyles from '../../common_styles/screenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { handlePress } from "../../utils/handleContinuePress";
import handleInputChange from "../../utils/handleInputChange";
import isEmailValid from "../../utils/isEmailValid";
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import FormDataProps from "../../interfaces/FormDataProps";
import { Props } from "../../interfaces/AppStackInterfaces";
import NavButtonSection from "../../components/NavButtonSection/NavButtonSection";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

const Registration: React.FC<Props> = ({ navigation }) => {
    const formData = useSelector((state: FormDataProps) => state.form.formData);
    const dispatch = useDispatch();

    function fieldsCheck() {
        if (isEmailValid(formData.email) === false) {
            alert('Пожалуйста, проверьте корректность почты');
            return
        };
        if (!formData.phone) {
            alert('Пожалуйста, введите номер телефона');
            return
        }
        if (formData.phone.length !== 10) {
            alert('Пожалуйста, проверьте корректность телефона');
            return
        }
        handlePress(navigation, 'EmploymentInformation');
    }

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Регистрация</TitleComponent>
            <CustomInput
                placeholder="Адрес электронной почты"
                value={formData.email}
                onChangeText={(value: string) => handleInputChange('email', value, formData, dispatch)}
            />
            <PhoneInput
                value={formData.phone}
                onChangeText={(value: string) => handleInputChange('phone', value, formData, dispatch)}
            />
            <NavButtonSection navigation={navigation} title='Продолжить' onPress={fieldsCheck} />
        </View>);
}

export default Registration;
