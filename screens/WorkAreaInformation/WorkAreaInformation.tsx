import React from "react";
import { View } from "react-native";
import commonStyles from '../../common_styles/screenStyles';
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { handlePress } from "../../utils/handleContinuePress";
import { useDispatch, useSelector } from "react-redux";
import handleOptionSelect from "../../utils/handleOptionSelect";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import FormDataProps from '../../interfaces/FormDataProps'
import optionBlockStyles from "../../common_styles/optionBlockStyles";
import { Props } from "../../interfaces/AppStackInterfaces";
import NavButtonSection from "../../components/NavButtonSection/NavButtonSection";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import TextComponent from "../../components/TextComponent/TextComponent";

const WorkAreaInformation: React.FC<Props> = ({ navigation }) => {
    const formData = useSelector((state: FormDataProps) => state.form.formData);
    const dispatch = useDispatch();

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Где вы оказываете услуги?</TitleComponent>

            <View style={optionBlockStyles.wrapper}>
                <View style={optionBlockStyles.optionContainer}>
                    <TextComponent>Работаю удалённо</TextComponent>
                    <ToggleSwitch handleOptionSelect={(value: string, selectedValue: boolean) => handleOptionSelect(value, selectedValue, formData, dispatch)} optionKey="workTypeRemote" optionValue={formData.workTypeRemote} />
                </View>
                <View style={optionBlockStyles.optionContainer}>
                    <TextComponent>Принимаю у себя</TextComponent>
                    <ToggleSwitch handleOptionSelect={(value: string, selectedValue: boolean) => handleOptionSelect(value, selectedValue, formData, dispatch)} optionKey="workTypeAtHome" optionValue={formData.workTypeAtHome} />
                </View>
                <View style={optionBlockStyles.optionContainer}>
                    <TextComponent>Выезжаю к клиентам</TextComponent>
                    <ToggleSwitch handleOptionSelect={(value: string, selectedValue: boolean) => handleOptionSelect(value, selectedValue, formData, dispatch)} optionKey="workTypeClient" optionValue={formData.workTypeClient} />
                </View>
            </View>
            {formData.workTypeClient && (
                <View>
                    <CustomCheckBox
                        title="Москва"
                        optionKey="workTypeClient_WorkInMoscow"
                        optionValue={formData.workTypeClient_WorkInMoscow}
                    />
                    <CustomCheckBox
                        title="Московская область"
                        optionKey="workTypeClient_WorkInMoscowRegion"
                        optionValue={formData.workTypeClient_WorkInMoscowRegion}
                    />
                    <CustomCheckBox
                        title='По согласованию'
                        optionKey="workTypeClient_WorkByAgreement"
                        optionValue={formData.workTypeClient_WorkByAgreement}
                    />
                </View>
            )}

            <NavButtonSection navigation={navigation} title='Продолжить' onPress={() => handlePress(navigation, 'OutputScreen')} />
        </View>);
}

export default WorkAreaInformation;
