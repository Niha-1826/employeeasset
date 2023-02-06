import { ADD_ASSET, DELETE_ASSET, UPDATE_ASSET, VIEW_ALL_ASSETS } from "./types";

import AssetService from "../services/AssetService";

 export const addAsset = ({itemNumber,itemName,serialNumber,status,employee}) => async (dispatch) => {
      
    try {
        const response = await AssetService.addAsset({itemNumber,itemName,serialNumber,status,employee})

        dispatch({
            type : ADD_ASSET,
            payload:response.data
        })
        return Promise.resolve(response.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const deleteAsset = (assetId) => async (dispatch) => {
    try{
        await AssetService.deleteAsset(assetId);
        dispatch({
            type:DELETE_ASSET,
            payload : {assetId},
        });
    }catch(err){
        console.log(err);
    }
};

export const updateAsset = (itemNumber,data) => async(dispatch) => {
    try{
        const response = await AssetService.updateAsset(itemNumber,data);
        dispatch({
            type:UPDATE_ASSET,
            payload : response.data
        });
        return Promise.resolve(response.data)
    }catch (err ){
        Promise.reject(err);
    }
}


