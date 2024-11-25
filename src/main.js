import $ from "jquery";
import "./style.css";

const apiUrl = import.meta.env.VITE_API_URL;
const apiUsername = import.meta.env.VITE_API_USERNAME;
const dataUrl = import.meta.env.VITE_DATA_URL;
let country = import.meta.env.VITE_DEFAULT_COUNTRY;
let locale = import.meta.env.VITE_DEFAULT_LOCALE;

const inputBox = $(".wrapper .item");
const label = $(".item label");
const imageSource = $(".button img").attr("src");
let a,
  b,
  c = 0; // AND Logic units

if (navigator.geolocation) {
  // Gets country from location coordinates API
  navigator.geolocation.getCurrentPosition((pos) => {
    $.getJSON(
      apiUrl,
      {
        lat: pos.coords.latitude.toFixed(4),
        lng: pos.coords.longitude.toFixed(4),
        type: "JSON",
        username: apiUsername,
      },
      (res) => {
        country = res.countryName;
        $.getJSON(
          dataUrl,
          {
            type: "JSON",
          },
          (data) => {
            $.each(data, function (index, value) {
              // Above line gets country and currency symbol
              if (country === value.name) {
                $(".currency").text(value.currency.symbol);
                locale = `${value.language.code}-${value.code}`;
              }
              return;
            });
          }
        );
      }
    );
  });
}

function restore() {
  // Resets label effect
  label.css({
    "text-transform": "initial",
    "font-family": "Junge, sans-serif",
    "font-size": "16px",
    "font-weight": "500",
    "line-height": "initial",
    "letter-spacing": "-.5px",
    position: "absolute",
    top: "10px",
    color: "initial",
  });
}

inputBox.on("click", function (e) {
  // Label effect
  e.stopPropagation(); // Nullifies the .not() method
  restore();
  $(this).children(".subitem").children("label").css({
    "text-transform": "uppercase",
    "font-family": "Recursive, sans-serif",
    "font-size": ".65rem",
    "font-weight": "600",
    "line-height": ".65rem",
    "letter-spacing": "1px",
    top: "3px",
    color: "var(--secondary)",
  });
  setTimeout(() => {
    $(this).children(".subitem").children("label").css("position", "relative");
  }, 120);
});

$(document)
  .not(inputBox)
  .click(function () {
    // Resets label effect
    restore();
  });

function shake(target) {
  // Log animation
  target.css("animation", "shake 1s ease-in-out alternate");
  setTimeout(() => {
    target.css("animation", "unset");
  }, 1005);
}

$(".button").click(() => {
  // Glow effect
  $(".card").css("box-shadow", "var(--cardShadow), var(--glowShadow)");
  setTimeout(() => {
    $(".card").css("box-shadow", "var(--cardShadow)");
  }, 800);
});

