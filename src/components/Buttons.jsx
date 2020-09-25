import React from 'react';

import styles from './../css/button.module.css';
// This convert JSX in Javascript Objects 



// This will route to links. Links can't be updated in React without this. Tag a doesn't work it will reload page.


// https://www.w3schools.com/howto/howto_css_icon_bar.asp#
// https://www.educative.io/blog/react-router-tutorial


export default class Button extends React.Component{
  state={val:[]}
  
  handlerZero(value){
    console.log(this.state)
    let ans=this.state.val.push(value);
    this.setState({value:ans})
  }
  handlerResult(){
    alert(this.state.val)
  }
  handlerPrint(){
    return this.state.toString();
  }
  


  render(){
    return(
      <>
  <div className={`${styles.screen}`}> 

   <input className={`${styles.sheight}`}  value={this.state.val.toString()} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>


  <div class="container">
  <div class="row mt-2">
    <div class="col-sm pb-2">
      <button onClick={this.handlerZero.bind(this,1)} className={`btn btn-primary ${styles.btnwidth}`}>1</button>
    </div>
    <div class="col-sm">
     <button onClick={this.handlerZero.bind(this,2)} className="btn btn-primary">2</button>
    </div>
    <div class="col-sm">
      <button onClick={this.handlerZero.bind(this,3)} className="btn btn-primary">3</button>
    </div>
  </div>

   <div class="row">
    <div class="col-sm pb-2">
      <button onClick={this.handlerZero.bind(this,4)} className="btn btn-primary">4</button>
    </div>
    <div class="col-sm pb-2">
      <button onClick={this.handlerZero.bind(this,5)} className="btn btn-primary">5</button>
    </div>
    <div class="col-sm">
      <button  onClick={this.handlerZero.bind(this,6)} className="btn btn-primary">6</button>
    </div>
  </div>


   <div class="row">
    <div class="col-sm pb-2">
      <button onClick={this.handlerZero.bind(this,7)} className="btn btn-primary">7</button>
    </div>
    <div class="col-sm">
      <button onClick={this.handlerZero.bind(this,8)} className="btn btn-primary">8</button>
    </div>
    <div class="col-sm">
      <button onClick={this.handlerZero.bind(this,9)} className="btn btn-primary">9</button>
    </div>
    </div>

   <div class="row">
    <div class="col-sm pb-2">
      <button onClick={this.handlerZero.bind(this,0)} className="btn btn-primary">0</button>
    </div>
    <div class="col-sm">
     <button className="btn btn-primary">+</button>
    </div>
    <div class="col-sm">
      <button className="btn btn-primary">-</button>
    </div>
  </div>

   <div class="row">
    <div class="col-sm pb-2">
      <button className="btn btn-primary">*</button>
    </div>
    <div class="col-sm">
      <button className="btn btn-primary">/</button>
    </div>
    <div class="col-sm">
      <button onClick={this.handlerResult.bind(this)} className="btn btn-primary">=</button>
    </div>
  </div>


 
  




</div>
</div>
</>


    )
  }
}