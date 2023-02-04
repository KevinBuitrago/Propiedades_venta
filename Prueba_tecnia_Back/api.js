import express from "express";
import fs from "fs";
const app = express();
const port = 5151;
let response;

app.use(express.json());

app.get("/api/list", (req, resp) => {
    fs.readFile("./Data/dataHomeSale.json", 'utf8', function (err, data) {
            resp.send(data);
    });
});

app.get("/api/detail/:id", (req, resp) => {
    let err;
    const nn = fs.readFileSync("./Data/dataDeatilHome.json", 'utf8', function (errr, data) {
        err = errr;
    });
    const dataH = JSON.parse(nn);
    let isId = false;
    if (!err) {
        for (const key in dataH) {
            if (dataH[key].id == req.params.id) {
                response = dataH[key];
                response.message = "";
                response.error = 0;
                isId = true;
            }
        }
    } else {
        response.error = 1;
    }

    if (!isId) {
        response.message = "No se encotro Data con el ID:" + req.params.id;
        response.error = 1;
    }

    resp.send(response);
});

app.listen(port, () => {
    console.log("estoy en ", port);
});