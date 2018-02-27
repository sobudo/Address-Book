//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.country = country;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " " + this.street + " " + this.city + " " + this.country;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFirstName = $("input#new-street").val();
    var inputtedLastName = $("input#new-city").val();
    var inputtedLastName = $("input#new-country").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedCountry);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".first-name").text(newContact.street);
      $(".last-name").text(newContact.city);
      $(".last-name").text(newContact.country);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-country").val("");
  });
});
