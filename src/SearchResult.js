class SearchResult {
  $searchResult = null;
  loading = false;
  data = [];
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    const section = document.createElement("main");
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "searchResult";

    this.$searchResult.addEventListener("click", (e) => {
      console.log(e);
    });

    section.appendChild(this.$searchResult);
    $target.appendChild(section);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData.data;
    this.loading = nextData.loading;
    this.render();
  }

  render() {
    // 로딩 중 ...
    if (this.loading) {
      this.$searchResult.innerHTML = `
          <div>
            <img src="./src/img/loading.gif" alt="loading"></img>
          </div>
        `;
    }

    // 검색 결과가 없을 때.
    if (!this.loading && !this.data.length) {
      this.$searchResult.innerHTML = `
            <div>검색 결과가 없습니다.</div>
        `;
    }
    // 로딩이 끝나고 검색 결과가 있을 때.
    if (!this.loading && !!this.data.length) {
      this.$searchResult.innerHTML = this.data
        .map((cat) => {
          const { id, url, name } = cat;
          return `
                <article class="item"><img id=${id} src="${url}" alt="${name}"/></article>
            `;
        })
        .join("");
    }
  }
}
