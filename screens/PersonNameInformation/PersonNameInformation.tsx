import React from "react";
import { Text, View } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import commonStyles from '../../common_styles/screenStyles';
import { handlePress } from "../../utils/handleContinuePress";
import { useDispatch, useSelector } from "react-redux";
import handleInputChange from "../../utils/handleInputChange";
import FormDataProps from "../../interfaces/FormDataProps";
import screenStyle from './PersonNameInfortmationStyles'
import { Props } from "../../interfaces/AppStackInterfaces";
import NavButtonSection from "../../components/NavButtonSection/NavButtonSection";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

const PersonNameInformation: React.FC<Props> = ({ navigation }) => {
    const formData = useSelector((state: FormDataProps) => state.form.formData);
    const dispatch = useDispatch();

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Как вас зовут?</TitleComponent>

            <Text style={screenStyle.label}>Пожалуйста, укажите  Ваши ФИО как в паспорте, это важно для проверки</Text>
            <CustomInput
                placeholder="Фамилия"
                value={formData.lastName}
                onChangeText={(value: string) => handleInputChange('lastName', value, formData, dispatch)}
            />
            <CustomInput
                placeholder="Имя"
                value={formData.firstName}
                onChangeText={(value: string) => handleInputChange('firstName', value, formData, dispatch)}
            />
            <CustomInput
                placeholder="Отчество"
                value={formData.middleName}
                onChangeText={(value: string) => handleInputChange('middleName', value, formData, dispatch)}
            />

            <NavButtonSection navigation={navigation} title='Продолжить' onPress={() => handlePress(navigation, 'WorkAreaInformation')} />
        </View >);
}

export default PersonNameInformation;