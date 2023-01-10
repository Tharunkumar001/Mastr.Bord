// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "./Middleware/connectDb"
import Creation from "./Models/creationModal";

const classCreation = async (req, res) => {
    console.log(req.body)
    if(req.method == "POST"){
        const ClassCreationForm = new Creation({
            count: req.body.count,
            dept: req.body.dept, 
            startRno: req.body.startRno, 
            section: req.body.section, 
            yearOfStudy: req.body.yearOfStudy, 
            oddOrEven: req.body.oddOrEven,
            passedOut: req.body.passedOut
        });

        const formCreation = await ClassCreationForm.save();
        res.status(200).send(formCreation);
    }
}

export default connectDB(classCreation);