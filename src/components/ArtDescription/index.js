import { Link, useParams } from 'react-router-dom';
import './ArtDescription.css';

function ArtDescription ({ gallery }) {
    let { galleryId } = useParams();
    let { artId } = useParams();

    let artIdInt = parseInt(artId);
    let art = gallery.objects.find((element) => element.id === artIdInt);

    return (
        <div className='art-description'>
            <Link to={`/galleries/${galleryId}`}>
                Back to Gallery - {gallery.name}
            </Link>

            {art.images.map(element => <img key={element.imageid} className='image-array'src={element.baseimageurl}></img>)}

            <a href={art.url} target="_blank">{art.title}</a>

            <h3>Description</h3>
            <p>{art.description}</p>

            <h3>Credit</h3>
            <p>{art.creditline}</p>

            <h3>Technique</h3>
            <p>{art.technique}</p>

            {/* Render all the images of the artwork */}
        </div>
    );
}

export default ArtDescription;