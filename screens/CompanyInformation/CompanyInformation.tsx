import React from "react";
import { View } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import commonStyles from '../../common_styles/screenStyles';
import { handlePress } from "../../utils/handleContinuePress";
import { useDispatch, useSelector } from "react-redux";
import handleInputChange from "../../utils/handleInputChange";
import FormDataProps from "../../interfaces/FormDataProps";
import { Props } from "../../interfaces/AppStackInterfaces";
import NavButtonSection from "../../components/NavButtonSection/NavButtonSection";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

const CompanyInformation: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch()
    const formData = useSelector((state: FormDataProps) => state.form.formData);

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Как называется ваша компания?</TitleComponent>

            <CustomInput
                placeholder="Название компании"
                value={formData.companyName}
                onChangeText={(value: string) => handleInputChange('companyName', value, formData, dispatch)}
            />
            <CustomInput
                placeholder="ФИО ответственного лица"
                value={formData.officialName}
                onChangeText={(value: string) => handleInputChange('officialName', value, formData, dispatch)}
            />

            <NavButtonSection navigation={navigation} title='Отправить' onPress={() => { handlePress(navigation, 'WorkAreaInformation') }} />
        </View >);
}

export default CompanyInformation;