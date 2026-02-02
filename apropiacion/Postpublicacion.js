// Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.

const crearPublicacion = async (userId, titulo, contenido) => {
const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
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
    console.log('Publicación creada:', data);
}

crearPublicacion(3, 'Nueva Publicación', 'Este es el contenido de la nueva publicación.');

