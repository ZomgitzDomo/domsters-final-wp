function stripeTables() {
  if (!document.getElementsByTagName) return false;
  const tables = document.getElementsByTagName('table');
  for (let i = 0; i < tables.length; i += 1) {
    let odd = false;
    const rows = tables[i].getElementsByTagName('tr');
    for (let j = 0; j < rows.length; j += 1) {
      if (odd === true) {
        addClass(rows[j], 'odd');
        odd = false;
      } else {
        odd = true;
      }
    }
  }
  return true;
}

function highlightRows() {
  if (!document.getElementsByTagName) return false;
  const rows = document.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].oldClassName = rows[i].className;
    rows[i].addEventListener('mouseover', addClass(this, 'highlight'));
    rows[i].addEventListener('mouseover', function mouseover() {
      this.className = this.oldClassName;
    });
  }
  return true;
}

function displayAbbreviations() {
  let definition;
  let key;
  if (
    !document.getElementsByTagName ||
    !document.createElement ||
    !document.createTextNode) { return false; }
  const abbreviations = document.getElementsByTagName('abbr');
  if (abbreviations.length < 1) return false;
  const defs = [];
  for (let i = 0; i < abbreviations.length; i += 1) {
    const currentAbbr = abbreviations[i];
    if (currentAbbr.childNodes.length < 1) { i += 1; }
    definition = currentAbbr.getAttribute('title');
    key = currentAbbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  const dList = document.createElement('dl');

  for (key in defs) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
      definition = defs[key];
      const dtitle = document.createElement('dt');
      const dTitleText = document.createTextNode(key);
      dtitle.appendChild(dTitleText);
      const dDesc = document.createElement('dd');
      const dDescText = document.createTextNode(definition);
      dDesc.appendChild(dDescText);
      dList.appendChild(dtitle);
      dList.appendChild(dDesc);
    }
  }
  if (dList.childNodes.length < 1) return false;
  const header = document.createElement('h3');
  const headerText = document.createTextNode('Abbreviations');
  header.appendChild(headerText);
  const container = document.getElementById('content');
  container.appendChild(header);
  container.appendChild(dList);
  return true;
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
