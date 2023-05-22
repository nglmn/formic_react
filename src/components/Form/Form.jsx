import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import './Form.css';

//ми заміняємо функцію валідейт на бібліотеку yup
// const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Required field !'
//     } else if (values.name.length < 2) {
//         errors.name = 'Need more 2 symbols..'
//     } else if (values.name.length === 0) {
//         errors.name = ''
//     }

//     if (!values.mail) {
//         errors.mail = 'Required field!'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
//         errors.mail = 'Wrong email !'
//     }

//     return errors;
// }

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (

        <div className="form_input">
            <label htmlFor={props.name}>{label}</label>

            {meta.touched && meta.error ? (
                <label className='errorMessage'>{meta.error}</label>
            ) : null}
            <input {...props} {...field} />
        </div>
    )
};
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (

        <div className="form_checkbox">
            <label htmlFor='checkbox' className='checkbox'>
                <input type='checkbox'{...props} {...field} />
                {children}
            </label>

            {meta.touched && meta.error ? (
                <label className='errorMessage'>{meta.error}</label>
            ) : null}
        </div>
    )
};


const FormComponent = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                mail: '',
                count: 0,
                currency: '',
                message: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Need more 2 symbols')
                    .required('Required field !'),
                mail: Yup.string()
                    .email('Wrong email')
                    .required('Required field !'),
                count: Yup.number()
                    .min(1, 'Minimum 1')
                    .required('Required field'),
                currency: Yup.string().required('Need to choose currency'),
                message: Yup.string()
                    .min(10, 'Minimum 10 symbols'),
                terms: Yup.boolean()
                    .required('Need agree with terms')
                    .oneOf([true], 'Need agree with terms')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}>

            <Form className="form">
                <h2>Send form</h2>
                <MyTextInput
                    label='Name: '
                    id='name'
                    name='name'
                    type="text"
                />
                <MyTextInput
                    label="Mail: "
                    id='mail'
                    name='mail'
                    type="text"
                />
                <MyTextInput
                    label="Count: "
                    id='count'
                    name='count'
                    type="text"
                />
                <div className="form_input">
                    <label htmlFor="curency">Currency: </label>
                    <ErrorMessage className='errorMessage' name='currency' component='label' />
                    <Field
                        name="currency"
                        id="currency"
                        as="select">

                        <option value=''>Choose currency</option>
                        <option value='UAH'>UAH</option>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                        <option value='GBR'>GBR</option>
                    </Field>
                </div>
                <div className="form_input">
                    <label htmlFor="message">Your message: </label>
                    <ErrorMessage className='errorMessage' name='message' component='label' />
                    <Field
                        name="message"
                        id="message"
                        as="textarea">
                    </Field>
                </div>
                <MyCheckbox
                    id='terms'
                    name="terms">
                    Are you agree to the privacy policy ?
                </MyCheckbox>
                <button type='submit'>Send</button>
            </Form>
        </Formik >
    )
}

export default FormComponent;
