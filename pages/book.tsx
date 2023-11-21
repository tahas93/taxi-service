
import WithLayout from '../src/components/WithLayout';
import Book from '@components/Book';

const book = () => {
  return (
    <div className='xs:px-5 flex w-full flex-wrap items-center justify-center space-y-10 py-10 lg:px-0'>
      {/* @ts-ignore */}
      <Book />
    </div>
  );
};

export default WithLayout(book, 'book', 'Book');
