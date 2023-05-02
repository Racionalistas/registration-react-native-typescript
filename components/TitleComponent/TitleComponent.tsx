import { Text } from 'react-native';
import commonStyles from '../../common_styles/screenStyles'
import { TitleComponentProps } from './TitleComponentProps';

const TitleComponent = ({ children }: TitleComponentProps) => {
    return (
        <Text style={[commonStyles.text, commonStyles.title]}>{children}</Text>
    );
};

export default TitleComponent;