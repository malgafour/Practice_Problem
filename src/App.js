 import React from 'react';
 import classees from './App.module.css';
 import ProductData from './productData'

 
function App() {
  return (
    <div className="App">
       <header className="App-header">
       <nav className={classees.Topbar}>
         <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="Amazon Logo" />
       </nav>
       </header>

       <div className={classees.MainContainer}>
         <div className={classees.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="product Review" />
         </div>
          <div className={classees.ProductData}>
              <h1 className={classees.ProductTitle}>{ProductData.title}</h1>
              <p className={classees.ProductDescription}>{ProductData.description}</p>

              <h3 className={classees.SectionHeading}>Select Color</h3>
              <div>
                <img className={[classees.ProductImage, classees.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Defult Color" />
                <img className={classees.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Color" />
                <img className={classees.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color" />
                <img className={classees.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Perbule Color" />
               </div>
          </div>       
       
       </div>
    </div>
  );
}

export default App;
