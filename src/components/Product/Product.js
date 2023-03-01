import styles from './Product.module.scss';
import {useState, useEffect, useMemo} from 'react'
import ProductImage from "../ProductImage/ProductImage";
import ProductOption from "../ProductOption/ProductOption";

const Product = props => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentSize, setCurrentSize] = useState('')
  useEffect(() => {
    setCurrentColor(props.colors[0]);
    setCurrentSize(props.sizes[0].name);
  }, []);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  const getPrice = useMemo(() => {
    let basePrice = props.basePrice || 0;
    let additionalPrice = 0;
    if (currentSize) {
      const selectedSize = props.sizes.find(size => size.name === currentSize);
      additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
    }
    return basePrice + additionalPrice;
  }, [currentSize, props.basePrice, props.sizes])

  return (
      <article className={styles.product}>
        <ProductImage title={props.title} currentColor={currentColor}/>
        <div>
          <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {getPrice}$</span>
          </header>
          <ProductOption
              sizes={props.sizes}
              colors={props.colors}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              prepareColorClassName={prepareColorClassName}
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              getPrice={getPrice}
          />
        </div>
      </article>
  )
};

export default Product;
