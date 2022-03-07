import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { scrollTo } from 'lib/scroll';

const FocusError = () => {
    const { errors, isSubmitting, isValidating } = useFormikContext();

    useEffect(() => {
        if (isSubmitting && !isValidating) {
            const keys = Object.keys(errors);
            if (keys.length > 0) {
                const selector = `[name=${keys[0]}]`;
                const errorElement = document.querySelector(selector) as HTMLElement;
                if (errorElement) {
                    const bodyRect = document.body.getBoundingClientRect();
                    const elemRect = errorElement.getBoundingClientRect();
                    const offset = elemRect.top - bodyRect.top;
                    scrollTo({
                        offset: offset - 30,
                        callback: () => {
                            errorElement.focus();
                        },
                    });
                }
            }
        }
    }, [errors, isSubmitting, isValidating]);

    return null;
};

export default FocusError;
