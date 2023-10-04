import dynamic from 'next/dynamic';
import HomeMain from '../components/Home/HomeMain';
import HomeTwoMain from '../components/HomeTwo';
import SEO from '../components/seo';


const index = () => {
  return (
    <>
      <SEO pageTitle="Whizfortune" />
      <HomeTwoMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: true});