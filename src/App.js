console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      // 고양이 검색
      onSearch: (keyword) => {
        // 로딩중
        this.setState({
          data: null,
          loading: true,
        });
        // 로딩 끝
        api.fetchCats(keyword).then(({ data }) =>
          this.setState({
            data,
            loading: false,
          })
        );
      },
      // 고양이 50마리 랜덤 출력
      onRandomSearch: () => {
        // 로딩중
        this.setState({
          data: null,
          loading: true,
        });
        // 로딩 끝
        api.fetchRandomCats().then(({ data }) =>
          this.setState({
            data,
            loading: false,
          })
        );
      },
    });

    // 검색 결과 화면
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (id) => {
        // 로딩중
        this.imageInfo.setState({
          loading: true,
        });
        // 로딩 끝
        api.fetchCat(id).then(({ data }) =>
          this.imageInfo.setState({
            visible: true,
            loading: false,
            data,
          })
        );
      },
    });

    this.imageInfo = new ImageInfo({
      initialData: {
        visible: false,
        data: null,
      },
      onClose: () => {
        this.imageInfo.setState({
          visible: false,
        });
      },
    });
  }
}
