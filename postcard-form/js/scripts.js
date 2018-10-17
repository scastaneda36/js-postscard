
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateZipInput= $("input#cityStateZip").val();

    $(".yourName").text(yourNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".cityStateZip").text(cityStateZipInput);

    $("#postCard").show();

    event.preventDefault();
  });
});
