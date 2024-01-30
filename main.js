document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#adDate", {
      dateFormat: "Y-m-d",
      // You can customize options as per your requirements
    });
  
    // Convert selected date to Nepali date for "adDate"
    var adDateInput = document.getElementById("adDate");
    var bsDateOutput = document.getElementById("bsDate");
  
    adDateInput.addEventListener("change", function () {
      var selectedADDate = adDateInput.value;
      var bsDate = NepaliFunctions.AD2BS(selectedADDate, "YYYY-MM-DD", "YYYY-MM-DD");
      
      // Display converted BS date in the output input box
      bsDateOutput.value = bsDate;
    });
  
    // Initialize Nepali Datepicker for "bsDate"
    var bsDateOutput = document.getElementById("bsDate");
    bsDateOutput.nepaliDatePicker({});
});