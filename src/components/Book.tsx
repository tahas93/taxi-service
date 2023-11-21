import BookingForm from '@components/BookingForm';
import { useState } from 'react';

const Book = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    pickup_location: '',
    destination: '',
    copessangers: '',
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    const userArr: any = [];
    const userObj = Object.assign({ formData });
    const bookings = localStorage.getItem('booking');

    if (bookings === null) {
      // console.log('if');
      userArr.push(userObj);
      localStorage.setItem('booking', JSON.stringify(userArr));
    } else {
      // console.log('else');
      const tempArr = JSON.parse(bookings);
      tempArr.push(userObj);
      localStorage.setItem('booking', JSON.stringify(tempArr));
    }
    setSubmit(true);
  };
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
      <BookingForm handleInput={handleInput} submitForm={submitForm} />
    </>
  )
}

export default Book;