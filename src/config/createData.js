import axios from "axios";

const createData = async (type, body) => {
    console.log(type);
  const result = await axios.post(
    `https://ment-stud.herokuapp.com/${type}`,
    body
  );
  return result;
};

export default createData;