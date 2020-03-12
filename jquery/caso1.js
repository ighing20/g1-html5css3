function mostrar(form) {
  var inputs = form.elements;
  var xmldata = ['<cliente>'];
  var telefono = $("#telefono").val();
  console.log(telefono);
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].name) {
      xmldata.push(`<${inputs[i].name}>`);
      xmldata.push(inputs[i].value);
      xmldata.push("</", inputs[i].name, ">");
    }
  }
  xmldata.push('</cliente>');
  return xmldata.join("");
  //alert(xmldata.join(""));
  //alert(xmldata);
}

$(document).ready(function () {
    
  $('#open').on('click', function () {
    var xmlRaw = mostrar(this.form);
    console.log(xmlRaw);
    $('#popup').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    $('.popup-overlay').height($(window).height());
    $('#contenido').text(`${xmlRaw}`);
    return false;
  });

  $('#close').on('click', function () {
    $('#popup').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
    return false;
  });
});