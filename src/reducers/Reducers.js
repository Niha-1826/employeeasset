import AssetReducer from "./AssetReducer";
import EmployeeReducer from "./EmployeeReducer";

const employeeReducer = () => {
    return EmployeeReducer;
}

const assetReducer = () => {
    return AssetReducer;
}

const Reducers = () => {
    return (
    employeeReducer,
    assetReducer
    )
}
export default Reducers;