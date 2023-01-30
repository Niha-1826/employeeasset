
import { useEffect ,useState} from 'react';
import { Route,createBrowserRouter, RouterProvider,createRoutesFromElements } from 'react-router-dom';
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
import ViewEmployeeById from './components/ViewEmployeeById';

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
      <Route path = '/' element ={<HomePage/>}/>
      <Route path = '/login'element={<LoginPage/>}/>
      <Route path = '/login/controller' element={<Controller/>}/>
      <Route path = "/login/controller/addEmployee"element ={<AddEmployeeForm/>}/>
      <Route path = "/login/controller/addAsset"element = {<AddAssetForm/>}/>
      <Route path = "/login/controller/viewAllEmployees"element={<EmployeeList employees= {employees} setCurrentEmployee={setCurrentEmployee}/>}/>
      <Route path = '/login/controller/viewAllAssets'element={<AssetList assets = {assets} setCurrentAsset={setCurrentAsset} />}/>
      <Route path = '/login/controller/editEmployee'element={<EditEmployeeForm currentEmployee={currentEmployee}/>}/>
      <Route path = '/login/controller/editAsset'element = {<EditAssetForm currentAsset={currentAsset}/>}/>
      <Route path = '/login/controller/editPhnNumberAndAddress'element = {<EditAddressAndPhoneNumber currentEmployee={currentEmployee}/>}/>
      <Route path = '/login/controller/viewEmployeeById'element={<ViewEmployeeById employees={employees} setCurrentEmployee={setCurrentEmployee}/>}/>
      
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
