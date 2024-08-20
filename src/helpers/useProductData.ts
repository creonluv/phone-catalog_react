import { useFetchProducts } from './useFetchProducts';

export const useProductData = () => {
  const { phones } = useFetchProducts('phones');

  const firstNinePhones = phones.slice(0, 9);
  const salesNinePhones = phones.slice(20, 29);

  return { firstNinePhones, salesNinePhones };
};
