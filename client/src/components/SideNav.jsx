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
                        <div onClick={() => {window.location.pathname = page.link}}>
                            <div className='rowLink' id={window.location.pathname === page.link ? 'active' : ''}>
                                {page.title}
                            </div>
                        </div>        
                    );
                })} 
            </div>  
            <img src='/planeLogo.png'  alt='Flight logo' /> 
            <h3 id="footer" className='text-white mb-5'>FlightStorm</h3>
        </div> 
    );
}