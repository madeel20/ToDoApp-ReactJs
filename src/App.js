import React from 'react';
import './App.css';
import ItemsList from './ItemsList';


class App extends React.Component {
  state  = { list:[],currentItem:{ value: '',key:''},updateItem: null}
  addItem = (e)=>{
    e.preventDefault();
    const val = this.state.currentItem;
    if(val.value !==""){
     const updatedList=  [...this.state.list,val]
      this.setState(
        {
          list:updatedList,
          currentItem:{
            value:'',
            key:''
          }
        }
        );
    }

    console.log(this.state);

  }
  onTextChange=(e)=>{
    this.setState({
      currentItem:{ value:e.target.value, key:e.target.value}
    });
    console.log(e.target.value);
  }
  deleteItem=(value)=>{
    const filteredList = this.state.list.filter(item=> item.value!==value);
    this.setState({list:filteredList})
  }
  onUpdate(e,key){
    console.log(e.target.value);
    const items = this.state.list.map((item)=>{
      if(item.key === key){
           item.value = e.target.value;
           this.setState({updateItem: item})
      }
      return item;
    });
    this.setState({list:items})

  }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.addItem} id="to-do-form">
          <input 
          type="text" 
          placeholder="Enter Text" 
          value={this.state.currentItem.value} 
          onChange={this.onTextChange} />
          <button onClick={this.addItem} type="submit">Add</button> 
        </form>
        <ItemsList updateItem={this.state.updateItem} onUpdate={(e,k)=>this.onUpdate(e,k)} itemList={this.state.list} deleteItem={this.deleteItem} />
         </div>
    );
  }
}

export default App;
