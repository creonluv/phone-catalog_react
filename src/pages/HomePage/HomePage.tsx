import { Categories } from '../../components/categories/Categories';
import { PhotoSlider } from '../../components/photoSlider';
import { ProductSlider } from '../../components/productSlider';
import styles from './HomePage.module.scss';
import { useProductData } from '../../helpers/useProductData';

export const HomePage = () => {
  const { firstNinePhones, salesNinePhones } = useProductData();

  return (
    <>
      <section className={styles.homepage}>
        <h1 className={styles.homepage__title}>
          Welcome to Nice Gadgets store!
        </h1>
        <PhotoSlider />
        <ProductSlider type="Brand new models" products={firstNinePhones} />
        <Categories />
        <ProductSlider type="Hot prices" products={salesNinePhones} />
      </section>
    </>
  );
};
