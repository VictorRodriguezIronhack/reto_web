import axios from "axios";

const getPhones = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/telefonos`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};

export { getPhones };
