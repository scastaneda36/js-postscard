
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateZipInput= $("input#cityStateZip").val();

    $(".yourName").append(yourNameInput);
    $(".streetAddress").append(streetAddressInput);
    $(".cityStateZip").append(cityStateZipInput);

    $("#postcard").show();

    event.preventDefault();
  });
});
