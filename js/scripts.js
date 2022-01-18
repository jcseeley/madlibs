$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let i = 0;
    const formInputs = [$("input#person1").val(), $("input#person2").val(), $("input#animal").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#noun").val()];
    const typeInput = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    formInputs.forEach(function(input) {
      $(typeInput[i]).text(input);
      i += 1;
    });
    $("#story").show();
  });
});