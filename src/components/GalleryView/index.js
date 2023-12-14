import { Routes, Route, useParams } from 'react-router-dom';

function GalleryView ({ galleries }) {
    let { galleryId } = useParams();
    let galleryIdInt = parseInt(galleryId);
    console.log(galleries);
    console.log(galleryIdInt);
    let gallery = galleries.find((element) => element.id === galleryIdInt);
    console.log(gallery);

    return (
        <div className='GalleryView'>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
        </div>
    );
}

export default GalleryView;

// {galleries.find((element) => (
//     <NavLink key={element.id} to={`/galleries/${element.id}`}>
//         {element.name}
//     </NavLink>
// ))}

