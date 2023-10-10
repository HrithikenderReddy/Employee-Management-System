
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'


function App() {
  

  return (
    <>
       <BrowserRouter>
       <HeaderComponent/>
       <Routes>
        {/* //http://localhost:4000 */}
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:4000/employees */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          {/* //http://localhost:4000/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

        {/* //http://localhost:4000/edit-employee/1 */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}> </Route>
        
         {/* //http://localhost:4000/departments */}
        <Route path='/departments' element={<ListDepartmentComponent/>}></Route>

        {/* //http://localhost:4000/add-department */}

        <Route path='/add-department' element={<DepartmentComponent/>}></Route>

        {/* //http://localhost:4000/edit-department/:id */}

        <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>
       
       </Routes>
      
      <FooterComponent/>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
