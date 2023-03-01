import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} onClick={e => {
    e.preventDefault();
    console.log('Summary...\n=============\nName: ',  props.name, '\nPrice: ', props.price, '\nSize: ', props.size, '\nColor: ', props.color);
    }
    }>{props.children}</button>);
};

export default Button;