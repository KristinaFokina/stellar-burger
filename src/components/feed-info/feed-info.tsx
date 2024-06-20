import { FC } from 'react';

import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
  /** TODO: взять переменные из стора */
<<<<<<< HEAD
  const { orders, total, totalToday } = useSelector((state) => state.feeds);
  const feed = { total, totalToday };

  const readyOrders = getOrders(orders, 'done');
=======
  const orders: TOrder[] = [];
  const feed = {};

  const readyOrders = getOrders(orders, 'done');

>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a
  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
