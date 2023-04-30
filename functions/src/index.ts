import * as functions from "firebase-functions";
import axios from "axios";
import cors = require("cors");

const corsHandler = cors({origin: true});

export const getCryptoPrices = functions
  .runWith({secrets: ["API_KEY"]})
  .https.onRequest((req, res) => {
    corsHandler(req, res, () => {
      const apikey = process.env.API_KEY;
      const url =
        "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH";
      axios
        .get<Response>(url, {
          headers: {
            "X-CMC_PRO_API_KEY": apikey,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          res.send(response.data);
        })
        .catch((error) => {
          functions.logger.error(error);
        });
    });
  });
