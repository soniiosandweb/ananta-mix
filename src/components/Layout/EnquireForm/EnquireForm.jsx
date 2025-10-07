import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EnquireForm = ({ title, setOpen, button, formId }) => {
    const [formVisible, setFormVisible] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [termsValue, setTermsValue] = useState(false);
    const [termsCheck, setTermsCheck] = useState(false);
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState("");
    const [termsError, setTermsError] = useState("");

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (mobileNumber) {
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 5000);

                return false;
            }
        }

        if(!priceRange) {
            setPriceError("Please Enter Price Range.");

            setTimeout(() => {
                setPriceError('');
            }, 5000);

            return false;
        }

        if(!termsError) {
            setTermsError("Please select checkbox.");

            setTimeout(() => {
                setTermsError('');
            }, 5000);

            return false;
        }

        // setDisableSubmit(true);
        setLoading(true);

        axios({
            method: "post",
            url: "https://anantaaspirezirakpur.co/api/enquire-us-api.php",
            data: JSON.stringify({
                name: name,
                mobileNumber: mobileNumber,
                email: email,
                price: priceRange,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);
                    setFormSuccess(
                        <>
                            <span className='thanku-txt'>THANK YOU </span>
                            <div className='flex flex-col'>
                                <span> For Trusting Us with Your Home Search!!</span> 
                                <span>We’ll Reach Out Soon With All the Details.</span> 
                            </div>
                        </>
                    );
                    // if( setOpen){

                    //     setFormVisible(false);
                    //   }
                    resetForm();
                    setTimeout(() => {
                        setFormSuccess('');
                        if(setOpen){
                            setOpen(false);
                            setFormVisible(true);
                        }
                    }, 10000);

                } else {
                    setLoading(false);
                    setFormError("Some error occured");
                    resetForm();
                    setTimeout(() => {
                        setFormError('');
                    }, 10000);
                }
            })
            .catch(function (response) {
                //handle error
                setLoading(false);
                console.log(response);
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 10000);
            });

    }

    const EmailChange = (e) => {

        setEmail(e.target.value);
    }

    const NameChange = (e) => {

        const value = e.target.value;

        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
        setName(filteredValue);

    }
    const CheckboxChange = (e) => {

        setTermsValue(!termsValue);
        setTermsCheck(!termsValue);
    }

    const resetForm = () => {
        setName("")
        setMobileNumber('');
        setEmail('');
        setTermsValue(false);
        setTermsCheck(false);
        setPriceRange('');
    }

    return (
        <form className="enquire-form py-6" id='enquiry-form' onSubmit={handleSubmit}>
             <div className={`form-section text-left ${formSuccess ? 'form-success' : ''}`}>
                {formError && (
                    <p className="text-red-500 py-2 error text-[12px] text-center">{formError}</p>
                )}

                {formSuccess && (
                    <p className="success-wrapper text-green-700 py-2 text-[15px] gap-2 text-center flex flex-col items-center justify-center">
                        {/* <div className="text-white bg-primary-brown check"> <FontAwesomeIcon icon={faCheck} /></div> */}
                        <span className='flex flex-col gap-2 flex flex-col success-text'>{formSuccess}</span>
                    </p>
                )}
                {formVisible && (<div className='gap-2' id='enquiry-form'>
                    <h5 className="text-2xl font-semibold capitalize mb-2.5">{title}</h5>
                    <div className="py-2 form-row">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            required
                            value={name}
                            onChange={(e) => NameChange(e)}
                        />
                    </div>
                    <div className="py-2 form-row">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email (Optional)"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"

                            value={email}
                            onChange={(e) => EmailChange(e)}
                        />
                    </div>
                    <div className="py-2 form-row">
                        <PhoneInput
                            required
                            type="tel"
                            id="mobile-number"
                            // maxlength="11"
                            name="mobile-number"
                            placeholder="Mobile Number*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            country="IN"
                            defaultCountry="IN"
                            value={mobileNumber}
                            onChange={setMobileNumber}
                            limitMaxLength={true}
                            national="true"
                            international={false}
                        />
                        {phoneError && (
                            <p className="text-red-400 error text-sm">{phoneError}</p>
                        )}
                    </div>

                    <div className="py-2 form-row">
                        <p className='form_label'>Price Range</p>

                        <ToggleButtonGroup name={`price_range_${formId}`} className='price_range_group' type="radio" value={priceRange} onChange={(val) => setPriceRange(val)}>
                            <ToggleButton id={`${formId+"_1"}`} value={"1.5 Cr to 2 Cr"} className={`${priceRange === "1.5 Cr to 2 Cr" && 'active'}`}>
                                1.5 Cr to 2 Cr
                            </ToggleButton>
                            <ToggleButton id={`${formId+"_2"}`} value={"2 Cr to 2.5 Cr"}>
                                2 Cr to 2.5 Cr
                            </ToggleButton>
                            <ToggleButton id={`${formId+"_3"}`} value={"2.5 Cr to 3 Cr"}>
                                2.5 Cr to 3 Cr
                            </ToggleButton>
                            <ToggleButton id={`${formId+"_4"}`} value={"3 Cr to 3.5 Cr"}>
                                3 Cr to 3.5 Cr
                            </ToggleButton>
                        </ToggleButtonGroup>
                        {priceError && (
                            <p className="text-red-700 error text-sm">{priceError}</p>
                        )}
                    </div>

                    <p className={`checkbox_div flex items-center text-[10px] mt-5 ${termsCheck ? 'font-semibold' : 'font-extralight  text-gray-400'}`}>
                        {/* <input type='checkbox' required className='align-middle size-4 checkbox' name="termsCheck" checked={termsCheck} value={termsValue} onChange={(e) => CheckboxChange(e)} />  */}
                        

                        <label className="custom-checkbox">
                            <input type='checkbox' className='align-middle size-4 checkbox' name={`termsCheck_${formId}`} checked={termsCheck} value={termsValue} onChange={(e) => CheckboxChange(e)} /> 
                            <span className="checkmark"></span>
                        </label>
                        <span>I agree to be contacted by 'The Ananta Aspire' and agents via WhatsApp, SMS, phone, email etc.</span>

                        
                    </p>
                    {termsError && (
                        <p className="text-red-700 error text-sm">{termsError}</p>
                    )}

                    <div className="mt-2.5 text-center flex items-center gap-5 justify-center">
                        <input type="submit" value={button ? button : 'Download Now'} className={`submit_btn font-bold uppercase text-xs  py-2.5 sm:pb-3.5 sm:pt-[15px] px-3.5 sm:px-[22px] 1xl:px-8 rounded-md text-primary-brown  bg-white border-2 border-primary-brown hover:bg-primary-brown hover:text-white cursor-pointer`} />


                        {loading && (
                            <CircularProgress
                                sx={{
                                    color: (theme) =>
                                        theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                                }}
                                size={35}
                                thickness={4}
                                value={100}
                            />
                        )}
                      
                    </div>
                </div>
                )}
            </div>
        </form>
    )
}

export default EnquireForm


