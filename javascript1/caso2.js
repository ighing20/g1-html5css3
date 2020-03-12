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
    const table = document.querySelector("#tablaClientes > tbody");
    const datasource = xml.querySelector("clientes");
    const clientes = datasource.querySelectorAll("cliente");
  
    table.removeChild(table.children[0]);
  
    Array.from(clientes).map((cliente, i) => {
      const tr = document.createElement("tr");
      const nombre = tagToData(cliente.querySelector("nombre"));
      const direccion = tagToData(cliente.querySelector("direccion"));
      const telefono = tagToData(cliente.querySelector("telefono"));
  
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
  