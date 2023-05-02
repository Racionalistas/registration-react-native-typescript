import { Text } from 'react-native';
import commonStyles from '../../common_styles/screenStyles'
import { TextComponentProps } from './TextComponentProps';

const TitleComponent = ({ children }: TextComponentProps) => {
    return (
        <Text style={commonStyles.text}>{children}</Text>
    );
};

export default TitleComponent;