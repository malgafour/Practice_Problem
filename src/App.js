 import React from 'react';
 import classees from './App.module.css';
 import ProductData from './productData'

 
function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
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

            {/* <div className={classees.TimeSection}> 
              <p>{currentHour}: {currentMinute}</p>
            </div> */}

            <div className={classees.HeartBeataSection}> 
              <i className="fas fa-heartbeat"></i>
              <p>78</p>
            </div>

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

               <h3 className={classees.SectionHeading}>Featured</h3>
               <div>
                 <button className={[classees.FeatureItem , classees.SelectedFeatureItem].join(' ')}>Time</button>
                 <button className={classees.FeatureItem}>Heart Rate</button>
               </div>
               <button className={classees.PrimatyBtn}>Buy Now</button>
          </div>       
       
       </div>
    </div>
  );
}

export default App;
