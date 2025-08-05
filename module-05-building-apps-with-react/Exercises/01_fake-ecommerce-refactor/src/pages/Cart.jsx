import TableRow from '../components/TableRow';
import { calcCartCost } from '../utils/cartUtils';
import { useOutletContext } from 'react-router';

const Cart = () => {
  const { cart } = useOutletContext();
  const cartCost = calcCartCost(cart);

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <TableRow key={prod.id} product={prod} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Cost: {cartCost.toFixed(2)}€</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Cart;
