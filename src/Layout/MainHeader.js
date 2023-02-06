import { Link } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = () => {

    const clickHandler = () => {
        localStorage.removeItem('employeeId');
        localStorage.removeItem('adminLogin')
    }

    return(
        <header className='header'>
            <h1>Employee Asset Portal</h1>
            <nav>
                <ul>
                    <li>
                <Link to ='/controller'> <h3>Home</h3></Link>
                    </li>
                    
                    <li>
                <Link to ='/' onClick={clickHandler}><h3>Logout</h3></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;