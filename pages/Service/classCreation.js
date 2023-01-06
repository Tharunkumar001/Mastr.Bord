import axios from "axios";

export const classCrationFormSubmit = async({count, dept, startRno, section, yearOfStudy, oddOrEven,passedOut}) => {
    const body = {count, dept, startRno, section, yearOfStudy, oddOrEven,passedOut};

    console.log(body)
    const data = await axios.get("http://localhost:3000/api/classCreation");

}