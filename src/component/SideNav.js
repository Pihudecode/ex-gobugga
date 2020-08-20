import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class SideNav extends Component {
    render() {
        return (
            <aside className="side-bar col-4 col-sm-4 col-md-3">
                <ul>
                    <li className="side-nav-item"><i className="fas fa-th-large"></i>Dashboard</li>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle variant="link" eventKey="1">
                                    <li className="side-nav-item">
                                        <i className="fas fa-object-group" />Subjects
                                        <i className="fas fa-chevron-right sm" />
                                    </li>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <ul className='ac-side'>
                                    <li>Mathematics</li>
                                    <li>Algebra</li>
                                </ul>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <li className="side-nav-item"><i className="fas fa-users"></i>Network</li>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle variant="link" eventKey="1">
                                    <li className="side-nav-item">
                                        <i className="fas fa-folder"></i>Resources<i className="fas fa-chevron-right sm"></i>
                                    </li>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                {/* <Card.Body> */}
                                    <ul className='ac-side'>
                                        <li>Popular Resource</li>
                                        <li>Other Resource</li>
                                    </ul>
                                {/* </Card.Body> */}
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </ul>
                <div className="btn-wrap">
                    <button className="aside-btn"><i className="fas fa-object-group"></i><a href="#"> Create Subject</a></button>
                    <button className="aside-btn"> <i className="fas fa-caret-square-up"></i><a href="#"> Upload
                    Resources</a></button>
                </div>
                <div className="hashtags">
                    <h4>Hashtags</h4>
                    <a href="#">#mathematics</a>
                    <a href="#">#history</a>
                    <a href="#">#computer</a>
                    <a href="#">#english</a>
                    <a href="#">#geography</a>
                    <a href="#">#painting</a>
                </div>

                <div className="recent_used">
                    <h4>Recent used hashtags</h4>

                    <div className="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam deserunt,
                    adipisci vitae
                    nulla ipsa delectus numquam aliquam voluptatem totam laudantium quidem consequatur itaque ad vel
                    iure quam reprehenderit aperiam!
                <div className="time">
                            12mins ago
                </div>
                    </div>
                    <div className="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam deserunt,
                    adipisci vitae
                    nulla ipsa delectus numquam aliquam voluptatem totam laudantium quidem consequatur itaque ad vel
                    iure quam reprehenderit aperiam!
                <div className="time">
                            12mins ago
                </div>
                    </div>
                </div>
            </aside>


        );
    }
}

export default SideNav;
