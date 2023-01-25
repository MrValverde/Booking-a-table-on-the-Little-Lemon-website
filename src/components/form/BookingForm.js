import { useFormik } from 'formik';
import * as Yup from 'yup';
import Container from '../layout/Container';
import ControlledInputField from '../ui/ControlledInputField';
import CommentBox from '../ui/CommentBox';
import CountSelect from '../ui/CountSelect';
import DateSelector from '../ui/DateSelector';
import OccasionSelect from '../ui/OccasionSelect';

const BookingForm = ({ availableTimes, reservationHandler, updateTimesCallback }) => {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      email: '',
      time: '',
      guests: '01',
      comment: '',
      date: '',
      occasion: '',
    },
    onSubmit: (values) => {
      reservationHandler(values);
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Customer Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      time: Yup.string().required('Please select Time'),
      guests: Yup.string(),
      comment: Yup.string(),
      date: Yup.string().required('Choose a date'),
      occasion: Yup.string(),
    }),
  });

  function showError(field) {
    return formik.touched[field] && formik.errors[field] ? formik.errors[field] : null;
  }
  return (
    <>
      <section>
        <Container>
          <h3 className='section-title'>Reservation Details</h3>
          <div>* Required fields</div>
          <form onSubmit={formik.handleSubmit} data-testid='reservation-form'>
            <div className='reservation-form'>
              <ControlledInputField
                id='customerName'
                labelText='Customer Name*'
                inputVal='customerName'
                formikVal={formik.getFieldProps('customerName')}
                validated={true}
                formError={showError('customerName')}
              />
              <ControlledInputField
                id='email'
                type='email'
                labelText='Email*'
                inputVal='email'
                formikVal={formik.getFieldProps('email')}
                validated={true}
                formError={showError('email')}
              />
              <DateSelector
                dateRef='date'
                id='date'
                labelText='Date*'
                validated={true}
                formError={showError('date')}
                formikVal={formik.getFieldProps('date')}
                handleChange={formik.handleChange}
                updateTimesCallback={updateTimesCallback}
              />
              <CountSelect
                id='time'
                selectRef='time'
                labelText='Choose Time*'
                formikVal={formik.getFieldProps('time')}
                options={[...[{ name: 'Select Time', value: '' }], ...availableTimes]}
                validated={true}
                formError={showError('time')}
              />
              <CountSelect
                id='guests'
                selectRef='guests'
                labelText='No of guests*'
                formikVal={formik.getFieldProps('guests')}
                options={Array(10)
                  .fill(1)
                  .map((n, i) => (i < 9 ? `0${n + i}` : n + i))}
              />
              <OccasionSelect id='occasion' labelText='Occasion' selectRef='occasion' formError={showError('occasion')} />
              <CommentBox
                fullSpan={true}
                id='special-request'
                placeholder='Enter message'
                labelText='Special Request / Accommodations / Additional Note'
                commentRef='comment'
                formikVal={formik.getFieldProps('comment')}
              />
            </div>
            <button type='submit' data-testid='submit' className='btn-primary' disabled={!formik.isValid}>
              Make Your reservation
            </button>
          </form>
        </Container>
      </section>
    </>
  );
};
export default BookingForm;
