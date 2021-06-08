 import React , { Component } from 'react';

 import classees from './App.module.css';
 import ProductPreview from './ProductPreview';
 import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
 import ProductData from './productData';

 
class App extends Component {
  state = {
    productData : ProductData
   }

  render(){
    return (
      <div className="App"> 
           <Topbar />  
         <div className={classees.MainContainer}>
           <div className={classees.ProductPreview}>
                <ProductPreview />
           </div>
            <div className={classees.ProductData}>
                  <ProductDetails data={this.state.productData}/>
            </div>       
         
         </div>
      </div>
    );
  }  
}

export default App;
