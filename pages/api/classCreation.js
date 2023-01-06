// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "./Middleware/connectDb"

function classCreation(req, res) {
    if(req.method == "GET"){
        res.status(200).json({ name: 'John Doe' })
    }
}

export default connectDB(classCreation);