<<<<<<< HEAD
import { FC, useEffect, useMemo, useState } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient, TOrder } from '@utils-types';
import { useSelector } from '../../services/store';

import { useParams } from 'react-router-dom';
import { getOrderByNumberApi } from '@api';
import { getAllIngredients } from '../../services/slices/ingredients';

export const OrderInfo: FC = () => {
  const params = useParams();
  const [orderData, setOrderData] = useState<TOrder>({
    _id: '',
    status: '',
    name: '',
    createdAt: '',
    updatedAt: '',
    number: 0,
    ingredients: ['']
  });
  const ingredients: TIngredient[] = useSelector(getAllIngredients);
=======
import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = {
    createdAt: '',
    ingredients: [],
    _id: '',
    status: '',
    name: '',
    updatedAt: 'string',
    number: 0
  };

  const ingredients: TIngredient[] = [];
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

<<<<<<< HEAD
  useEffect(() => {
    getOrderByNumberApi(Number(params.number)).then((data) => {
      setOrderData(data.orders[0]);
    });
  }, []);

=======
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a
  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
