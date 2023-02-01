import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { updateAsset } from "../actions/AssetActions";
import MainHeader from "../Layout/MainHeader";
import Card from "../Layout/Card";
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";

function EditAssetForm(props) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [asset,setAsset] = useState(props.currentAsset);
    
    const handleInputChange=(event)=>{
        const {name,value} = event.target;
        setAsset({...asset,[name]:value});
         
    }
    
    const submitHandler=(event) => {

        if(asset.serialNumber < 0 || asset.serialNumber == 0 || asset.status.trim() === ''){
            alert("Please fill correct details");
            return;
        }
        
          event.preventDefault();
         dispatch(updateAsset(asset.itemNumber,asset));
         navigate("/controller");
         
    }

    return(
        
        <div className='login'>
        
        <MainHeader/>
        
            <Card>
              <form className='form' onSubmit={submitHandler}>
                <div>
                <label>Item Number</label>
                <input value={asset.itemNumber}/>
                </div>
                <div className='dropdown'>
 
                    <label >Item Name</label>
                    
                    <select name = 'itemName' onChange={handleInputChange} value = {asset.itemName} >
                        <option value =''>Select--</option>
                        <option value ='laptop'>Laptop</option>
                        <option value = 'mouse'>Mouse</option>
                        <option value = 'charger'>Charger</option>
                
                    </select>
                
                </div>
                <div>
                    <label>Serial Number</label>
                    <input type='number' name='serialNumber' onChange={handleInputChange} value = {asset.serialNumber}/>
                </div>
                <div>
                    <label>Status</label>
                    <input type='text' name='status' onChange={handleInputChange} value = {asset.status}/>
                </div>
                <div>
                    <Button operation = 'Edit Asset'/>
                </div>
              </form>
              </Card>
        </div>

       
        
    )

    }
export default EditAssetForm;