import ProdCard from './ProdCard';

const ProdList = ({ products }) => {
  return (
    <section className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-6 justify-center'>
      {products.map((prod) => (
        <ProdCard key={prod.id} product={prod} />
      ))}
    </section>
  );
};
export default ProdList;
