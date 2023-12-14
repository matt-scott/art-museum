import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

function GalleryNavigation({ galleries }) {
    console.log(galleries);
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">
                Home
            </NavLink>

            {galleries.map((element) => (
                <NavLink key={element.id} to={`/galleries/${element.id}`}>
                    {element.name}
                </NavLink>
            ))}

        </nav>
    );
}

export default GalleryNavigation;