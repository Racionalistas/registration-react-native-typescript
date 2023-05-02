import { NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppStackParamList = {
    Registration: undefined;
    EmploymentInformation: undefined;
    OutputScreen: undefined;
    PersonNameInformation: undefined;
    CompanyInformation: undefined;
    WorkAreaInformation: undefined;
}

export type AppStackNavigationProp = StackNavigationProp<AppStackParamList, keyof AppStackParamList>;

export interface Props {
    navigation: NavigationProp<AppStackNavigationProp>;
}