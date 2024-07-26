import * as Yup from "yup";

const requiredText = (label: string) => `${label} is required field!` 
const minText = (label: string, length: number) => `${label} must be at least ${length} characters long!` 
const maxText = (label: string, length: number) => `${label} cannot be longer than ${length} characters!`
const notEqualText = (label: string) => `${label} cannot be equal!`
const spaceText = (label: string, length?: number) => `${label} cannot contain ${length ? length + ' ': ''}spaces!`
export const usersSchema = Yup.object().shape({
  name_1: Yup.string().required(requiredText('Name')).min(5, minText('Name', 5)).test('not-equal', notEqualText("Names"), function(value){
    return value !== this.parent.name_2
  }).matches(/^((?!\s{5}).)*$/, spaceText('Name',5)),
  name_2: Yup.string().required(requiredText('Name')).min(5, minText('Name', 5)).test('not-equal', notEqualText("Names"), function(value){
    return value !== this.parent.name_1
  }).matches(/^((?!\s{5}).)*$/, spaceText('Name',5)),
  sign_1: Yup.string().required(requiredText('Sign')).max(1, maxText('Sign', 1)).test('not-equal', notEqualText("Signs"), function(value){
    return value !== this.parent.sign_2
  }).matches(/^\S*$/, spaceText('Sign')),
  sign_2: Yup.string().required(requiredText('Sign')).max(1, maxText('Sign', 1)).test('not-equal', notEqualText("Signs"), function(value){
    return value !== this.parent.sign_1
  }).matches(/^\S*$/, spaceText('Sign')),
  color_1: Yup.string(),
  color_2: Yup.string()
});
