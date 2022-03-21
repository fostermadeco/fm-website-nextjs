import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import { getErrorMessage } from 'lib/errors';
import { theme } from 'tailwind.config';
import FieldInput from './FieldInput';
import FocusError from './FocusError';

const FormCtaNewsletter = () => {
    const [hasSuccess, setHasSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const successMessage = 'You have successfully signed up to the newsletter';
    const formErrorMessage = 'There was an error signing up to the newsletter';
    interface NewletterormValues {
        email: string;
    }
    const initialValues: NewletterormValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Give us a valid email.').required('Let us know your email.'),
    });

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        console.log(formRef);
    });

    const handleSubmit = async (values: NewletterormValues, formikHelpers: FormikHelpers<NewletterormValues>) => {
        const { setSubmitting } = formikHelpers;
        console.log({ values });

        // const body = { email_address: values.email, status: 'subscribed' };

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // body,
            });
            setSubmitting(false);
            setSubmitError(null);
            setHasSuccess(true);
        } catch (e) {
            console.log(e);
            setSubmitError(getErrorMessage(e));
        }
    };
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form
                    action="https://fostermade.us8.list-manage.com/subscribe/post?u=8503905fda180a49ac40e4e3b&amp;id=f417ed3dd8"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                    ref={formRef}
                >
                    {submitError && (
                        <div className=" bg-poppy">
                            <p className="px-4 py-4 text-white p-xl">{formErrorMessage}</p>
                        </div>
                    )}
                    {hasSuccess && (
                        <div className="mb-20 bg-black">
                            <p className="px-4 py-6 p-xl text-lime">{successMessage}</p>
                        </div>
                    )}
                    {!hasSuccess && (
                        <div className="flex flex-row">
                            <div className="flex-auto">
                                <FieldInput
                                    label="EMAIL ADDRESS"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    style={{ backgroundColor: theme.colors.lime }}
                                />
                            </div>
                            <FocusError />
                            <div className="-ml-10 mt-16">
                                <button
                                    className="hover:clickable"
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-label="submit newsletter signup"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

const CtaNewsletter = () => {
    const leftSectionMessage =
        'Want to stay in the loop? Sign-up for our quarterly newsletter and we’ll send you updates with a mix of our latest content.';
    return (
        <div className="grid-cols-1 gap-0 mx-0 md:grid md:grid-cols-2">
            <div className="md:col-span-1 bg-darkLime font-semibold p-20 text-2xl">{leftSectionMessage}</div>
            <div className="md:col-span-1 bg-lime py-14 px-20 xl:px-40">
                <FormCtaNewsletter />
            </div>
        </div>
    );
};

export default CtaNewsletter;
