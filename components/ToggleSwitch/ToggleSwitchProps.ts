export interface ToggleSwitchProps {
    handleOptionSelect: (optionKey: string, optionValue: boolean) => void;
    optionKey: string;
    optionValue: boolean;
}