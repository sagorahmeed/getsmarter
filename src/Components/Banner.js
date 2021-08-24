
import { Link } from 'react-router-dom'
import Container from "@material-ui/core/Container";
import bannerImage from '../images/banner.png'



export const Banner = () => {
    return (
        <div className='banner_heading'>
            <div className='banner_headder'>
            <div className='banner_layout'>
                <Container>
                    <div>
                        <div className='banner_desc'>
                            <div className='banner_details'>
                                <h1 className='banner-header'>About us</h1>
                                <p className='banner_title'>Morbi in sem quis dui placerat ornare. Pellentesque odioi pharetraultricies in, diam. Sed arcu. Cras consequat.Praesent dapibus</p>
                                <ul className='banner_menu'>
                                    <li className='banner_menu_list_item'>
                                        <Link className='banner_menu_item' to='/'>Home</Link>
                                    </li>  
                                    <li className='banner_menu_list_item'>
                                        <span className='banner_menu_space' to='/'>/</span>
                                    </li>
                                    <li className='banner_menu_list_item'>
                                        <Link className='banner_menu_item' to='/about'>about</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
        </div>
            </div>
        </div>
    )
}
