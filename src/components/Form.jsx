import { useFormik } from 'formik';
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


const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            mail: '',
            count: 0,
            currency: '',
            message: '',
            terms: false
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))

    });

    return (
        <div className="form" onSubmit={formik.handleSubmit}>
            <h2>Send form</h2>
            <div className="form_input">
                <label htmlFor="name">Name: </label>
                {formik.errors.name && formik.touched.name ? <label className='errorMessage'>{formik.errors.name}</label> : null}
                <input
                    id='name'
                    name='name'
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

            </div>
            <div className="form_input">
                <label htmlFor="mail">Mail: </label>
                {formik.errors.mail && formik.touched.mail ? <label className='errorMessage'>{formik.errors.mail}</label> : null}
                <input
                    id='mail'
                    name='mail'
                    type="text"
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className="form_input">
                <label htmlFor="mail">Count: </label>
                {formik.errors.mail && formik.touched.count ? <label className='errorMessage'>{formik.errors.count}</label> : null}
                <input
                    id='count'
                    name='count'
                    type="text"
                    value={formik.values.count}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className="form_input">
                <label htmlFor="curency">Currency: </label>
                {formik.errors.mail && formik.touched.currency ? <label className='errorMessage'>{formik.errors.currency}</label> : null}
                <select
                    name="currency"
                    id="currency"
                    value={formik.values.curency}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value=''>Choose currency</option>
                    <option value='UAH'>UAH</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBR'>GBR</option>
                </select>
            </div>
            <div className="form_input">
                <label htmlFor="message">Your message: </label>
                {formik.errors.mail && formik.touched.message ? <label className='errorMessage'>{formik.errors.message}</label> : null}
                <textarea
                    name="message"
                    id="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                </textarea>
            </div>
            <div className="form_checkbox">
                <label
                    className='checkbox'
                    htmlFor="checkbox">
                    <input
                        id='terms'
                        name="terms"
                        type="checkbox"
                        value={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> Are you agree to the privacy policy ?
                </label>
                {formik.errors.terms && formik.touched.terms ? <label className='errorMessage'>{formik.errors.terms}</label> : null}
            </div>
            <button type='submit'>Send</button>
        </div>
    )
}

export default Form;
