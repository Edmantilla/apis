const publicacion = async (userid) =>
{
  const response = await fetch(`http://localhost:3000/posts/${userid}`);
  const data = await response.json();
  console.log(data);
}
publicacion(4);

