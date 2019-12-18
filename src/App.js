import React, { Component } from 'react';
import Payments from './Components/Payments/Payments.jsx';
import AddPayment from './Components/AddPayment/AddPayment.jsx';
import EditPayment from './Components/EditPayment/EditPayment.jsx';

import './App.css';

const initialState = {
  list : [
    {
      folio: 1123625781,
      cantidad: 16.89,
      receptor: "Amazon",
      descripcion: "October shopping"
    },
    {
      folio: 9910499321,
      cantidad: 189.01,
      receptor: "PayPal",
      descripcion: "Lent money"
    },
    {
      folio: 2738819911,
      cantidad: 991.00,
      receptor: "Mark Michaels",
      descripcion: "Rent deposit"
    }
  ]
};

class App extends Component{
  constructor() {
    super();
    this.state = {
      route: 'home',
      editable: '',
      list: initialState.list
    }
  }

  onRouteChange = route => {
    this.setState({route: route});
  }

  onDelete = folio => {
    this.setState(state => {
      const list = state.list.filter(item => item.folio !== folio);

      return {
        list
      };
    });
  }

  onAdd = (item) => {
    this.setState(state => {
      const list = state.list.concat(item);

      return {
        list,
      };
    });
  }

  onEditRoute = (route, folio) => {
    this.setState({
      route: route,
      editable: folio
    })
  }

  onEdit = (i) => {
    this.setState(state => {
      const list = state.list.map((item) => {
        if(item.folio === i.folio){
          return i;
        }else{
          return item
        }
      });

      return{
        list,
      };
    });
  }

  render() {
    const { route, list } = this.state;
    return (
      <div className="App">
        { route === 'home'
          ? <div>
              <Payments onRouteChange={this.onRouteChange} onDelete={this.onDelete} onEditRoute={this.onEditRoute} list={list}/>
            </div>
          : ( 
            route === 'add'
            ? <AddPayment onRouteChange={this.onRouteChange} onAdd={this.onAdd}/>
            : <EditPayment onRouteChange={this.onRouteChange} onEdit={this.onEdit} list={this.state.list} target={this.state.editable}/>
            )
        }
      </div>
    );
  }
}

export default App;
