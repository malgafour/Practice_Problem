 import React , { Component } from 'react';

 import classees from './App.module.css';
 import ProductPreview from './ProductPreview/ProductPreview';
 import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
 import ProductData from './Utils/productData';

 
class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImage :'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection : false,
   }

    onColorOptionClick = (pos) => {
     const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
     console.log(updatedPreviewImage);
     this.state({currentPreviewImage:updatedPreviewImage});
   }

  render(){
    return (
      <div className="App"> 
           <Topbar />  
         <div className={classees.MainContainer}>
           <div className={classees.ProductPreview}>
                <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}  />
           </div>
            <div className={classees.ProductData}>
                  <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} />
            </div>       
         
         </div>
      </div>
    );
  }  
}

export default App;
