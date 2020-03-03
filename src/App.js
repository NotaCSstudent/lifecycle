import React, {Component}  from 'react';


class LifeCycle extends Component {

  constructor(){
    super();
    this.state = {
      items:[],
      isLoaded: false,
    };
  };








//This is where all our methods will live
componentDidMount(){
//Grabs the data from Json file
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {//Res means response

  return res.json(); //returns data

})

//previews the data
.then(data => {
  console.log(data);
  this.setState({
    isLoaded: true,
    items: data,

  });
});
};







  render(){
var{isLoaded, items} = this.state;
if(!isLoaded){
  return(<div>Loading..</div>

}
else{
    return(

      <div className ="app">
      <div className="Names">
      <ul>
      {items.map(el => {
        return (
          <li key={el.key}>
          Name: {el.name} | Username: {el.userName}| {" "}
          <a href={`https:// ${el.website}`}> Website </a>
          </li>
        )
      })}

      </ul>
      </div>
      </div>
    );
  };
};


export default LifeCycle;
