const getUserSelectedText = () => {
  return window.getSelection().toString();
}

window.onscroll = () => {
  if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    console.log("Bottom of page reached!");
  }
}

