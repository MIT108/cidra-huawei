import React, { useEffect, useState } from 'react'
import { Badge, Col, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Media, Progress, Row, Table, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap'
import { listAdminAction } from 'services/api/super_admin/admin'

function List() {

    const [admins, setAdmins] = useState([])
    const [oldAdmins, setOldAdmins] = useState([])
    const [offset, setOffset] = useState(1)
    const [filter, setFilter] = useState("name")
    const [search, setSearch] = useState("")

    const fetchData = async () => {
        listAdminAction(offset).then((response) => {
            setAdmins(pre => [...pre, ...response.data.data])
            setOldAdmins(pre => [...pre, ...response.data.data])
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchData();
    }, [offset])

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight

            if (currentHeight + 1 >= scrollHeight) {
                setOffset(offset + 1);
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setAdmins(oldAdmins)
        if (admins.length > 0) {
            switch (filter) {
                case "name":
                    setAdmins(admins.filter(admin => admin.name.includes(search)));
                    break;
                case "email":
                    setAdmins(admins.filter(admin => admin.email.includes(search)));
                    break;
                case "tel":
                    setAdmins(admins.filter(admin => admin.tel.includes(search)));
                    break;
                default:
                    break;
            }      
        }
    }, [filter, search])

  return (
      <div>
          
            <Row className="align-items-center">
                <div className="col d-flex">
                    <div>
                        <h2 className="text-uppercase mb-0">Admin List</h2>
                    </div>
                                
                    <Col  className="justify-content-end" >
                        <FormGroup>
                        <InputGroup className="input-group-alternative mb-4">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            className="form-control-alternative"
                            placeholder="Search"
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        </InputGroup>
                      </FormGroup>
                      
                  </Col>
                  
                                
                    <Col  className="justify-content-end">
                        <FormGroup>
                        <Input type="select" value={filter} onChange={(e) => setFilter(e.target.value)} id="exampleSelect">
                            <option>name</option>
                            <option>email</option>
                            <option>tel</option>
                        </Input>
                        </FormGroup>
                    </Col>
                </div>
                <div className="col">
                </div>
            </Row>
            <Table className="align-items-center" responsive>
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Tel</th>
                <th scope="col">Status</th>
                <th scope="col" />
                </tr>
            </thead>
              <tbody>
                  {
                      admins.map((admin, index) => {
                          
                          return (
                            <tr key={index}>
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
                                        {admin.name}
                                        </span>
                                    </Media>
                                    </Media>
                                </td>
                                  <td>{admin.email}</td>
                                  <td>{admin.tel}</td>
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
                          )
                      })
                  }
            </tbody>
            </Table>
      </div>
  )
}

export default List