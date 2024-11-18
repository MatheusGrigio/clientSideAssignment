document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      tipo: document.querySelector('input[name="tipo"]:checked').value,
      estilo: document.querySelector('input[name="estilo"]:checked').value,
      pais: document.getElementById("pais").value,
    };

    const butao = document.getElementsByClassName("radio-button");
    let botaoSelecionado = null;
    Array.from(butao).forEach(function(butao) {
      butao.addEventListener("click", function() {
       
        if (botaoSelecionado) {
          botaoSelecionado.style.backgroundColor = ""; // Volta o outro botao ao original
      }
  
      butao.style.backgroundColor = "lightgray";
      butao.style.color = "black";
      botaoSelecionado = butao; //armazena o botao selecionado
      });
    });

    console.log("Dados:", formData);

    fetch("http://localhost:3333/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Orçamento solicitado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Houve um erro na solicitação.");
      });
  });

  
