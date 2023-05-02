import React from "react";
import { View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import buttonStyles from './NavButtonSectionStyle';
import { NavButtonSectionProps } from "./NavButtonSectionProps";

const NavButtonSection: React.FC<NavButtonSectionProps> = ({ navigation, title, onPress }) => {

    return (
        <View style={buttonStyles.buttonContainer}>
            <CustomButton backgroundColor='#8AC43A' color='white' title={title} onPress={onPress}></CustomButton>
            <CustomButton backgroundColor='white' color='#8AC43A' title='НАЗАД' onPress={() => { navigation.goBack() }}></CustomButton>
        </View>);
}

export default NavButtonSection;
