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
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const response = await notion.pages.create({
            parent: { database_id: dataBaseId},
            properties:{
                Username: {
                    title: [
                        {
                            text: {
                                content: userName
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
                },
                "Password": {
                    rich_text: [
                        {
                            text: {
                                content: password
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