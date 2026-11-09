let colors = require("colors");
let http = require("http");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');


let usuarios = [];

///////////////////////////////////////////////

app.get("/", function (req, res) {
    res.redirect("/projects.html");
});


app.use(express.static("./public"));

///////////////////////////////////////////////

app.get("/cadastra", function (req, res) {
    res.sendFile(__dirname + "/public/cadastro.html");
});


app.post("/cadastra", function (req, res) {
    let nome = (req.body.nome || "").trim();
    let sobrenome = (req.body.sobrenome || "").trim();
    let email = (req.body.email || "").trim().toLowerCase();
    let senha = req.body.senha || "";

    console.log(nome, sobrenome, email, senha);

    if (nome == "" || email == "" || senha == "") {
        res.render("resposta.ejs", {
            titulo: "Erro no cadastro",
            mensagem: "Preencha nome, e-mail e senha.",
            sucesso: false,
            link: "/cadastra",
            texto_link: "Voltar ao cadastro"
        });
        return;
    }

    let existe = usuarios.find(function (u) {
        return u.email == email;
    });

    if (existe) {
        res.render("resposta.ejs", {
            titulo: "Erro no cadastro",
            mensagem: "Já existe um usuário cadastrado com esse e-mail.",
            sucesso: false,
            link: "/cadastra",
            texto_link: "Voltar ao cadastro"
        });
        return;
    }

    usuarios.push({ nome: nome, sobrenome: sobrenome, email: email, senha: senha });

    res.render("resposta.ejs", {
        titulo: "Cadastro realizado",
        mensagem: "Usuário " + (nome + " " + sobrenome).trim() + " cadastrado com sucesso!",
        sucesso: true,
        link: "/login",
        texto_link: "Ir para o login"
    });
});

///////////////////////////////////////////////

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", function (req, res) {
    let email = (req.body.email || "").trim().toLowerCase();
    let senha = req.body.senha || "";

    console.log(email, senha);

    let usuario = usuarios.find(function (u) {
        return u.email == email && u.senha == senha;
    });

    if (usuario) {
        res.render("resposta.ejs", {
            titulo: "Login realizado",
            mensagem: "Bem-vindo, " + (usuario.nome + " " + usuario.sobrenome).trim() + "! Login realizado com sucesso.",
            sucesso: true,
            link: "/projects.html",
            texto_link: "Ir para os projetos"
        });
    } else {
        res.render("resposta.ejs", {
            titulo: "Falha no login",
            mensagem: "E-mail ou senha incorretos.",
            sucesso: false,
            link: "/login",
            texto_link: "Tentar novamente"
        });
    }
});

///////////////////////////////////////////////

let server = http.createServer(app);
server.listen(80, "0.0.0.0");

console.log("Servidor rodando na porta 80 ...".rainbow);