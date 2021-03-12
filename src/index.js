const express = require("express")

const soma = (a, b) => {
    return a + b
}

module.exports = { soma }



const app = express()

const route = express.Router()

route.get("/:a/:b", (req, resp) => {
    const result = soma(Number(req.params.a), Number(req.params.b))

    resp.status(200).send({ result })
})
app.use(route)

app.listen(3000 || process.env.PORT, () => {
    console.log("app rodando")
})