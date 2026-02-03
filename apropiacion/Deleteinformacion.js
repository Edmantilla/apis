// Realice una solicitud DELETE para eliminar una publicación existente.

const eliminarPublicacion = async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log('Publicación eliminada:', data);
}

eliminarPublicacion(8);


