const mongoose = require("mongoose");
const dotenv = require("dotenv");
const FoodCombo = require("./models/schema");

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const sampleFoodCombos = [
    {
        name: "Burger & Ice Cream",
        ingredients: ["Burger", "Ice Cream"],
        rating: 4,
        image: "/assets/weirdFoodCom/burger_ice_cream.png", 
    },
    {
        name: "Pizza & Banana",
        ingredients: ["Pizza", "Banana"],
        rating: 3,
        image: "/assets/weirdFoodCom/pizza_banana.jpg",
    },
    {
        name: "Fries & Chocolate",
        ingredients: ["Fries", "Chocolate"],
        rating: 5,
        image: "/assets/weirdFoodCom/fries_chocolate.png",
    },
    {
        name: "Popcorn & Ketchup",
        ingredients: ["Popcorn", "Ketchup"],
        rating: 2,
        image: "/assets/weirdFoodCom/popcorn_ketchup.png",
    }
];

FoodCombo.insertMany(sampleFoodCombos)
    .then(() => {
        console.log("Sample food combos added!");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