function calculate() {
  if ($("#bill").val() === "") {
    // Validating bill input
    a = 0;
    $("#logBill").html("Enter a value");
    shake($("#logBill"));
  } else if ($("#bill").val() === "0") {
    a = 0;
    $("#logBill").html("Don't expect an answer");
    shake($("#logBill"));
  } else if (+$("#bill").val() < 0) {
    a = 0;
    $("#logBill").html("No debts here");
    shake($("#logBill"));
  } else {
    a = 1;
    $("#logBill").html("");
  }
  if ($("#tip").val() === "") {
    // Validating tip % input
    b = 0;
    $("#logTip").html("Enter a value");
    shake($("#logTip"));
  } else if ($("#tip").val() === "0") {
    b = 0;
    $("#logTip").html("Don't expect an answer");
    shake($("#logTip"));
  } else if (+$("#tip").val() < 0) {
    b = 0;
    $("#logTip").html("No debts here");
    shake($("#logTip"));
  } else {
    b = 1;
    $("#logTip").html("");
  }
  if ($("#nop").val() === "") {
    // Validating No. of people input
    c = 0;
    $("#logNOP").html("Enter a value");
    shake($("#logNOP"));
  } else if ($("#nop").val() === "0") {
    c = 0;
    $("#logNOP").html("Don't expect an answer");
    shake($("#logNOP"));
  } else if (+$("#nop").val() < 0) {
    c = 0;
    $("#logNOP").html("No debts here");
    shake($("#logNOP"));
  } else if (+$("#nop").val() - parseInt(+$("#nop").val()) !== 0) {
    c = 0;
    $("#logNOP").html("Invalid");
    shake($("#logNOP"));
  } else {
    c = 1;
    $("#logNOP").html("");
  }

  var tip = (
      ($("#bill").val() * ($("#tip").val() / 100)) /
      $("#nop").val()
    ).toFixed(2), // Variables for the answers
    total = (
      ($("#bill").val() * ($("#tip").val() / 100 + 1)) /
      $("#nop").val()
    ).toFixed(2);

  var formatNumber = new Intl.NumberFormat(locale, {
    style: "decimal",
    notation: "compact",
    minimumFractionDigits: 2,
  });

  function animateTip(start, value) {
    if (start >= value) {
      // Do nothing
    } else {
      const ansFx = setInterval(() => {
        start += 0.01;
        $("#tipAmount").html(formatNumber.format(start));
        if (start + 0.01 >= value) {
          clearInterval(ansFx);
          $("#tipAmount").html(formatNumber.format(value));
        }
      }, 1);
      $(".skip").click(() => {
        // Interrupts the effect
        clearInterval(ansFx);
        $("#tipAmount").html(formatNumber.format(tip)); // Displays final answer
      });
    }
  }

  const arr = ["", ".", "..", "..."]; // For Calculating text effect
  let count = 0;

  function animateTotal(start, value) {
    if (start >= value) {
      // Do nothing
    } else {
      $(".button img").hide(); // Hides img
      $(".button").text("Calculating").off("click", calculate); // Displays Calculating text & prevents multiple clicks
      $(".skip").css("display", "flex");
      setTimeout(() => {
        // Displays the skip button
        $(".skip").css({ filter: "opacity(1)" });
      }, 3000);
      const textFx = setInterval(() => {
        // Calculating text effect
        count++;
        if (count === 4) {
          count = 0;
        }
        $(".button").text("Calculating" + arr[count]);
      }, 1000);
      const ansFx = setInterval(() => {
        // Answer generating effect
        start += 0.05;
        $("#total").html(formatNumber.format(start));
        if (start + 0.01 >= value) {
          // Check if its answer is gotten
          clearInterval(ansFx); // Ends the generating effect
          clearInterval(textFx); // Ends the text effect
          $("#total").html(formatNumber.format(value));
          $(".button").text("").append("<img>").click(calculate); // Creates the arrow-up image
          $(".button img").addClass("arrow").attr({
            src: imageSource,
            alt: "arrow-up",
          });
          $(".skip").css({ filter: "opacity(0)" }); // Hides skip button
          setTimeout(() => {
            $(".skip").css("display", "none");
          }, 120);
        }
      }, 1);
      $(".skip").click(() => {
        // Interrupts the effects
        clearInterval(ansFx);
        clearInterval(textFx);
        $(".button").text("").append("<img>").click(calculate); // Fixes button
        $(".button img").addClass("arrow").attr({
          src: imageSource,
          alt: "arrow-up",
        });
        $(".skip").css({ filter: "opacity(0)" });
        setTimeout(() => {
          $(".skip").css("display", "none");
        }, 120);
        $("#total").html(formatNumber.format(total)); // Displays final answer
      });
    }
  }

  function clearScreen() {
    $("#tipAmount").html("0.00");
    $("#total").html("0.00");
  }

  if (a && b && c) {
    // AND Logic
    clearScreen();
    animateTip(parseFloat($("#tipAmount").text()), tip);
    animateTotal(parseFloat($("#total").text()), total);
  } else {
    clearScreen();
  }
}

$(".button").click(calculate); // Triggers function
$(document).keypress(function (e) {
  if (e.key === "Enter") {
    calculate();
  }
});
