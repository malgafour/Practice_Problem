import React from 'react';
import classees from './ProductDetails.module.css';
import ProductData from './productData';

const ProductDetails = (props) =>{
    console.log(props.data);
    return (
        <div>
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

    );

}


export default ProductDetails;