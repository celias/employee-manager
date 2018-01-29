import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
        {
          this.props.employee.map((employee) => {
            return(
              <li className="listText" key={employee.id} onClick={ () => { this.props.selectEmployee(employee) } }>employee</li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;