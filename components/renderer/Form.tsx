import FormApply from '@components/FormApply';
import TextMarkdown from '@components/TextMarkdown';
import { TypeFormFields } from '@types';

const Form = ({ fields }: { fields: TypeFormFields }) => {
    const { intro } = fields;

    return (
        <div className="mx-6 md:mx-0">
            <div className="block md:grid md:grid-cols-14">
                <div className="col-span-6 col-start-5">
                    <FormApply form={fields} />
                </div>
            </div>
        </div>
    );
};

export default Form;
