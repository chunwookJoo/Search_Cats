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
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    this.$searchInput.focus();

    // SearchWords 생성
    this.$searchedWords = document.createElement("div");

    // Toggle 버튼 생성
    this.toggleBack = document.createElement("div");
    this.toggleBack.className = "toggle_B";
    this.toggleBtn = document.createElement("button");
    this.toggleBtn.className = "toggleBtn";
    this.toggleBtn.innerText = "모드 변경";
    this.toggleBtn.addEventListener("click", (e) => {
      const toggleBtn = e.target;
      toggleBtn.classList.toggle("clicked");
      this.changeTheme(e);
    });

    // Random 버튼 생성 및 이벤트 리스너 등록
    const randomBack = document.createElement("div");
    randomBack.className = "random_B";

    this.randomBtn = document.createElement("button");
    this.randomBtn.className = "randomBtn";
    this.randomBtn.innerText = "Generate";
    this.randomBtn.addEventListener("click", () => onRandomSearch());

    this.onSearch = onSearch;

    this.toggleBack.appendChild(this.toggleBtn);
    header.appendChild(this.toggleBack);

    searchWrapper.appendChild(this.$searchInput);
    randomBack.appendChild(this.randomBtn);

    header.appendChild(searchWrapper);
    header.appendChild(randomBack);
    //header.appendChild(this.$searchedWords);
    $target.appendChild(header);

    this.$searchInput.addEventListener("keypress", (e) => {
      this.keyword = e.target.value;
      // 엔터가 눌리고
      if (e.keyCode === 13) {
        // 검색어가 있으면
        if (e.target.value) {
          onSearch(this.keyword);
          this.save_search_words(this.keyword);
        } else {
          alert("검색어를 입력하세요.");
        }
      }
    });
  }

  save_search_words(e) {
    // 검색어 저장
  }
  // 야간모드 변경 Toggle
  changeTheme(e) {
    const body = document.querySelector("body");
    const toggleBtn = document.querySelector(".toggleBtn");

    if (e.target) {
      body.style.transition = "0.5s";
      console.log(window.matchMedia);
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
