import axios from "axios";

const detailsAnime = async (id) => {
  try {
    const fetchData = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/full`
    );
    console.log("run fetch detail anime");

    return fetchData.data;
  } catch (err) {
    throw new Error("fail get api data: ", err);
  }
};

export default detailsAnime;
