// Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación.

const crearComentario = async (postId, nombre, cuerpo) => {
const response = await fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    postId: postId,
    name: nombre,
    body: cuerpo
    })
});
    const data = await response.json();
    console.log('Comentario creado:', data);
}

crearComentario(5, 'Juan Pérez','Este es un comentario sobre la publicación 5.');
