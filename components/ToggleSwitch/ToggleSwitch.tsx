import React, { useState } from 'react';
import { Switch } from 'react-native';
import { ToggleSwitchProps } from './ToggleSwitchProps';

const ToggleSwitch = ({ handleOptionSelect, optionKey, optionValue }: ToggleSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(optionValue);
  const toggleSwitch = () => {
    setIsEnabled((previousState: boolean) => !previousState);
    handleOptionSelect(optionKey, !isEnabled);
  }

  return (
    <Switch
      trackColor={{ false: "#767577", true: "#8AC43A" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default ToggleSwitch;