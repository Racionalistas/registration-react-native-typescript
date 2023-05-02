import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../../common_styles/screenStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { handlePress } from '../../utils/handleContinuePress';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/slice';
import FormDataProps from '../../interfaces/FormDataProps';
import optionBlockStyles from '../../common_styles/optionBlockStyles';
import { AppStackNavigationProp, AppStackParamList } from '../../interfaces/AppStackInterfaces';
import NavButtonSection from '../../components/NavButtonSection/NavButtonSection';
import TitleComponent from '../../components/TitleComponent/TitleComponent';

const EmploymentInformation = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const dispatch = useDispatch();
    const formData = useSelector((state: FormDataProps) => state.form.formData);
    const navigation = useNavigation<NavigationProp<AppStackNavigationProp>>();
    const [nextScreen, setNextScreen] = useState<keyof AppStackParamList | undefined>(undefined);

    useEffect(() => {
        formData.employmentType === 'private_specialist' && setSelectedOption('option1')
        formData.employmentType === 'company_representative' && setSelectedOption('option2')
    })

    useEffect(() => {
        if (selectedOption === 'option1') {
            dispatch(updateFormData({ ...formData, employmentType: 'private_specialist' }));
            setNextScreen('PersonNameInformation');
        } else if (selectedOption === 'option2') {
            dispatch(updateFormData({ ...formData, employmentType: 'company_representative' }));
            setNextScreen('CompanyInformation');
        }
    }, [selectedOption]);

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Как вы работаете?</TitleComponent>

            <RadioButton.Group
                onValueChange={(value: string) => setSelectedOption(value)}
                value={selectedOption}
            >
                <View style={optionBlockStyles.container}>
                    <RadioButton value='option1' />
                    <Text style={[commonStyles.text, optionBlockStyles.optionDescription]}>На себя, я частный специалист</Text>
                </View>
                <View style={optionBlockStyles.container}>
                    <RadioButton value='option2' />
                    <Text style={[commonStyles.text, optionBlockStyles.optionDescription]}>Я ИП или представитель компании</Text>
                </View>
            </RadioButton.Group>

            <NavButtonSection navigation={navigation} title='Отправить' onPress={() => (nextScreen ? handlePress(navigation, nextScreen) : alert('Пожалуйста, выберите один из вариантов занятости'))} />
        </View >
    );
}

export default EmploymentInformation;