fetch("https://nelson1313-github-io.vercel.app/api/hello")
  .then(r => r.json())
  .then(data => {
    console.log(data.message);
    document.getElementById("output").innerText = data.message;
  });