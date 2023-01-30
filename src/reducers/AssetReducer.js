import { ADD_ASSET, DELETE_ASSET, UPDATE_ASSET} from "../actions/types"

const initialState = [];
const AssetReducer = (assets = initialState,action) => {

    const { type, payload } = action;
    
     switch(type){
        case ADD_ASSET:
            return [...assets,payload]
        case DELETE_ASSET :
            return assets.filter(({id})=>id !== payload.itemNumber);

            default:
                return assets;

                case UPDATE_ASSET :
                    return assets.map((asset) => {
                        if(asset.itemNumber === payload.itemNumber) {
                         return {
                             ...asset,
                             ...payload,
                         };
                        }
                    });
     }

    
}

export default AssetReducer;


