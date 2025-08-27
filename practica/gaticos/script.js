async function gaticos(){
  const resp = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await resp.json();
  document.getElementById("gato").src = data[0].url;
}