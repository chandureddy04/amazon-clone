const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/* eslint-disable no-alert, no-console */
const stripe = require("stripe")(
    "sk_test_51JSmoCSAV6IwmYLc7JUpK6SLx4Oc0E7tV4gB5jhBkn5UeWuqWMLKPzo2QrHlY5q0GCpVARFAQjkAdfQaoa5yjAbI00uykUUB5e",
);
/* eslint-disable no-alert, no-console */

const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> "+ total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "inr",
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

exports.api = functions.https.onRequest(app);
