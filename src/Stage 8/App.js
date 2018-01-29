import React, { Component } from 'react';

import Employee from './models/Employee';
import Header from './components/Header/';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';
// components

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
      <Header />
        // render Header here
        <div className="main-container">
        <EmployeeList employees={ this.state.employees } selectEmployee={ this.selectEmployee.bind(this) }/>
        <EmployeeEditor selected={this.state.selectedEmployee} refreshList={ this.refresh.bind(this) }/>
          // render EmployeeList here
          // render EmployeeEditor
        </div>
      </div>
    )
  }
}

export default App;
