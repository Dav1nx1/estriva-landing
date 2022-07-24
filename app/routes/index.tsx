import { Loading } from '@dav1nx1/singular-components-library';

const Index = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-max justify-center items-center'>
      <Loading
        image={'./logo.png'}
        title={'We are working for you'}
        height={150}
        width={150}
      />
    </div>
  );
}
export default Index;