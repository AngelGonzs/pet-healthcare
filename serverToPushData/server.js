const express = require("express");
const {Client} = require("@notionhq/client");
const cors = require("cors")
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const port = 4000;
const host = "localhost"

const notion = new Client({auth: "secret_4wrJypFGF2S8ADBgdRO123faFUYAVliE24JFE5qUNRd"})
const dataBaseId = "40b88bc0a9e64222bec177feed6e9ab5";

app.post("/submitFormToNotion", jsonParser, async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    try {
        const response = await notion.pages.create({
            parent: { database_id: dataBaseId},
            properties:{
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                "Age": {
                    rich_text: [
                        {
                            text: {
                                content: age
                            }
                        }
                    ]
                },
                "Email": {
                    rich_text: [
                        {
                            text: {
                                content: email
                            }
                        }
                    ]
                }
            }
        })
        console.log(response);
        console.log("SUCCSES");
    } catch (error) {
        console.log(error);
    }
})



app.listen(port, host, () => {
    console.log("Starting proxy at " + host + ":" + port);
})