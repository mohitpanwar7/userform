import React from 'react';

// import './custom-button.styles.scss'
import styles from '../styles/custom-button.module.scss';

const CustomButton = ({ children, ...otherProps }) =>
(
    <button className={styles.custombutton} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;