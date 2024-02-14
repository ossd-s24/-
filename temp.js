let toggle = false;

const urls = [
  "https://www.youtube.com/embed/eRXE8Aebp7s",
  "https://www.youtube.com/embed/k53tOifqAAY",
  "https://www.youtube.com/embed/wyv7m7vUhx8?si=f_0lNuLVCmqsYWha",
  "https://www.youtube.com/embed/OTWYCHNTA3A?si=ubeMZJYm_buvBn12",
  "https://www.youtube.com/embed/TzpAYv0AP68?si=zMeu7qC8TaK1MHVd",
  "https://www.youtube.com/embed/IP-27zXA7_E?si=-VVa8KQgAUWRdUGH",
];
let currentIndex = 0;

function modifyPageLayout() {
  const body = document.body;
  const originalContent = body.innerHTML;

  const wrapperDiv = document.createElement("div");
  wrapperDiv.style.overflow = "scroll";
  if (toggle) {
    wrapperDiv.style.width = "50%";
    wrapperDiv.style.height = "100%";
    wrapperDiv.style.float = "left";
  } else {
    wrapperDiv.style.width = "100%";
    wrapperDiv.style.height = "50%";
  }
  wrapperDiv.innerHTML = originalContent;
  body.innerHTML = "";
  body.appendChild(wrapperDiv);

  const newDiv = document.createElement("div");
  newDiv.style.overflow = "scroll";
  if (toggle) {
    newDiv.style.width = "50%";
    newDiv.style.height = "100%";
    newDiv.style.float = "right";
  } else {
    newDiv.style.width = "100%";
    newDiv.style.height = "50%";
    wrapperDiv.style.float = "none";
  }

  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.src = urls[currentIndex];
  currentIndex = (currentIndex + 1) % urls.length;

  newDiv.appendChild(iframe);
  if (currentIndex == 1) {
  
  const textLinkContainer = document.createElement("div");
  textLinkContainer.style.textAlign = "center";
  newDiv.appendChild(textLinkContainer);

  const text = document.createElement("p");
  text.textContent = "Try this game by Google Play!";
  textLinkContainer.appendChild(text);

  const link = document.createElement("a");
  link.href =
    "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en_US&pli=1";
  link.textContent = "Click to visit";
  link.style.color = "#FFFFFF";
  link.style.fontSize = "2em";
  textLinkContainer.appendChild(link);
  newDiv.appendChild(textLinkContainer);
  }
  body.appendChild(newDiv);

  toggle = !toggle;
}

window.modifyPageLayout = modifyPageLayout;

modifyPageLayout();
