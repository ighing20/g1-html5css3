var data = "<clientes><cliente><nombre>Juan</nombre><direccion>Lima</direccion><telefono>99999</telefono></cliente></clientes>";
console.log(data);
function loadDoc(e) {
    const file = e.target.files[0];
  
    if (!file) {
      throw new Error("Seleccione Archivo XML");
      alert("Seleccione un Archivo XML");
      return false;
    }
  
    readDoc(file)
      .then(parseDoc)
      .then(showDocInTable)
      .catch(onError);
  }
  
  function readDoc(file) {
    const reader = new FileReader();
  
    return new Promise(ok => {
      reader.readAsText(file);
      reader.onload = function() {
        ok(reader.result);
      };
    });
  }
  
  function parseDoc(rawXML) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(rawXML, "text/html");
    return xml;
  }
  
  function showDocInTable(xml) {
    const table = document.querySelector("#bookTable > tbody");
    const datasource = xml.querySelector("bookstore");
    const books = datasource.querySelectorAll("book");
  
    table.removeChild(table.children[0]);
  
    Array.from(books).map((book, i) => {
      const tr = document.createElement("tr");
      const nombre = tagToData(book.querySelector("nombre"));
      const direccion = tagToData(book.querySelector("direccion"));
      const telefono = tagToData(book.querySelector("telefono"));
  
      tr.append(nombre,direccion, telefono);
      table.appendChild(tr);
    });
  }
  
  function tagToData(tag) {
    const td = document.createElement("td");
    td.textContent = tag.textContent;
    return td;
  }
  
  function onError(reason) {
    console.error(reason);
  }
  