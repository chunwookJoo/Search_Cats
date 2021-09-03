class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ initialData, onClose }) {
    const main = document.querySelector("main");
    this.$imageInfo = document.createElement("section");
    this.$imageInfo.className = "imageInfo";
    main.appendChild(this.$imageInfo);

    this.data = initialData;
    this.onClose = onClose;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
