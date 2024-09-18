import "./styles.css";
import { Component } from "react";
import { uuidv4 } from "uuid";
class App extends Component {
  state = { nameInput: "", description: "" };

  onChangeName = (event) => {
    this.setState({ nameInput: event.target.value ,newList:[]});
  };

  onChangedescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onAddForm = (event) => {
    event.preventDefault();

    const { nameInput, description } = this.state;
    const newEvent = {
      id:uuidv4(),
      name:nameInput,
      time:time,
      date:date,
      description:description
    }
    this.setState(prevState=>{(
      newList : [...prevState.newList, newEvent],
      nameInput:"",
      description:"",
    )})
  };

  filterList=id=>{
    const {newList} = this.state 
    const searchList = newList.filter(each=>
      each.id===id
    )
    return searchList
  }

  render() {
    const {nameInput,description} =this.state
    const searchList = this.filterList();
    return (
      <div className="App">
        <h1>Hello !</h1>
        <form onSubmit={this.onAddForm}>
          <div className="name">
            <label for="EventName" className="la">
              Event Name
            </label>
            <input
              id="EventName"
              className="event-name"
              type="text"
              onChange={this.onChangeName}
            />
          </div>
          <div className="name">
            <label for="EventName" className="la">
              Event Date
            </label>
            <input id="EventName" className="event-name" type="date" />
          </div>
          <div className="name">
            <label for="EventName" className="la">
              Event Time
            </label>
            <input id="EventName" className="event-name" type="time" />
          </div>
          <div className="name">
            <label for="EventName" className="la">
              Event Description
            </label>
            <input
              id="EventName"
              className="event-name"
              type="text"
              onChange={this.onChangedescription}
            />
          </div>
        </form>
        {searchList.map(each=>{
        key=each.id )}}
      </div>
    )
  }
}
