import "./Header.css";
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
    return ( 
        <div>
            <div className='App-header'>
				<img src={logo} alt='Holberton' />
				<h1>School dashboard</h1>
			</div>
        </div>
     );
}
 
export default Header;
