import React from 'react';
import styles from '../styles/form-input.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={styles.group}>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? `${styles.shrink}` : '' }` `${styles.forminputlabel}`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;