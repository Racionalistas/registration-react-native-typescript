import { NavigationProp } from "@react-navigation/native";
import { AppStackNavigationProp, AppStackParamList } from "../../interfaces/AppStackInterfaces";

export type NavButtonSectionProps = {
    navigation: NavigationProp<AppStackNavigationProp>;
    title: string;
    onPress: () => void;
};