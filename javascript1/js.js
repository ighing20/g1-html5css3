function mostrar(form) {
    var inputs = form.elements;
    for(var i=0; i < inputs.length; i++){
        alert(inputs[i].value);
    }
}