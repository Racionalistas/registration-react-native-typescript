import { AppStackParamList } from '../interfaces/AppStackInterfaces';

export function handlePress(navigation: any, location: keyof AppStackParamList) {
  navigation.navigate(location);
}