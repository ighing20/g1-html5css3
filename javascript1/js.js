function mostrar(form) {
  var inputs = form.elements;
  var xmldata = ['<cliente>'];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].name) {
      xmldata.push("<", inputs[i].name, ">");
      xmldata.push(inputs[i].value);      
      xmldata.push("</", inputs[i].name, ">");
    }
  }
  xmldata.push('</cliente>');
  alert(xmldata.join(""));
}