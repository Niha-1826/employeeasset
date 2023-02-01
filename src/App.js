
import { useEffect ,useState} from 'react';
import { Route,createBrowserRouter, RouterProvider,createRoutesFromElements, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddAssetForm from './components/AddAssetForm';
import AddEmployeeForm from './components/AddEmployeeForm';
import Controller from './components/Controller';
import EmployeeList from './components/EmployeesList';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import apiClient from './api/http-common';
import AssetList from './components/AssetList';
import EditEmployeeForm from './components/EditEmployeeForm';
import EditAssetForm from './components/EditAssetForm';
import EditAddressAndPhoneNumber from './components/EditAddressAndPhoneNumber';
import Employee from './components/Employee';

function App() {

  const [employees,setEmployees] = useState([]);

  useEffect(()=>{apiClient.get('/viewAllEmployees').then((response)=>{
    setEmployees(response.data);
  })},[]);


  const [assets,setAssets] = useState([]);

  useEffect(()=>{apiClient.get('/viewAllAssets').then((response)=>{
    setAssets(response.data);
  })

  },[]);

  const [currentEmployee,setCurrentEmployee] = useState({});

  const [currentAsset,setCurrentAsset] = useState({});

  const routes = createRoutesFromElements(
    <Route>
      
      <Route path = '/'element={<LoginPage/>}/>
      <Route path = '/controller' element={<Controller  setCurrentEmployee={setCurrentEmployee}/>}/>
      <Route path = "/controller/addEmployee"element ={<AddEmployeeForm/>}/>
      <Route path = "/controller/addAsset"element = {<AddAssetForm/>}/>
      <Route path = "/controller/viewAllEmployees"element={<EmployeeList employees= {employees} setCurrentEmployee={setCurrentEmployee}/>}/>
      <Route path = '/controller/viewAllAssets'element={<AssetList assets = {assets} setCurrentAsset={setCurrentAsset} />}/>
      <Route path = '/controller/editEmployee'element={<EditEmployeeForm currentEmployee={currentEmployee}/>}/>
      <Route path = '/controller/editAsset'element = {<EditAssetForm currentAsset={currentAsset}/>}/>
      <Route path = '/controller/editPhnNumberAndAddress'element = {<EditAddressAndPhoneNumber currentEmployee={currentEmployee}/>}/>
    
      
    </Route>
  )

  const router = createBrowserRouter(routes);
  
  return (
    <div>
      
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
