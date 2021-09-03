const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  // 고양이 이름, 종 검색 api
  fetchCats: async (keyword) => {
    try {
      const data = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      return data.json();
    } catch (err) {
      console.log(err);
    }
  },
  // 고양이 상세정보
  fetchCat: async (id) => {
    try {
      const data = await fetch(`${API_ENDPOINT}/api/cat/${id}`);
      return data.json();
    } catch (err) {
      console.log(err);
    }
  },
  고양이 랜덤 검색 api
  fetchRandomCats: async () => {
    try {
      const data = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      console.log(data);
      return data.json();
    } catch (err) {
      console.log(err);
    }
  },
};
