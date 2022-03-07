import React from 'react';
import PdfViewer from './PdfViewer';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <PdfViewer
        url={'http://www.africau.edu/images/default/sample.pdf'}
      ></PdfViewer>
    </div>
  );
}
