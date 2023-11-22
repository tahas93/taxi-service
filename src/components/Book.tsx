import BookingForm from '@components/BookingForm';
import { ApplicationContext } from '@src/store/ApplicationContext';
import { addBooking } from '@src/store/BookingsReducer';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

const Book = () => {
  const [isSubmit, setSubmit] = useState(false);

  const dispatch = useDispatch();
  const { sharedValue } = useContext(ApplicationContext);

  const submitForm = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    dispatch(addBooking(JSON.stringify(formValues)));
    sharedValue.push(formValues);
    setSubmit(true);
  }
  
  return (
    <>
      <div className='flex w-full flex-wrap items-center justify-center'>
        <div className='flex w-full items-center justify-center'>
          <img
            src='images/Taxi-Yellow-PNG-Photo.png'
            alt='taxi'
            className='w-40'
          />
        </div>
        <h1 className='w-full text-center text-lg font-semibold text-blue-600'>
          Book your Ride
        </h1>
        {isSubmit && (
          <h3 className='w-full text-center text-base font-semibold text-green-400'>
            Your booking is submitted.
          </h3>
        )}
      </div>
      {/* @ts-ignore */}
      <BookingForm submitForm={submitForm} />
    </>
  )
}

export default Book;