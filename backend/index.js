import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
/* Middlewares */
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded())
app.use(cors())
/* Middlewares */

const PORT = 8000

mongoose.connect("mongodb+srv://gtpndn:XSznSO4LW6aLx6M3@employee-ms0.znjygpv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Ya Database Connected")
    })
    .catch((error) => {
        console.log("Ya Error DB Connection", error.message)
    });

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    }
});

const User = mongoose.model('user', userSchema);

//Routes
app.get("/", (req, res) => {
    /* res.send("My API register") */
    /* res.send('ok') */
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if the email is in a valid format
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    User.findOne({ email: email })
        .exec()
        .then((user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Log in Successfully", user: user });
                } else {
                    res.send({ message: "Password didn't match" });
                }
            } else {
                res.send({ message: "User is not registered" });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "An error occurred while logging in.", error: err });
        });
});

app.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            // User with the same email already exists
            return res.status(400).json({ message: "Email already registered." });
        }

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();

        // User successfully registered
        res.status(200).json({ message: "Successfully registered! You can log in now." });
    } catch (error) {
        // Error occurred while querying the database or saving the user
        res.status(500).json({ message: "An error occurred while registering the user.", error });
    }
});


app.listen(PORT, () => {
    console.log("Backend started at port", PORT)
})