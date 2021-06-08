import React from 'react';
import classees from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classees.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="product Review" />

            <div className={classees.TimeSection}>
                <p>{`${currentHour}:${currentMinute}`}</p>
            </div>
        {/* <div className={classees.HeartBeataSection}> 
        <i className="fas fa-heartbeat"></i> 
        <p>78</p>
        </div> */}
        </div>
    );
}

export default ProductPreview;