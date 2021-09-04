class ImageInfo {
  onClose = null;
  data = [];

  constructor({ initialData, onClose }) {
    const main = document.querySelector("main");
    this.$imageInfo = document.createElement("section");
    this.$imageInfo.className = "imageInfo";

    this.data = initialData;
    this.onClose = onClose;

    this.$imageInfo.addEventListener("click", (e) => {
      console.log("모달 밖 클릭");
      if (e.target.className === "imageInfo") {
        this.onClose();
      }
    });

    main.appendChild(this.$imageInfo);
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.loading = nextData.loading;
    this.render();
  }

  render() {
    if (!this.loading && this.data.visible) {
      this.$imageInfo.style.display = "block";

      const { name, url, temperament, origin } = this.data.data;

      this.$imageInfo.innerHTML = `
          <div class="overlay"></div>
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <button class="close">❌</button>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <p>출생: ${origin}</p>
              <p>성격: ${temperament}</p>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
