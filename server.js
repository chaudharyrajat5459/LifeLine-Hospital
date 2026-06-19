const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});



app.post("/add-patient", (req, res) => {
    const {
        name,
        age,
        gender,
        dob,
        phone,
        address,
        disease
    } = req.body;
    const patientData =
`
Patient Name : ${name}
Age          : ${age}
Gender       : ${gender}
DOB          : ${dob}
Phone        : ${phone}
Address      : ${address}
Disease      : ${disease}
`;
    fs.appendFile(
        "patient_registry.txt",
        patientData,
        (err) => {
            if(err){
                return res.send("Error Saving Data");
            }
            res.send(`
                <h1>
                    Patient Registered Successfully
                </h1>
                <a href="/">
                    Add Another Patient
                </a>
                <br><br>
                <a href="/patients">
                    View Patients
                </a>
            `);
        }
    );
});



app.get("/patients", (req, res) => {
    fs.readFile(
        "patient_registry.txt",
        "utf8",
        (err,data) => {
            if(err){
                return res.send("Error Reading File");
            }
            res.send(`
            <html>
            <head>
            <title>Patient Records</title>
            <style>
            body{
                background:#f4f8fb;
                font-family:Segoe UI;
                padding:40px;
            }
            h1{
                text-align:center;
                color:#023e8a;
            }
            .box{
                background:white;
                max-width:900px;
                margin:auto;
                padding:25px;
                border-radius:15px;
                box-shadow:0 5px 20px rgba(0,0,0,.15);
            }
            pre{
                white-space:pre-wrap;
                font-size:15px;
            }
            a{
                display:block;
                text-align:center;
                margin-top:20px;
                text-decoration:none;
                color:#0077b6;
                font-weight:bold;
            }
            </style>
            </head>
            <body>
                <h1>Hospital Patient Records</h1>
                <div class="box">
                    <pre>${data}</pre>
                    <a href="/">
                        Back To Admission Form
                    </a>
                </div>
            </body>
            </html>
            `);
        }
    );
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
