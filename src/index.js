const helpers = require("./helpers")
const express = require("express")



const app = express()

const route = express.Router()

route.get("/:a/:b", (req, resp) => {
    const result = helpers.soma(Number(req.params.a), Number(req.params.b))

    resp.status(200).send({ result })
})
app.use(route)

app.listen(process.env.PORT || 3000 , () => {
    console.log("app rodando")
})