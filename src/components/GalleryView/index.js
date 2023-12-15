import { Route, useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';

function GalleryView ({ galleries }) {
    let { galleryId } = useParams();
    let galleryIdInt = parseInt(galleryId);
    let gallery = galleries.find((element) => element.id === galleryIdInt);

    let galleryObjects = gallery.objects;

    return (
        <div className='GalleryView'>
            <h2>{gallery.name}</h2>

            <Route exact path="/galleries/:galleryId">
                {galleryObjects.map (element => {
                    return <ArtImageTile key={element.id} art={element} />
                })}
            </Route>
            
            <Route exact path="/galleries/:galleryId/art/:artId">
                <ArtDescription gallery={gallery}/>
            </Route>
        </div>
    );
}

export default GalleryView;

// {/* <Route exact path="/galleries/:galleryId">
//     {galleryObjects.map (element => {
//         return <ArtImageTile key={element.id} art={element} />
//     })}
// </Route> */}

// {gallery.objects.map((element) => (
//     <NavLink key={element.id} to={`/galleries/${element.id}`}>
//         {element.name}
//     </NavLink>
// ))}


// {galleries.find((element) => (
//     <NavLink key={element.id} to={`/galleries/${element.id}`}>
//         {element.name}
//     </NavLink>
// ))}

