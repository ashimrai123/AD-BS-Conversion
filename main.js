document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#adDate", {
    dateFormat: "Y-m-d",
    // You can customize options as per your requirements
  });

  var adDateInput = document.getElementById("adDate");
  var bsDateInput = document.getElementById("bsDate"); // Use the same input field for BS Date

  adDateInput.addEventListener("change", function () {
    var selectedADDate = adDateInput.value;
    var bsDate = NepaliFunctions.AD2BS(selectedADDate, "YYYY-MM-DD", "YYYY-MM-DD");

    // Display converted BS date in the same input box
    bsDateInput.value = bsDate;

    // Log information to the console
    console.log("Selected AD Date:", selectedADDate);
    console.log("Converted BS Date:", bsDate);
  });

  bsDateInput.nepaliDatePicker({
    onChange: function (selectedBSDate) {
      console.log("Selected BS Date (before conversion):", selectedBSDate);

      var adDate = NepaliFunctions.BS2AD(selectedBSDate.object, "YYYY-MM-DD");

      console.log("Converted AD Date (raw):", adDate);
      console.log("Year:", adDate.year);
      console.log("Month:", adDate.month);
      console.log("Day:", adDate.day);

      var formattedADDate = adDate.year + "-" + adDate.month + "-" + adDate.day;
      console.log("Formatted AD Date:", formattedADDate);

      adDateInput.value = formattedADDate; // Update the AD Date input field
    },
  });
});
