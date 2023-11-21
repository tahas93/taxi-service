import { useState } from 'react';
import WithLayout from '../src/components/WithLayout';

const book = () => {
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
    <div className='xs:px-5 flex w-full flex-wrap items-center justify-center space-y-10 py-10 lg:px-0'>
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
      <form
        method='post'
        onSubmit={submitForm}
        className='mx-auto xs:w-full lg:w-auto lg:max-w-md rounded-md bg-white bg-opacity-40 p-5 shadow-xl'
      >
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='text'
              name='fullname'
              id='fullname'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
              placeholder=' '
              onChange={handleInput}
              required
            />
            <label
              htmlFor='fullname'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Full name*
            </label>
          </div>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='tel'
              pattern='[0-9]{10}'
              name='phone'
              id='phone'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
              placeholder=' '
              onChange={handleInput}
              required
            />
            <label
              htmlFor='phone'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Phone number*
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-1 md:gap-6'>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='text'
              name='pickup_location'
              id='pickup_location'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
              placeholder=' '
              onChange={handleInput}
              required
            />
            <label
              htmlFor='pickup_location'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Pickup Location*
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-1 md:gap-6'>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='text'
              name='destination'
              id='destination'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
              placeholder=' '
              onChange={handleInput}
              required
            />
            <label
              htmlFor='destination'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Destination*
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='text'
              name='copessangers'
              id='copessangers'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
              placeholder=' '
              onChange={handleInput}
            />
            <label
              htmlFor='copessangers'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Co-pessangers
            </label>
          </div>
        </div>
        <div className='flex w-full items-center justify-end'>
          <button
            type='submit'
            className='inline-block rounded-xl bg-blue-500 px-6 py-2 text-sm font-bold text-white transition duration-200 hover:bg-blue-600'
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithLayout(book, 'book', 'Book');
