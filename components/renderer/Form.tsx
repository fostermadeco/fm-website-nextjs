import TextMarkdown from '@components/TextMarkdown';
import { TypeFormFields } from '@types';

const Form = ({ fields }: { fields: TypeFormFields }) => {
    const { id, intro } = fields;
    return (
        <div>
            <div className="grid grid-cols-14">
                <div className="col-span-6 col-start-5">
                    {intro && <TextMarkdown text={intro} />}
                    <form id={id} />
                </div>
            </div>
        </div>
    );
};

export default Form;
