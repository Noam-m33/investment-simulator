import * as functions from "firebase-functions";
import axios from "axios";
import cors = require("cors");

const corsHandler = cors({origin: true});

export const getCryptoPrices = functions
  .runWith({secrets: ["API_KEY"]})
  .https.onRequest((req, res) => {
    corsHandler(req, res, () => {
      const apikey = process.env.SECRET_NAME;
      const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH&CMC_PRO_API_KEY=${apikey}`;
      axios
        .get(url)
        .then((response) => {
          res.send(response);
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    });
  });
