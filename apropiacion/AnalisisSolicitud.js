// Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

const obtenerPublicacion = async (postId, tipo) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);

    // Analizamos el estado de la respuesta
    if (response.ok) {
        const data = await response.json();
        console.log(`Publicación ${tipo} (ID ${postId}) obtenida con éxito:`, data);
        // Si fue modificada, deberíamos ver los cambios reflejados aquí.
    } else {
        console.log(`Error al obtener publicación ${tipo} (ID ${postId}). Estado:`, response.status);
        // Si fue eliminada, es probable que recibamos un 404 Not Found.
    }
}

// Verificando la publicación modificada (ID 6)
obtenerPublicacion(6, 'modificada');

// Verificando la publicación eliminada (ID 8)
obtenerPublicacion(8, 'eliminada');

