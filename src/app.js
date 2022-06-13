import express from "express";
import res from "express/lib/response.js";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

const livros = [
  {id: 1, "titulo": "Senhor dos aneis"},
  {id: 2, "titulo": "O Hobbit"}
]


app.get('/', (req, res) =>{
  res.status(200).send('Curso de Node, Lay');
})

app.get('/livros', (req, res) =>{
  res.status(200).json(livros)
})



export default app