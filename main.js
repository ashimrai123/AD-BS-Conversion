document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#adDate", {
    dateFormat: "Y-m-d",
    // You can customize options as per your requirements
  });

  // Convert selected date to Nepali date for "adDate"
  var adDateInput = document.getElementById("adDate");
  var convertedBsDateOutput = document.getElementById("convertedBsDate"); // New output field
  var bsDateInput = document.getElementById("bsDate");
  var convertedAdDateOutput = document.getElementById("convertedAdDate"); // New output field

  adDateInput.addEventListener("change", function () {
    var selectedADDate = adDateInput.value;
    var bsDate = NepaliFunctions.AD2BS(selectedADDate, "YYYY-MM-DD", "YYYY-MM-DD");

    // Display converted BS date in the new output input box
    convertedBsDateOutput.value = bsDate;

    // Log information to the console
    console.log("Selected AD Date:", selectedADDate);
    console.log("Converted BS Date:", bsDate);


    
  });

 // Assuming selectedBSDate is in the format { bs: 'YYYY-MM-DD', ad: 'YYYY-MM-DD', object: { year: ..., month: ..., day: ... } }

 bsDateInput.nepaliDatePicker({
  onChange: function (selectedBSDate) {
    console.log("Selected BS Date (before conversion):", selectedBSDate);

    // Use the object property directly for BS2AD conversion
    var adDate = NepaliFunctions.BS2AD(selectedBSDate.object, "YYYY-MM-DD");

    console.log("Converted AD Date (raw):", adDate);
    console.log("Year:", adDate.year);
    console.log("Month:", adDate.month);
    console.log("Day:", adDate.day);

    // Format the AD Date for display
    var formattedADDate = adDate.year + "-" + adDate.month + "-" + adDate.day;
    console.log("Formatted AD Date:", formattedADDate);

    convertedAdDateOutput.value = formattedADDate;
  },
});

  
});
