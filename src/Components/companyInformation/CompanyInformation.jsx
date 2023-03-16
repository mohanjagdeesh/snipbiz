import { useGlobalStore } from '../../store/useGlobalStore';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './CompanyInformation.css'
import CloseIcon from '@mui/icons-material/Close';



const contactPersonValues = {
    firstName: '',
    lastName: '',
    designation: '',
    gender: '',
    email: [''],
    mobile: ['']
}

const addressValues = {
    addressType: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    isDefault: false
}

const initialValues = {
    companyName: '',
    taxId: '',
    contactPersons: [contactPersonValues],
    addresses: [addressValues]
}

const validationSchema = Yup.object().shape({
    companyName: Yup.string()
        .required('Required'),
    taxId: Yup.string()
        .required('Required'),
    contactPersons: Yup.array().of(
        Yup.object().shape({
            firstName: Yup.string()
                .required('Required'),
            lastName: Yup.string()
                .required('Required'),
            designation: Yup.string()
                .required('Required'),
            gender: Yup.string()
                .required('Required'),
        })
    ),
    addresses: Yup.array().of(
        Yup.object().shape({
            addressType: Yup.string().required('Required'),
            addressOne: Yup.string().required('Required'),
            addressTwo: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            zipCode: Yup.string().required('Required'),
        })
    )

})

const validateEmails = values => {
    let error
    if (!values) {
        error = 'Required'
    } 
    return error
}

const validatePhoneNumbers = values => {
    let error
    if (!values) {
        error = 'Required'
    }
    return error
}


const onSubmit = values => {
    console.log(values)
}

