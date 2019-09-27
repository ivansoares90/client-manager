import React from 'react';
import ListComponent from './ListComponent/ListComponent'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newClientsListName: "",
      clientLists:
        [
        {
          listName: "List A",
          list: ["Ivan", "Joe", "John"]
        },
        {
          listName: "List B",
          list: ["Ivan", "Joe", "John"]
        },

        ]
      }

      this.addNewClientsList = this.addNewClientsList.bind(this);
      this.onRemoveClientsList = this.onRemoveClientsList.bind(this);
      this.handleNewClientsListNameChange = this.handleNewClientsListNameChange.bind(this);

    }

    addNewClientsList() {
      let clientLists = this.state.clientLists;

      if(this.state.newClientsListName !== "") {
        this.setState({
          clientLists: [...clientLists, {
            listName: this.state.newClientsListName,
            list: [""]
          }]
        });
      }
    }

    onRemoveClientsList(index) {
      let clientsLists = this.state.clientLists;

      clientsLists.splice(index, 1);

      this.setState({
        clientsLists
      })
    }

    handleNewClientsListNameChange (e) {
      this.setState({
        newClientsListName: e.target.value
      })
    }

  render() {
    return (
      <div className="App">
        <h1>Client List Manager</h1>
        <div>
        <input type = "text" value ={this.state.newClientsListName} onChange = {this.handleNewClientsListNameChange} />
        <button onClick = {this.addNewClientsList}>Add New Clients List</button>
      </div>
        {this.state.clientLists.map((clientList, index) => (
          <ListComponent id = {clientList.listName}
            key = {index}
            onRemoveClientsList = {() => this.onRemoveClientsList(index)}
            clients = {clientList.list}/>
        ))}

      </div>
    );
  }
}

export default App;
