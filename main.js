var blur_elem = document.getElementById("cursor");
document.onmousemove = (evt) => {
    blur_elem.style.transform = `translate(${evt.clientX}px, ${evt.clientY}px)`;
  };