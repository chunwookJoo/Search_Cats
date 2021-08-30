class SearchInput {
  data = [];
  onSearch = null;
  searched_words = [];
  keyword = "";

  constructor({ $target, onSearch, onRandomSearch }) {
    // 헤더 생성
    const header = document.createElement("header");

    // SearchWrapper 생성
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "searchWrapper";

    // SearchInput 생성
    this.$searchInput = document.createElement("input");
    this.$searchInput.className = "searchInput";
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    // SearchWords 생성
    this.$searchedWords = document.createElement("div");

    // Toggle 버튼 생성
    this.toggleBack = document.createElement("div");
    this.toggleBack.className = "toggle_B";
    this.toggleBtn = document.createElement("button");
    this.toggleBtn.className = "toggleBtn";
    this.toggleBtn.innerText = "toggle";
    this.toggleBtn.addEventListener("click", (e) => {
      const toggleBtn = e.target;
      toggleBtn.classList.toggle("clicked");
      this.changeTheme(e);
    });

    // Random 버튼 생성 및 이벤트 리스너 등록
    this.randomBtn = document.createElement("button");
    this.randomBtn.className = "randomBtn";
    this.randomBtn.innerText = "Generate";
    this.randomBtn.addEventListener("click", () => onRandomSearch());

    this.onSearch = onSearch;

    this.toggleBack.appendChild(this.toggleBtn);
    header.appendChild(this.toggleBack);

    searchWrapper.appendChild(this.$searchInput);
    //searchWrapper.appendChild(this.randomBtn);

    header.appendChild(searchWrapper);
    header.appendChild(this.$searchedWords);
    $target.appendChild(header);

    //document.body.appendChild(toggleBtn);

    //$target.appendChild($searchInput);
  }

  // RandomSearch 함수 정의
  onRandomSearch() {}
  // 야간모드 변경 Toggle
  changeTheme(e) {
    const body = document.querySelector("body");
    const toggleBtn = document.querySelector(".toggleBtn");

    if (e.target) {
      body.style.transition = "0.5s";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.toggle("light-mode");
        toggleBtn.classList.toggle("dark");
        console.log("dark");
      } else {
        body.classList.toggle("dark-mode");
        toggleBtn.classList.toggle("light");
        console.log("light");
      }
    }
  }
  render() {}
}
