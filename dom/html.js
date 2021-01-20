export default (htmlString) => {
  let template = document.createElement("template");
  template.innerHTML = htmlString.replace(/>\s+|\s+</g, (m) => m.trim());
  return template.content.firstChild;
};
