import CartBtns from './CartBtns';
import { Link } from 'react-router';

const ProdCard = ({ product }) => {
  const { title, price, category, image } = product;

  return (
    <div className='card bg-base-100 w-96 shadow-sm'>
      <figure className='h-60 flex items-center jsutify-center p-6'>
        <img src={image} alt={title} className='h-full w-full object-contain' />
      </figure>
      <div className='card-body p-4'>
        <h2 className='card-title'>{title}</h2>
        <p>{price.toFixed(2)}€</p>
        <div className='card-actions justify-end items-center'>
          <Link to={`category/${category}`} className='link-primary text-xs'>
            see more in {category}
          </Link>
          <CartBtns product={product} />
        </div>
      </div>
    </div>
  );
};
export default ProdCard;
