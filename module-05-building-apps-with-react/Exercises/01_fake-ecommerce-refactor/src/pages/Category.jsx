import { useEffect, useState } from 'react';

import ProdList from '../components/ProdList';
import { getProducts } from '../data/fakeStore';
import { useParams } from 'react-router';

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      try {
        const allProducts = await getProducts();
        // filter products by category
        const prodsInCat = allProducts.filter(
          (product) => product.category === category
        );

        if (!isCancelled) {
          setProducts(prodsInCat);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // Cleanup function to rpevent race conditions
    return () => {
      isCancelled = true;
    };
  }, [category]);

  return (
    <div>
      <h2 className='text-5xl'>Items in Cat</h2>
      <ProdList products={products} />
    </div>
  );
};
export default Category;
