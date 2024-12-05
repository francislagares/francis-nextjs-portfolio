import { useForm, ValidationError } from '@formspree/react';

type ContactFormProps = {
  formspreeKey: string;
};

const ContactForm = ({ formspreeKey }: ContactFormProps) => {
  const [state, handleSubmit] = useForm(formspreeKey);
  const formErrors = state.errors?.getFormErrors();

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        {state.succeeded && (
          <div className='success-message'>Email successfully sent!</div>
        )}
        {formErrors?.[0]?.message && (
          <div className='error-message'>{formErrors[0].message}</div>
        )}
        <div className='form-group'>
          <div>
            <input type='text' name='name' id='name' placeholder='Your Name' />
            <ValidationError
              prefix='Name'
              field='name'
              errors={state.errors}
              className='validation-error'
            />
          </div>
          <div>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Your Email'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
              className='validation-error'
            />
          </div>
        </div>
        <div>
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
          />
          <ValidationError
            prefix='Subject'
            field='subject'
            errors={state.errors}
            className='validation-error'
          />
        </div>
        <div>
          <textarea
            name='message'
            id='message'
            rows={5}
            placeholder='Message'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
            className='validation-error'
          />
        </div>
        <div className='submit-button-container'>
          <button disabled={state.submitting}>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
