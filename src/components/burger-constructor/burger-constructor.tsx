import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { getAuthChecked, getUser } from '../../services/slices/auth';
import { buildOrder, resetOrder } from '../../services/slices/orderBuilder';
import { resetConstructor } from '../../services/slices/constructor';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { constructorItems } = useSelector((state) => state.burgerConstructor);
  const isAuthChecked = useSelector(getAuthChecked);
  const user = useSelector(getUser);
  const { orderRequest, order } = useSelector((state) => state.orderBuilder);

  const onOrderClick = () => {
    if (!isAuthChecked || !user) {
      navigate('/login');
      return;
    }
    //! Оформление заказа работает если булка выбрана и ингредиенты тоже
    if (constructorItems.bun && constructorItems.ingredients) {
      const ingredients = [
        constructorItems.bun._id,
        ...constructorItems.ingredients.map((ing) => ing._id),
        constructorItems.bun._id
      ];
      dispatch(buildOrder(ingredients));
    }
  };
  const closeOrderModal = () => {
    dispatch(resetOrder());
    dispatch(resetConstructor());
    navigate('/');
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={order}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
