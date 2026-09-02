const digitalArtworks = [
  {
    id: 1,
    categories: ["illustration"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_01.PNG"
  },

  {
    id: 2,
    categories: ["illustration"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_02.jpg"
  },

  {
    id: 3,
    categories: ["album"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_03.jpg"
  },

  {
    id: 4,
    categories: ["illustration"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_04.jpg"
  },

  {
    id: 5,
    categories: ["experimental"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_05.jpg"
  },

  {
    id: 6,
    categories: ["prints"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_06.jpg"
  },

  {
    id: 7,
    categories: ["illustration"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_07.jpg"
  },

  {
    id: 8,
    categories: ["experimental", "illustration"],
    tool: "CLIP STUDIO PAINT",
    type: "image",
    image: "assets/digital-art/ARTWORK_08.png"
  },

  {
    id: 9,
    categories: ["illustration"],
    tool: "ILLUSTRATOR",
    type: "image",
    image: "assets/digital-art/ARTWORK_09.png"
  },

  {
    id: 10,
    categories: ["experimental"],
    tool: "PROCREATE",
    type: "video",
    image: "assets/digital-art/ARTWORK_10.MP4"
  },

  {
    id: 11,
    categories: ["illustration", "experimental"],
    tool: "PROCREATE / PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_11.jpg"
  },

  {
    id: 12,
    categories: ["illustration"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_12.jpg"
  },

  {
    id: 13,
    categories: ["prints"],
    tool: "ILLUSTRATOR",
    type: "image",
    image: "assets/digital-art/ARTWORK_13.png"
  },

  {
    id: 14,
    categories: ["album", "experimental"],
    tool: "PROCREATE / PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_14.jpg"
  },

  {
    id: 15,
    categories: ["illustration"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_15.jpg"
  },

  {
    id: 16,
    categories: ["prints"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_16.png"
  },

  {
    id: "16B",
    categories: ["prints"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_16_1.png"
  },

  {
    id: 17,
    categories: ["illustration"],
    tool: "CLIP STUDIO PAINT",
    type: "image",
    image: "assets/digital-art/ARTWORK_17.png"
  },

  {
    id: 18,
    categories: ["experimental"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_18.jpg"
  },

  {
    id: 19,
    categories: ["prints"],
    tool: "PHOTOSHOP",
    type: "image",
    image: "assets/digital-art/ARTWORK_19.png"
  },

  {
    id: 20,
    categories: ["illustration"],
    tool: "PROCREATE",
    type: "image",
    image: "assets/digital-art/ARTWORK_20.jpg"
  }
];


/* =========================
   DIGITAL ART ELEMENTS
========================= */

const artList = document.getElementById("artList");
const artPreviewImage = document.getElementById("artPreviewImage");
const filterButtons = document.querySelectorAll(".filter-btn");
const artPreviewVideo = document.getElementById("artPreviewVideo");
const previewPlaceholder = document.getElementById("previewPlaceholder");

const zoomViewer = document.getElementById("zoomViewer");
const zoomImage = document.getElementById("zoomImage");
const zoomVideo = document.getElementById("zoomVideo");
const zoomClose = document.getElementById("zoomClose");

function showPreview(work) {

  if (work.type === "video") {

    artPreviewImage.style.display = "none";

    artPreviewVideo.style.display = "block";
    artPreviewVideo.src = work.image;

    artPreviewVideo.currentTime = 0;
    artPreviewVideo.play();

  } else {

    artPreviewVideo.pause();
    artPreviewVideo.removeAttribute("src");
    artPreviewVideo.style.display = "none";

    artPreviewImage.style.display = "block";
    artPreviewImage.src = work.image;
  }

  previewPlaceholder.dataset.currentId = work.id;
}

function openZoom(work) {

  zoomViewer.classList.add("visible");

  if (work.type === "video") {

    zoomImage.style.display = "none";

    zoomVideo.style.display = "block";
    zoomVideo.src = work.image;

    zoomVideo.currentTime = 0;
    zoomVideo.play();

  } else {

    zoomVideo.pause();
    zoomVideo.removeAttribute("src");
    zoomVideo.style.display = "none";

    zoomImage.style.display = "block";
    zoomImage.src = work.image;

  }

}

/* =========================
   CREATE ART LIST
========================= */

function renderArtworks(filter = "all") {
  artList.innerHTML = "";

  const filteredWorks = digitalArtworks.filter(work => {
    return filter === "all" || work.categories.includes(filter);
  });


  filteredWorks.forEach((work, index) => {
    const button = document.createElement("button");

    button.classList.add("art-item");

    if (index === 0) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <span class="art-number">
        ${String(work.id).padStart(2, "0")}
      </span>

      <span class="art-info">
        <span class="art-tool">${work.tool}</span>
      </span>

      <span class="art-arrow">↗</span>
    `;


    button.addEventListener("mouseenter", () => {
      document.querySelectorAll(".art-item").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      showPreview(work);
    });
    button.addEventListener("click", () => {

  // MOBILE
  if (window.innerWidth <= 700) {

    openZoom(work);
    return;

  }

  // DESKTOP
  document.querySelectorAll(".art-item").forEach(item => {
    item.classList.remove("active");
  });

  button.classList.add("active");

  showPreview(work);

});


    artList.appendChild(button);
  });


  /* SHOW FIRST WORK OF CURRENT FILTER */

if (filteredWorks.length > 0) {
  showPreview(filteredWorks[0]);
} else {
  artPreviewImage.style.display = "none";

  artPreviewVideo.pause();
  artPreviewVideo.style.display = "none";
}
}

/* =========================
   FILTER BUTTONS
========================= */

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    renderArtworks(filter);
  });
});

/* =========================
   FULLSCREEN ZOOM
========================= */

previewPlaceholder.addEventListener("click", () => {

  const currentId = previewPlaceholder.dataset.currentId;

  const work = digitalArtworks.find(item => {
    return String(item.id) === String(currentId);
  });

  if (!work) return;

  openZoom(work);

});


function closeZoom() {

  zoomViewer.classList.remove("visible");

  zoomVideo.pause();
  zoomVideo.removeAttribute("src");

}


zoomClose.addEventListener("click", closeZoom);


zoomViewer.addEventListener("click", event => {

  if (event.target === zoomViewer) {
    closeZoom();
  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeZoom();
  }

});
renderArtworks();