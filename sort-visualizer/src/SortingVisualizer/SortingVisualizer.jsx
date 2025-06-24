import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component{
  constructor(props){
    super(props);
    this.state = {array: [],};
  }


  componentDidMount(){
    this.resetArray();
  }

  resetArray(){
    const array = [];
    for (let i = 0; i < 100; i++){
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  mergeSort(){
  }


  render () {
    const {array} = this.state;
    
    return(
      <div>
        <div className='array-container'> 
          {array.map((value, idx) => (
            <div 
            className='array-bar'
            key = {idx}
            style={{height: `${value}px`}}></div>
          ))}
      </div>
        <button onClick={() => this.resetArray()} >Generate new array</button>
        <button onClick={() =>this.mergeSort()}>Merge Sort</button>
      </div>
      );
  }
} 

function randomIntFromInterval(min, max){
    //min and max include
    return Math.floor(Math.random() * (max - min +1) + min)
}