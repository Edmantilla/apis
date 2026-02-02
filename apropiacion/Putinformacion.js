// Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

const actualizarPublicacion = async (postId, userId, titulo, contenido) => {
const response = await fetch(`http://localhost:3000/posts/${postId}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    userId: userId,
    title: titulo,
    body: contenido
    })
});
const data = await response.json();
console.log('Publicación actualizada:', data);
}
actualizarPublicacion(3, 4, 'Título Actualizado', 'Este es el contenido actualizado con un put.');
