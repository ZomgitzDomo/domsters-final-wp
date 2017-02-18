function moveElement(elementID, finalX, finalY, interval) {
  let dist;
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;

  const elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = '0px';
  }
  if (!elem.style.top) {
    elem.style.top = '0px';
  }
  let xpos = parseInt(elem.style.left, 10);
  let ypos = parseInt(elem.style.top, 10);
  if (xpos === finalX && ypos === finalY) {
    return true;
  }
  if (xpos < finalX) {
    dist = Math.ceil((finalX - xpos) / 10);
    xpos += dist;
  }
  if (xpos > finalX) {
    dist = Math.ceil((xpos - finalX) / 10);
    xpos -= dist;
  }
  if (ypos < finalY) {
    dist = Math.ceil((finalY - ypos) / 10);
    ypos += dist;
  }
  if (ypos > finalY) {
    dist = Math.ceil((ypos - finalY) / 10);
    ypos -= dist;
  }
  elem.style.left = `${xpos}px`;
  elem.style.top = `${ypos}px`;

  const repeat = `moveElement('${elementID}',${finalX},${finalY},${interval})`;
  elem.movement = setTimeout(repeat, interval);
  return true;
}

function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('intro')) return false;
  const intro = document.getElementById('intro');
  const slideshow = document.createElement('div');
  slideshow.setAttribute('id', 'slideshow');
  const frame = document.createElement('img');
  // console.log(localDOMHome.template_url);
  // frame.setAttribute("src","img/frame.gif");
  frame.setAttribute('src', `${localDOMHome.template_url}/img/frame.gif`);
  frame.setAttribute('alt', '');
  frame.setAttribute('id', 'frame');
  slideshow.appendChild(frame);
  const preview = document.createElement('img');
  // preview.setAttribute("src","img/slideshow.gif");
  frame.setAttribute('src', `${localDOMHome.template_url}/img/slideshow.gif`);
  preview.setAttribute('alt', 'a glimpse of what awaits you');
  preview.setAttribute('id', 'preview');
  slideshow.appendChild(preview);
  insertAfter(slideshow, intro);
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i += 1) {
    links[i].onmouseover = function onmouseover() {
      const destination = this.getAttribute('href');
      // console.log(destination.indexOf("about"));
      // if (destination.indexOf("index.html") !== -1) {
      //   moveElement("preview",0,0,5);
      // }
      if (destination.indexOf('about') !== -1) {
        moveElement('preview', -150, 0, 5);
      }
      if (destination.indexOf('photos') !== -1) {
        moveElement('preview', -300, 0, 5);
      }
      if (destination.indexOf('live') !== -1) {
        moveElement('preview', -450, 0, 5);
      }
      if (destination.indexOf('contact') !== -1) {
        moveElement('preview', -600, 0, 5);
      }
    };
  }
  return true;
}

addLoadEvent(prepareSlideshow);
