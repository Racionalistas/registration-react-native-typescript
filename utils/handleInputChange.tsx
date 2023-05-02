import { FormDataType } from '../interfaces/FormDataType';
import { updateFormData } from '../store/slice';
import { Dispatch } from 'redux';

export default function handleInputChange(name: string, value: string, formData: FormDataType, dispatch: Dispatch) {
    const updatedFormData = { ...formData, [name]: value };
    return dispatch(updateFormData(updatedFormData));
}