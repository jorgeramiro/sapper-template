function viewsArrayInput() {
  var arrayInput = new Array();
  var inputsValues = document.getElementsByClassName("datoInput");
  var namesValues = [];
  namesValues = [].map.call(inputsValues, function (dataInput) {
    arrayInput.push(dataInput.value);
  });
  arrayInput.forEach(function (inputsValuesData, index) {
    console.log(
      "EL DATO Nro : " + index + " INTRODUCIDO ES : " + inputsValuesData
    );
  });
}
