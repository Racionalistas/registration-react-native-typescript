import { Dispatch } from "redux";
import { updateFormData } from "../store/slice";
import { FormDataType } from "../interfaces/FormDataType";

export default function handleOptionSelect(value: string, selectedValue: boolean, formData: FormDataType, dispatch: Dispatch) {
    dispatch(updateFormData({ ...formData, [value]: selectedValue }));
}