import React from 'react';
import classNames from 'classnames';
import './_input.scss';

const Input = React.forwardRef(({ children, label, type, placeholder, classNameDiv, classNameInput, ...props }, ref) => {
  const classesDiv = classNames(classNameDiv);
  const classesInput = classNames('form-control', classNameInput)
  return (
    classNameInput === "" ?
      <div className={classesDiv}>
        <input
          type={type}
          placeholder={placeholder}
          className={classesInput}
          {...props}
          ref={ref} // Agregamos el ref aquí
        />
        {children}
        <label htmlFor="floatingInputGrid text-truncate">{label}</label>
      </div>
      :
      <div className={classesDiv}>
        <input
          type={type}
          placeholder={placeholder}
          className={classesInput}
          {...props}
          ref={ref} // Agregamos el ref aquí
        />
        {children}
        <label htmlFor="floatingInputGrid text-truncate">{label}</label>
      </div>
  );
});

export default Input;

