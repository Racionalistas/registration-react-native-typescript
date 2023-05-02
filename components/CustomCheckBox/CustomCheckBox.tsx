import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/slice';
import { CustomCheckBoxProps } from './CustomCheckBoxProps';

const CustomCheckBox = ({ title, optionKey, optionValue }: CustomCheckBoxProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(optionValue);
  const formData = useSelector((state: any) => state.form.formData);
  const dispatch = useDispatch();

  const handleSelect = (value: boolean) => {
    setIsEnabled(value);
    dispatch(updateFormData({ ...formData, [optionKey]: value }));
  };

  return (
    <CheckBox
      title={title}
      checked={isEnabled}
      onPress={() => handleSelect(!isEnabled)}
    />
  );
};

export default CustomCheckBox;