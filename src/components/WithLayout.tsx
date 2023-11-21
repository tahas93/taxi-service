import Navbar from '@components/Navbar';

export type Props = {
  title?: string;
  ComposedComponent?: any;
  pageName?: string;
};

export default (
  ComposedComponent: any,
  title: string,
  pageName: string
): any => {
  const withLayout = (props: Props) => {
    return (
      <>
        <div className='sr-only'>{title}</div>
        {/* @ts-ignore */}
        <Navbar pageName={pageName} />
        <ComposedComponent {...props} />
      </>
    );
  };

  return withLayout;
};
