import React from "react";
import { useDispatch } from "react-redux";
import { deleteAsset } from "../actions/AssetActions";
import Card from "../Layout/Card";
import MainHeader from "../Layout/MainHeader";
import { Link } from "react-router-dom";

function AssetList (props) {

    const dispatch = useDispatch();

    const editHandler = (asset) => {
        props.setCurrentAsset(asset)
    }

    return(
        <div>
            <MainHeader />
            <Card>
            <h1>Asset List</h1>
                <div>
                <table border='4cm'>
                    <thead>
                        <tr>
                            <th>Item Number</th>
                            <th>Item Name</th>
                            <th>Serial Number</th>
                            <th>Status</th>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                
                {props.assets.map((asset)=>(
                     
                        <tr key={asset.itemNumber}>
                         <td>{asset.itemNumber}</td>
                         <td>{asset.itemName}</td>
                         <td>{asset.serialNumber}</td>
                         <td>{asset.status}</td>
                         <td>{asset.employee.employeeId}</td>
                         <td>{asset.employee.employeeName}</td>
                         <td>{asset.employee.address}</td>
                         <td>{asset.employee.phoneNumber}</td>
                         <td>{asset.employee.role}</td>
                         <td><button onClick={()=>editHandler(asset)}><Link to = '/controller/editAsset'>Edit</Link></button></td>
                         <td><button onClick = {()=>dispatch(deleteAsset(asset.itemNumber))}>Delete</button></td>
                                             </tr>
                     
                ))}
                </tbody>
                </table>
                </div>
            </Card>
        </div>
    )
}

export default AssetList;