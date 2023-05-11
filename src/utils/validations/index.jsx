import * as Yup from "yup";

export const schemaLogin = Yup.object().shape({
    username: Yup.string().required('username_is_required'),
    password: Yup.string().required('password_is_required'),
});

export const schemaRegister = Yup.object().shape({
    username: Yup.string().required('username_is_required'),
    email: Yup.string().required('email_is_required').email('email_is_invalid'),
    fullname: Yup.string().required('fullname_is_required'),
    password: Yup.string().required('password_is_required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: 'password_minimum_eight_characters_at_least_one_uppercase_letter_one_lowercase_letter_and_one_number' }),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], 'password_confirm_must_match_password'),
});

export const schemaFormProduct = Yup.object().shape({
    name: Yup.string().required('name_is_required'),
    price: Yup.number().required('price_is_required').typeError('price_must_be_a_valid_number'),
    description: Yup.string().required('description_is_required'),
});