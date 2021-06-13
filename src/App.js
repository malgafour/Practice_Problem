 import React , { Component } from 'react';
 import classees from './App.module.css';
 import ProductPreview from './ProductPreview/ProductPreview';
 import ProductDetails from './ProductDetails/ProductDetails';
 import Topbar from './Topbar/Topbar';
 import ProductData from './Utils/productData';

 
class App extends Component {

  
  state = {
    productData : ProductData,
    currentPreviewImagePos :0 ,
    currentSelectedFeature :0,
   }

    onColorOptionClick = (pos) => {
     this.setState({currentPreviewImagePos:pos});
   }

   onFeatureItemClick =(pos) =>{
     this.setState({currentSelectedFeature : pos})
   }

   shouldComponentUpdate(nextProps , nextState){ 
    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos)
    {
      return false;
    }
    return true;
    }

  render(){
    return (
      <div className="App"> 
           <Topbar />  
         <div className={classees.MainContainer}>
           <div className={classees.ProductPreview}>
                <ProductPreview 
                currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                currentSelectedFeature={this.state.currentSelectedFeature} />
           </div>
            <div className={classees.ProductData}>
                  <ProductDetails 
                  data={this.state.productData}
                   onColorOptionClick={this.onColorOptionClick}
                    currentPreviewImagePos={this.state.currentPreviewImagePos}
                    onFeatureItemClick = {this.onFeatureItemClick}
                    currentSelectedFeature={this.state.currentSelectedFeature} />
            </div>
         </div>
      </div>
    );
  }  
}

export default App;
