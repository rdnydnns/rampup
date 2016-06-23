const text = document.body.querySelector('#text');

text.onkeydown = () => {
  let last = text.value.charAt(text.value.length - 1);

  if (pickCase() === 'up') {
    let ul = last.toUpperCase();
    text.value = text.value.substr(0, text.value.length-1) + ul
  } else {
    let ll = last.toLowerCase();
    text.value = text.value.substr(0, text.value.length-1) + ll
  }
};

function pickCase() {
  const num = Math.floor(Math.random()*100);

  if (num >= 60) {
    return 'up';
  } else {
    return 'lo';
  }
}
