import http from '../api/http-common';

 const addAsset = (data) => {
      return http.post("/addAsset",data);
}

const deleteAsset = (itemNumber) => {
    return http.delete(`/deleteAsset/${itemNumber}`);
}

const updateAsset = (itemNumber,data) => {
    return http.put(`/updateAsset/${itemNumber}`,data)
}

const AssetService = {
    addAsset,
    deleteAsset,
    updateAsset
    
}

export default AssetService;