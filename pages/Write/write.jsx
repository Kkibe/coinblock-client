import React, { useEffect, useState } from 'react';
import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
  const [value, setValue] = useState('');
  useEffect(() => {}, []);
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="quill"
      />
    </div>
  );
}
