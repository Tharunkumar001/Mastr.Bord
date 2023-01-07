import axios from "axios";
import ClassCreation from "../components/classCreation";

const ClassCrationFormSubmit = async({count, dept, startRno, section, yearOfStudy, oddOrEven,passedOut}) => {
    const body = {count, dept, startRno, section, yearOfStudy, oddOrEven,passedOut};

    console.log(body)
    const data = await axios.get("http://localhost:3000/api/classCreation");

}

export default ClassCrationFormSubmit;