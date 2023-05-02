import { GestureResponderEvent } from "react-native";

export interface CustomButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor: string;
    color: string;
    title: string
}