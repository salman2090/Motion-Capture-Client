import React from 'react';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AddCamera from '../AddCamera/AddCamera';
import ManageCameras from '../ManageCameras/ManageCameras';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard-container">
      <div className="text-light p-3 bg-dark pt-5">
          <h4 className="mb-5">Dashboard</h4>
          <div className="listing-decoration">
            
                <li className="mb-2 ">
                    <Link to={`${url}/myOrders`}>My Orders</Link>
                </li>

              
                
                    <li className="mb-2">
                    <Link to={`${url}/manageOrders`}>Manage Orders</Link>
                    </li>
                    <li className="mb-2">
                        <Link to={`${url}/addCamera`}>Add Product</Link>
                    </li>
    
                    <li className="mb-2">
                        <Link to={`${url}/manageCameras`}>Manage Products</Link>
                    </li>
                
            
          </div>
      </div>

      <Switch>
        <Route exact path={path}>
            <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>

        <Route path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
        </Route>
        <Route path={`${path}/addCamera`}>
            <AddCamera></AddCamera>
        </Route>
        <Route path={`${path}/manageCameras`}>
            <ManageCameras></ManageCameras>
        </Route>    

      </Switch>
    </div>
    );
};

export default Dashboard;