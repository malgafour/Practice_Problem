import React from 'react';
import classees from './ProductDetails.module.css';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item , pos) => {

        const classAr = [classees.ProductImage];
        if(pos === 0){
           classAr.push(classees.SelectedProductImage)
        }
        return(
            <img key={pos} className={classAr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=> props.onColorOptionClick(pos)}/>
        );
    })


    const featureList = props.data.featureList.map((item , pos) => {
        const classAr = [classees.FeatureItem]
        if(pos === 0)
        {
            classAr.push(classees.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classAr.join(' ')}>{item}</button>
        )
    })
    return (
        <div>
             <div className={classees.ProductData}>
              <h1 className={classees.ProductTitle}>{props.data.title}</h1>
              <p className={classees.ProductDescription}>{props.data.description}</p>

              <h3 className={classees.SectionHeading}>Select Color</h3>
              <div>
                {colorOptions}
             </div>

               <h3 className={classees.SectionHeading}>Featured</h3>
               <div>
               {featureList}
                </div>
               <button className={classees.PrimatyBtn}>Buy Now</button>
          </div>  
        </div>

    );

}


export default ProductDetails;