import { useFormik } from 'formik';
import './Form.css';

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required field !'
    } else if (values.name.length < 2) {
        errors.name = 'Need min 2 symbols..'
    } else if (values.name.length === 0) {
        errors.name = ''
    }

    if (!values.mail) {
        errors.mail = 'Required field!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
        errors.mail = 'Wrong email !'
    }

    return errors;
}


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
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))

    });

    return (
        <div className="form" onSubmit={formik.handleSubmit}>
            <h2>Send form</h2>
            <div className="form_input">
                <label htmlFor="name">Name: </label>
                <input
                    id='name'
                    name='name'
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name ? <div className='errorMessage'>{formik.errors.name}</div> : null}
            </div>
            <div className="form_input">
                <label htmlFor="mail">Mail: </label>
                <input
                    id='mail'
                    name='mail'
                    type="text"
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                />
                {formik.errors.mail ? <div className='errorMessage'>{formik.errors.mail}</div> : null}
            </div>
            <div className="form_input">
                <label htmlFor="mail">Count: </label>
                <input
                    id='count'
                    name='count'
                    type="text"
                    value={formik.values.count}
                    onChange={formik.handleChange}
                />
                {formik.errors.count ? <div className='errorMessage'>{formik.errors.count}</div> : null}
            </div>
            <div className="form_input">
                <label htmlFor="curency">Currency: </label>
                <select
                    name="currency"
                    id="currency"
                    value={formik.values.curency}
                    onChange={formik.handleChange}>
                    <option value=''>Choose currency</option>
                    <option value='UAH'>UAH</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBR'>GBR</option>
                </select>
                {formik.errors.currency ? <div className='errorMessage'>{formik.errors.currency}</div> : null}
            </div>
            <div className="form_input">
                <label htmlFor="message">Your message: </label>
                <textarea
                    name="message"
                    id="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}>
                </textarea>
                {formik.errors.message ? <div className='errorMessage'>{formik.errors.message}</div> : null}
            </div>
            <div className="form_checkbox">
                <label
                    className='checkbox'
                    htmlFor="checkbox">
                    <input
                        id='checkbox'
                        name="terms"
                        type="checkbox"
                        value={formik.values.terms}
                        onChange={formik.handleChange} />
                    Are you agree to the privacy policy ?
                </label>
                {formik.errors.terms ? <div className='errorMessage'>{formik.errors.terms}</div> : null}
            </div>
            <button type='submit'>Send</button>
        </div>
    )
}

export default Form;
