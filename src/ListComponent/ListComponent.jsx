import React from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newClient: "",
      clients: [...props.clients]
    };


        this.handleChange = this.handleChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.newItemHandleChange = this.newItemHandleChange.bind(this);
        this.onInsertNewClient = this.onInsertNewClient.bind(this);
  }

  handleChange(e) {
    let clients = this.state.clients;

    clients[e.target.id] = e.target.value;

    this.setState ({
      clients: [...clients]
    });
  }

  onRemove(e) {
    let clients = this.state.clients;

    clients.splice(e.target.id, 1);

    this.setState ({
      clients: [...clients]
    });
  }

  newItemHandleChange(e) {
    this.setState ({
      newClient:  e.target.value
    });
  }

  onInsertNewClient(e) {
    let clients = this.state.clients;

    if(this.state.newClient !== "") {
      this.setState({
        clients: [...clients, this.state.newClient]
      })
    }
  }

  onRemoveClientsList = () => {
    this.props.onRemoveClientsList(this.props.id);
  }

  render() {
    return (
      <div className = "list">
      <h2>{this.props.id} Clients List <button onClick = {this.onRemoveClientsList}>Remove List</button></h2>
      <input type = "text" value = {this.state.newClient} onChange = {this.newItemHandleChange} />
      <button onClick = {this.onInsertNewClient}>Add New Client</button>
    <ul>
      {
      this.state.clients.map((client, index) => (
        <ListItemComponent key = {index} id = {index} clientName = {client} handleChange = {this.handleChange} onRemove = {this.onRemove} />
      ))
      }
    </ul>
    </div>
  )
  }
}

export default ListComponent;
