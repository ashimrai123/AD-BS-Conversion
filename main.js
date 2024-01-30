document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#adDate", {
    dateFormat: "Y-m-d",
  });

  var adDateInput = document.getElementById("adDate");
  var bsDateInput = document.getElementById("bsDate"); 

  adDateInput.addEventListener("change", function () {
    var selectedADDate = adDateInput.value;
    var bsDate = NepaliFunctions.AD2BS(selectedADDate, "YYYY-MM-DD", "YYYY-MM-DD");

    // Display converted BS date in the same input box
    bsDateInput.value = bsDate;

 
  });

  bsDateInput.nepaliDatePicker({
    onChange: function (selectedBSDate) {

      var adDate = NepaliFunctions.BS2AD(selectedBSDate.object, "YYYY-MM-DD");

      var formattedADDate = adDate.year + "-" + adDate.month + "-" + adDate.day;
      console.log("Formatted AD Date:", formattedADDate);

      // Display converted AD date in the same input box
      adDateInput.value = formattedADDate; 
    },
  });
});
