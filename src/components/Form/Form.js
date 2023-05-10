import React from 'react';
import styles from './Form.module.css';
import MyButton from '../Button/Button';
import PropTypes from 'prop-types';


const Form = ({ title, fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach((field) => {
      formData[field.name] = e.target.elements[field.name].value;
    });
    onSubmit(formData);
  };

  Form.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        required: PropTypes.bool,
      })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.name} className={styles.formField}>
          <label className={styles.label} htmlFor={field.name}>{field.label}</label>
          <input className={styles.input}
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
          />
        </div>
      ))}
      <MyButton type="submit">Submit</MyButton>
    </form>
  );
};

export default Form;