const CompanyInformation = () => {
    const isMobile = useGlobalStore(state => state.isMobile)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={isMobile ? 'm-ci-main-cont' : 'ci-main-cont'}>
                    <div className={isMobile ? 'm-comp-det-cont' : 'comp-det-cont'}>
                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                            <label htmlFor='companyName'>Company Name</label>
                            <Field className='input-feild' type='text' placeholder='Enter Name' id='companyName' name='companyName' data-testid='company-name-field' />
                            <ErrorMessage className='error-msg' name='companyName' component={'div'} data-testid='company-name-error' />
                        </div>
                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                            <label htmlFor='taxId'>Tax Id</label>
                            <Field className='input-feild' type='text' placeholder='Enter Tax Id' id='taxId' name='taxId' data-testid='tax-id-field' />
                            <ErrorMessage className='error-msg' name='taxId' component={'div'} data-testid='tax-id-error' />
                        </div>
                    </div>
                    <FieldArray name='contactPersons'>
                        {
                            ({ push, remove, form }) => {
                                const { values } = form
                                const { contactPersons } = values
                                return (
                                    <div>
                                        {contactPersons.map((contactPerson, index) => (
                                            <>
                                                <div className='contact-person-cont' key={index}>
                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'} data-testid="contact-persons-wrap">
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='firstName'>Contact Person First Name</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter First Name' id='firstName' name={`contactPersons[${index}].firstName`} data-testid={`contact-persons-firstname-${index}`} />
                                                            <ErrorMessage className='error-msg' name={`contactPersons[${index}].firstName`} component={'div'} data-testid={`contact-persons-firstname-error-${index}`} />
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='lastName'>Contact Person Last Name</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Last Name' id='lastName' name={`contactPersons[${index}].lastName`} data-testid={`contact-persons-lastname-${index}`} />
                                                            <ErrorMessage className='error-msg' name={`contactPersons[${index}].lastName`} component={'div'} data-testid={`contact-persons-lastname-error-${index}`} />
                                                        </div>
                                                    </div>
                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'} data-testid="contact-persons-wrap">
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='designation'>Designation</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Designation' id='designation' name={`contactPersons[${index}].designation`} data-testid={`contact-persons-designation-${index}`} />
                                                            <ErrorMessage className='error-msg' name={`contactPersons[${index}].designation`} component={'div'} data-testid={`contact-persons-designation-error-${index}`} />
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='gender'>Gender</label>
                                                            <Field as='select' name={`contactPersons[${index}].gender`} id='gender' data-testid={`contact-persons-gender-${index}`}>
                                                                <option value=''>select</option>
                                                                <option value='male'>Male</option>
                                                                <option value='female'>Female</option>
                                                            </Field>
                                                            <ErrorMessage className='error-msg' name={`contactPersons[${index}].gender`} component={'div'} data-testid={`contact-persons-gender-error-${index}`} />
                                                        </div>
                                                    </div>


                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'}>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='email' data-testid={`contact-person-email-${index}`}>Email Address</label>
                                                            <FieldArray name={`contactPersons[${index}].email`}>
                                                                {
                                                                    ({ push, remove }) => {
                                                                        return (
                                                                            <div>
                                                                                {contactPerson.email.map((eachMail, mailIndex) => (
                                                                                    <div key={mailIndex}>
                                                                                        <Field className='input-feild' type='email' placeholder='Enter Email Address' id='email' name={`contactPersons[${index}].email[${mailIndex}]`} validate={validateEmails} data-testid={`contact-person-email-input-${index}-${mailIndex}`} />

                                                                                        {mailIndex > 0 && <CloseIcon sx={{ color: `red` }} onClick={() => remove(mailIndex)} />}
                                                                                        <ErrorMessage className='error-msg' name={`contactPersons[${index}].email[${mailIndex}]`} component={'div'} data-testid={`contact-person-email-error-${index}-${mailIndex}`} />
                                                                                        <p onClick={() => push('')} className='add-para'><span className='add-symbol'>+</span>  Add Another Email</p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )
                                                                    }
                                                                }
                                                            </FieldArray>
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='mobile' data-testid={`contact-person-mobile-${index}`}>Mobile Number</label>
                                                            <FieldArray name={`contactPersons[${index}].mobile`}>
                                                                {
                                                                    ({ push, remove }) => {
                                                                        return (
                                                                            <div>
                                                                                {contactPerson.mobile.map((eachMobile, mobileIndex) => (
                                                                                    <div key={mobileIndex}>
                                                                                        <Field className='input-feild' type='text' placeholder='Enter Mobile Number' id='mobile' name={`contactPersons[${index}].mobile[${mobileIndex}]`} validate={validatePhoneNumbers} data-testid={`contact-person-mobile-input-${index}-${mobileIndex}`} />

                                                                                        {mobileIndex > 0 && <CloseIcon sx={{ color: `red` }} onClick={() => remove(mobileIndex)} />}
                                                                                        <ErrorMessage className='error-msg' name={`contactPersons[${index}].mobile[${mobileIndex}]`} component={'div'} data-testid={`contact-person-mobile-error-${index}-${mobileIndex}`} />
                                                                                        <p onClick={() => push('')} className='add-para'><span className='add-symbol'>+</span>  Add Another Mobile</p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )
                                                                    }
                                                                }
                                                            </FieldArray>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div>
                                                    <p
                                                        onClick={() => push(contactPersonValues)}
                                                        className={isMobile ? 'add-para m-add-para' : 'add-para add-response'}
                                                        data-testid="add-person"
                                                    >
                                                        <span className="add-symbol">+</span> Add Another Person
                                                    </p>
                                                    {index > 0 && (
                                                        <p
                                                            onClick={() => remove(index)}
                                                            className={isMobile ? 'add-para m-add-para' : 'add-para add-response'}
                                                            data-testid="remove-person"
                                                        >
                                                            <span className="add-symbol">-</span> Remove Contact Person
                                                        </p>
                                                    )}
                                                </div>

                                            </>

                                        ))}
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                    <FieldArray name='addresses'>
                        {
                            ({ push, remove, form }) => {
                                const { values } = form
                                const { addresses } = values
                                return (
                                    <div>
                                        {addresses.map((address, index) => (
                                            <>
                                                <div className='contact-person-cont' key={index}>
                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'}>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'} data-testid="address-type">
                                                            <label htmlFor='address-type'>Address Type (Home, Work)</label>
                                                            <Field as='select' name={`addresses[${index}].addressType`} id='address-type'>
                                                                <option value=''>select</option>
                                                                <option value='home'>Home</option>
                                                                <option value='work'>Work</option>
                                                            </Field>
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].addressType`} component={'div'} />
                                                        </div>
                                                    </div>

                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'}>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'} data-testid="address1">
                                                            <label htmlFor='address1'>Address 1</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Name' id='address1' name={`addresses[${index}].addressOne`} />
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].addressOne`} component={'div'} />
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'} data-testid="address2">
                                                            <label htmlFor='address2'>Address 2</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Name' id='address2' name={`addresses[${index}].addressTwo`} />
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].addressTwo`} component={'div'} />
                                                        </div>
                                                    </div>
                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'}>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='city'>City</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Name' id='city' name={`addresses[${index}].city`} data-testid={`city-${index}`} />
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].city`} component={'div'} data-testid={`city-error-${index}`} />
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='state'>State</label>
                                                            <Field as='select' name={`addresses[${index}].state`} id='state' data-testid={`state-${index}`}>
                                                                <option value=''>select</option>
                                                                <option value='1'>State 1</option>
                                                                <option value='2'>State 2</option>
                                                            </Field>
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].state`} component={'div'} data-testid={`state-error-${index}`} />
                                                        </div>
                                                    </div>
                                                    <div className={isMobile ? 'm-contact-wrap-cont' : 'contact-wrap-cont'}>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='country'>Country</label>
                                                            <Field className='input-feild' type='text' placeholder='Enter Country' id='country' name={`addresses[${index}].country`} data-testid={`country-${index}`} />
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].country`} component={'div'} data-testid={`country-error-${index}`} />
                                                        </div>
                                                        <div className={isMobile ? 'comp-det m-comp-det' : 'comp-det'}>
                                                            <label htmlFor='zip'>Portal/ Zip Code</label>
                                                            <Field as='select' name={`addresses[${index}].zipCode`} id='zip' data-testid={`zip-${index}`}>
                                                                <option value=''>select</option>
                                                                <option value='1'>Zip 1</option>
                                                                <option value='2'>Zip 2</option>
                                                            </Field>
                                                            <ErrorMessage className='error-msg' name={`addresses[${index}].zipCode`} component={'div'} data-testid={`zip-error-${index}`} />
                                                        </div>
                                                    </div>
                                                    <div className='set-default'>
                                                        <Field  type='checkbox' id='checkbox' className='checkbox input-feild' name={`addresses[${index}].isDefault`} data-testid={`default-address-${index}`} />
                                                        <label htmlFor='checkbox' className='check-label'>Set as default address</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p onClick={() => push(addressValues)} className={isMobile ? 'add-para m-add-para' : 'add-para'}><span className='add-symbol'>+</span>   Add Another Address</p>
                                                    {index > 0 && <p onClick={() => remove(index)} className={isMobile ? 'add-para m-add-para' : 'add-para'}><span className='add-symbol'>-</span> Remove Address</p>}
                                                </div>

                                            </>
                                        ))}
                                    </div>

                                )
                            }
                        }
                    </FieldArray>

                    <div>
                        <button data-testid="submit-btn" type='submit' className={isMobile ? 'save-button m-save-button' : 'save-button'}>Save</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default CompanyInformation