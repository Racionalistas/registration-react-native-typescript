import React from 'react';
import { View } from 'react-native';
import commonStyles from '../../common_styles/screenStyles';
import { useSelector } from 'react-redux';
import FormDataProps from '../../interfaces/FormDataProps';
import OutputScreenStyles from './OutputScreenStyles';
import { Props } from '../../interfaces/AppStackInterfaces';
import NavButtonSection from '../../components/NavButtonSection/NavButtonSection';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import TextComponent from '../../components/TextComponent/TextComponent';

const PersonNameInformation: React.FC<Props> = ({ navigation }) => {
    const formData = useSelector((state: FormDataProps) => state.form.formData);

    return (
        <View style={commonStyles.container}>
            <TitleComponent>Введенные данные:</TitleComponent>

            <TextComponent>Email: {formData.email}</TextComponent>
            <TextComponent>Телефон: +7{formData.phone}</TextComponent>

            <TextComponent>Тип занятости: {formData.employmentType === 'private_specialist' ? 'Частный специалист' : 'ИП или Представитель Компании'}</TextComponent>
            {formData.employmentType === 'private_specialist' ?
                (<>
                    {formData.firstName && (<TextComponent>Имя: {formData.firstName}</TextComponent>)}
                    {formData.lastName && (<TextComponent>Фамилия: {formData.lastName}</TextComponent>)}
                    {formData.middleName && (<TextComponent>Отчество: {formData.middleName}</TextComponent>)}
                </>)
                :
                (<>
                    {formData.companyName && (<TextComponent>Название компании: {formData.companyName}</TextComponent>)}
                    {formData.officialName && (<TextComponent>Имя ответственного лица: {formData.officialName}</TextComponent>)}
                </>)
            }

            {(formData.workTypeAtHome || formData.workTypeRemote || formData.workTypeClient) &&
                (<View style={OutputScreenStyles.container}>
                    <TextComponent>Место оказания услуг: </TextComponent>
                    <TextComponent>{formData.workTypeAtHome && 'Дома'}</TextComponent>
                    <TextComponent>{formData.workTypeRemote && 'Удалённо'}</TextComponent>
                    <TextComponent>{formData.workTypeClient && 'У клиента'}</TextComponent>
                    {formData.workTypeClient && (formData.workTypeClient_WorkInMoscow || formData.workTypeClient_WorkByAgreement || formData.workTypeClient_WorkInMoscowRegion) &&
                        (<View style={OutputScreenStyles.container}>
                            <TextComponent>Выезд к клиенту осуществляется:</TextComponent>
                            <TextComponent>{formData.workTypeClient_WorkInMoscow && 'По Москве'}</TextComponent>
                            <TextComponent>{formData.workTypeClient_WorkInMoscowRegion && 'По Московской области'}</TextComponent>
                            <TextComponent>{formData.workTypeClient_WorkByAgreement && 'По согласованию'}</TextComponent>
                        </View>)}
                </View>)}

            <NavButtonSection navigation={navigation} title='Отправить' onPress={() => console.log(formData)} />
        </View >);
}

export default PersonNameInformation;