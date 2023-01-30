import { Link } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = () => {

    return(
        <header className='header'>
            <h1>Employee Asset Portal</h1>
            <nav>
                <ul>
                    <li>
                <Link to ='/'> <h3>Home</h3></Link>
                    </li>
                    <li>
                <Link to ='/login'>  <h3> Login</h3></Link>
                    </li>
                    <li>
                <Link to ='/login'><h3>Logout</h3></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;