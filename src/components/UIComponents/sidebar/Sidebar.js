import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import "./Sidebar.scss"


export default function SideBarComponent(props) {

    const content = (
        <aside onClick={props.onClick}>
            <nav className="sidebar">
                <div className="p-4 pt-5">
                    <div className="list-group components mb-5">
                        <p className="sidebar-header">PIGEON</p>
                        <div className="list-group-item sidebar-item" >
                            <Link to={'/'}
                                  aria-expanded="false">Home</Link>
                        </div>
                        <div className="list-group-item sidebar-item">
                            <Link to={'/about'}
                                  aria-expanded="false">About Us</Link>
                        </div>
                    </div>

                </div>

            </nav>
        </aside>

    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));

}