const informacion = async (userid) => {
  const response = await fetch(`http://localhost:3000/users/${userid}`);
  const data = await response.json();
  console.log(data);
}

informacion(2);