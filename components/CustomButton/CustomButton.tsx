import { Button } from 'react-native-elements';
import styles from '../../common_styles/screenStyles';
import { CustomButtonProps } from './CustomButtonProps';
import buttonStyle from './CustomButtonStyle'

const CustomButton = ({ backgroundColor, color, title, onPress }: CustomButtonProps) => {
    return (
        <Button title={title} onPress={onPress} buttonStyle={[buttonStyle.buttonStyle, { backgroundColor: backgroundColor }]} titleStyle={[styles.text, buttonStyle.titleStyle, { color: color }]}
        />
    );
}

export default CustomButton