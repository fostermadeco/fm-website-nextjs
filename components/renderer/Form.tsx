import FormApply from '@components/FormApply';
import FormContact from '@components/FormContact';
import { TypeFormFields } from '@types';

const Form = ({ fields }: { fields: TypeFormFields }) => {
    const { intro } = fields;

    return (
        <>
            {fields.id === 'apply' && <FormApply form={fields} />}
            {fields.id === 'contact' && <FormContact form={fields} />}
        </>
    );
};

export default Form;
