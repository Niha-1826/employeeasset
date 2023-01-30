import './Form.css'; 
import Card from '../Layout/Card';
import MainHeader from '../Layout/MainHeader';
import Button from '../Layout/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../actions/AssetActions';

function AddAssetForm(){

    const [error,setError] = useState(false);

    const dispatch = useDispatch();
    
     const [assets,setAssets] = useState([{}]);

     const handleInputChange = (event) => {
        const {name,value} = event.target;

        setAssets({...assets,[name]:value})
    }

    const submitHandler = (event) => {

        event.preventDefault();

        if(assets.serialNumber < 0 || assets.serialNumber == 0 || assets.status.trim() === ''){
            setError(true);
            return;
        }

        
        console.log(assets)
        dispatch(addAsset(assets));

        setAssets({});
        
        
    }
    return(
        
        
        <div className='login'>
        
        <MainHeader/>
        <h2>Asset Form</h2>
            <Card>
              <form className='form' onSubmit={submitHandler}>
                {error && <p>Please check the entered Details </p>}
                <div className='dropdown'>
                    <label >Item Name</label>
                    
                    <select name = 'itemName' onChange={handleInputChange}>
                        <option value =''>Select--</option>
                        <option value ='laptop'>Laptop</option>
                        <option value = 'mouse'>Mouse</option>
                        <option value = 'charger'>Charger</option>
                
                    </select>
                
                </div>
                <div>
                    <label>Serial Number</label>
                    <input type='number' name='serialNumber' onChange={handleInputChange} value = {assets.serialNumber}/>
                </div>
                <div>
                    <label>Status</label>
                    <input type='text' name='status' onChange={handleInputChange} value = {assets.status}/>
                </div>
                <div>
                    <Button operation = 'Add Asset'/>
                </div>
              </form>
              </Card>
        </div>

    )
}

export default AddAssetForm;