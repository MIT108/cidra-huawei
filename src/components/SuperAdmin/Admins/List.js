import React from 'react'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Media, Progress, Table, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap'

function List() {
  return (
      <div>
            <Table className="align-items-center" responsive>
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">
                        <Media className="align-items-center">
                        <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <img
                            alt="..."
                            src={require("assets/img/theme/angular.jpg").default}
                            />
                        </a>
                        <Media>
                            <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                            </span>
                        </Media>
                        </Media>
                    </td>
                    <td>Mfasdjflkasjd@fasd.df</td>
                    <td>
                        <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        completed
                        </Badge>
                    </td>
                    <td  className="justify-content-between">
                        <Badge color="" className="badge-dot ml-3" style={{ cursor: "pointer" }}>
                            <i className="bg-success" />
                        </Badge>
                        <Badge color="" className="badge-dot ml-3" style={{ cursor: "pointer" }}>
                            <i className="bg-success" />
                        </Badge>
                        <Badge color="" className="badge-dot ml-3" style={{ cursor: "pointer" }}>
                            <i className="bg-success" />
                        </Badge>
                    </td>
                </tr>
            </tbody>
            </Table>
      </div>
  )
}

export default List