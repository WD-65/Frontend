import { useEffect, useState } from 'react';

// import { getProducts } from '../data/fakeStore';
import CatList from '../components/CatList';
import ProdList from '../components/ProdList';
import { getProducts } from '../data/fakeStore';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allProds = await getProducts();
        setProducts(allProds);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <CatList />
      <ProdList products={products} />
    </div>
  );
};
export default Home;
