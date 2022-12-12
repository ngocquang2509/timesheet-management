import React, { useState } from 'react';

interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  type: string;
  name: string;
  value?: string;
  size: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, value, size, name, onChange, ...rest }: IInput): React.ReactElement => {
  const baseClass =
    'form-control block px-3 py-1.5 text-baseb font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';
  const classes = [
    baseClass,

    size === 'sm' ? 'w-1/6' : '',
    size === 'md' ? 'w-1/2' : '',
    size === 'lg' ? 'w-full' : ''
  ].join(' ');
  return (
    <input
      type={type}
      name={name}
      className={`${classes}`}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
