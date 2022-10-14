//exerciseOption getting from RapidApi
//key in in .env file
export const exerciseOptions = {
  method: "GET",
  // url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
  headers: {
    "X-RapidAPI-Key": "b0f477993dmsh21ab40918948518p16575fjsn91f4cd432178",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

//fetching API
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
