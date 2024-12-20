import axios from "axios";

const mangaTop = async (page) => {
  try {
    const fetchData = await axios.get(
      `https://api.jikan.moe/v4/top/manga?page=${page}`
    );
    console.log("run fetch manga");

    return fetchData.data;
  } catch (err) {
    throw new Error("fail get api data: ", err);
  }
};

export default mangaTop;
