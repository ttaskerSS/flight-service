import { Link } from 'react-router-dom';
import '../App.css';

const navData = [
    { title: 'View Flights', link: '/'}, 
    { title: 'Add Flight', link: '/add-flight'},
    { title: 'Update Flight', link: '/update-flight'},
    { title: 'Delete Flight', link: '/delete-flight'}
];

export const SideNav = () => {
    return (
        <div className='sideNav'> 
            <div className='d-flex flex-column'>       
                {navData.map(page => {
                    return (     
                        <Link to={page.link}><div className='rowLink'>{page.title}</div></Link>         
                    );
                })}             
            </div>   
            <h3 id="footer" className='text-white mb-5'>FlightStorm</h3>
        </div>
    );
}