import styles from './ProductOption.module.scss';
import clsx from "clsx";
import Button from "../Button/Button";

const ProductOption = (props) => {
    const {sizes, colors, prepareColorClassName, currentColor, setCurrentColor, currentSize, setCurrentSize, title, getPrice} = props;

    return (
        <form>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>
                    {sizes.map(size => (
                        <li key={size.name}>
                            <button className={clsx(size.name === currentSize && styles.active)} onClick={(e) => {
                                e.preventDefault();
                                setCurrentSize(size.name);
                            }}>
                                {size.name}
                            </button>
                        </li>

                    ))}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                    {colors.map(color => (
                        <li key={color}>
                            <button
                                type="button"
                                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                                style={{backgroundColor: color}}
                                onClick={() => setCurrentColor(color)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <Button className={styles.button} name={title} price={getPrice()} color={currentColor} size={currentSize}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
};

export default ProductOption;