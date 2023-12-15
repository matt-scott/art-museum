import { Link, useParams } from 'react-router-dom';
import './ArtImageTile.css'


{/* <NavLink key={element.id} to={`/galleries/${element.id}`}>
{element.name}
</NavLink> */}

function ArtImageTile ({ art }) {
    let artImage;    
    if (art.images[0]) {
        artImage = art.images[0].baseimageurl;
        // return <ArtImageTile art={element.images[0].baseimageurl}/>
    }
    else {
        // return <li>No image for this art</li>
        artImage = 'no image available';
    }

    let { galleryId } = useParams();

    return (
        <div className='art-image-tile'>
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img className='art-image' src={artImage} alt={artImage}></img>
            </Link>
        </div>
        
    );
}

// /galleries/:galleryId/art/:artId

// <Link to="">
// <img src={}>
// </Link>

export default ArtImageTile;