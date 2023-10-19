document.getElementById("adicionar").addEventListener("click", adicionarLivro);

var livros = [];

function adicionarLivro() {
    var anoPublicacao = document.getElementById("anoPublicacao").value;
    var tituloLivro = document.getElementById("tituloLivro").value;
    var autor = document.getElementById("autor").value;

    var novoLivro = {
        anoPublicacao: anoPublicacao,
        tituloLivro: tituloLivro,
        autor: autor
    }

    livros.push(novoLivro);

    console.log(livros);
}

document.getElementById("filtrar").addEventListener("click", filtrarLivro);

function filtrarLivro() {
    var filtro = document.getElementById("livroFavorito").value;
    var livroEncontrado = livros.filter((livro) => {
        return livro.tituloLivro.includes(filtro);
    });

    if (livroEncontrado) {
        console.log(livroEncontrado);
    } else {
        console.log("Livro não encontrado");
    }
}

