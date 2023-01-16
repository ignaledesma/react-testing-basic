import { useState } from 'react';

import Button from '../button';

export default function InputStepper({ defaultValue }) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const handleAdd = () => {
    setUncontrolledValue(prev => prev + 1);
  };

  const handleRemove = () => {
    setUncontrolledValue(prev => prev - 1);
  };
  return (
    <div className="flex p-2 bg-white shadow-lg rounded-lg">
      <Button onClick={handleRemove}>-</Button>
      <div
        className="w-28 text-center text-3xl"
      >
        {uncontrolledValue}
      </div>
      <Button onClick={handleAdd}>+</Button>
    </div>
  );
}