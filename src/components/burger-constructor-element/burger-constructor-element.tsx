import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { removeConstructorItem } from '../../services/slices/constructor';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();
=======

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a
    const handleMoveDown = () => {};

    const handleMoveUp = () => {};

<<<<<<< HEAD
    const handleClose = () => {
      dispatch(removeConstructorItem(ingredient));
    };
=======
    const handleClose = () => {};
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
