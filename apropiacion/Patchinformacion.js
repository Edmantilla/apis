// Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.

const modificarPublicacion = async (postId, cambios) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cambios)
    });
    const data = await response.json();
    console.log('Publicación modificada:', data);
}

modificarPublicacion(6, { title: 'Título Modificado con PATCH' });


