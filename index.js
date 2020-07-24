import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import compression from "compression";

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Compress request and response
app.use(compression());


app.options('*', cors());

app.get("/health", async (req, res) => {
      res.status(200).send("success");
});


app.listen(process.env.PORT, () => {
  console.log(
    `[🚀] Database and Application ready to accept connections on ${process.env.PORT}`
  );
});