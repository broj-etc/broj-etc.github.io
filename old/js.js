$(document).ready(function () {
  // Variables, elements etc
  var rUrls = document.getElementsByClassName("redirectURL"); // Element for form redirect
  var body_bottom = document.getElementById("body_bottom"); // Element to define body bottom
  var top_button = document.getElementById("top_button"); // Button for page top scrolling

  // Check if element is in the viewport
  function isInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Execute a JavaScript when window is being scrolled
  window.onscroll = function () {
    top_buttonFunc();
    body_bottomFunc();
  };

  // Show button after scrolling 20px down otherwise hide
  function top_buttonFunc() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      top_button.style.display = "block";
    } else {
      top_button.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#top_button").click(function () {
    topFunction();
  });

  // Define location of the top_button
  // If body_bottom is visible in the viewport button is placed 10px on top of the bottom bar
  function body_bottomFunc() {
    if (isInViewport(body_bottom)) {
      top_button.style.position = "absolute";
      top_button.style.bottom = "auto";
      top_button.style.top = body_bottom.offsetTop - 35 + "px";
    } else {
      top_button.style.position = "fixed";
      top_button.style.bottom = "15px";
      top_button.style.top = "auto";
    }
  }

  // Load and place page content to the placeholders
  // Navigation bar
  $("#navbar_placeholder").load("assets/1-nav.html");

  // Content
  // Define site content usign domain's query string
  $("#content_placeholder").load("/pages/home.html", function () {
    $("#home").addClass("active");
    window.history.replaceState({ page: "home" }, "", "?home");
    // Page title
    document.title = document
      .getElementsByTagName("h10")[0]
      .innerHTML.toUpperCase();
  });

  // Bottom bar
  $("#bottom_bar_placeholder").load("assets/bottom_bar.html");

  // Footer
  $("#footer_placeholder").load("assets/footer.html");
});

$(window).on("popstate", function (event) {
  $("#" + window.history.state.page + "")[0].click();
});

document.addEventListener("click", async (event) => {
  if (
    // if you clicked on an A-nchor tag (link)
    event.target.tagName === "A" &&
    // and you're going to a page on this domain (like /desert)
    event.target.origin === location.origin
  ) {
    // don't ask the server for that resource!
    event.preventDefault();
    var page = event.target.id;
    if (event.target.classList.contains("home-id")) {
      page = "home";
    }
    $("#content_placeholder").load(
      "/pages/" + page + ".html",
      function (response, status, xhr) {
        if (status == "error") {
          $(".nav-link.active").removeClass("active");
          $("#content_placeholder").load("/pages/404.html");
        } else if (
          window.history.length == 1 &&
          event.target.classList.contains("home-id")
        ) {
          $(".nav-link.active").removeClass("active");
          $("#" + page).addClass("active");
        } else {
          $(".nav-link.active").removeClass("active");
          $("#" + page).addClass("active");
          if (window.history.state.page != page) {
            window.history.pushState({ page: page }, "", "?" + page);
          }
          // Change page title
          //document.title = document.title.split("/")[0];
          //document.title += "/"+document.getElementsByTagName("h10")[0].innerHTML.toUpperCase();
        }
        // Load bestiary data
        loadBestiary();
      }
    );
  }
});

// Load functions
function loadBestiary() {
  if (window.history.state.page == "bestiary") {
    $.ajax({
      datatype: "json",
      url: "/svr/bestiary.json",
      method: "get",
      success: function (result) {
        $(result.demons).each(function (i, val) {
          var powersabilitiesnames_parse = JSON.parse(val.powersabilitiesnames);
          var powersabilitiesdesc_parse = JSON.parse(val.powersabilitiesdesc);
          var weaknessesnames_parse = JSON.parse(val.weaknessesnames);
          var weaknessesdesc_parse = JSON.parse(val.weaknessesdesc);
          $("#content_placeholder .row.w-100").append(
            " <h2>" + val.type + "</h2>."
          );
          $("#content_placeholder .row.w-100").append(" <h3>Appearance</h3>.");
          $("#content_placeholder .row.w-100").append(
            " <p>" + val.appearance + "</p>."
          );
          $("#content_placeholder .row.w-100").append(
            " <h3>Powers and Abilities</h3>."
          );
          $(powersabilitiesnames_parse).each(function (k, valk) {
            $("#content_placeholder .row.w-100").append(
              " <p>" + valk + "</p>."
            );
            $("#content_placeholder .row.w-100").append(
              " <p>" + powersabilitiesdesc_parse[k] + "</p>."
            );
          });
          $("#content_placeholder .row.w-100").append(" <h3>Weaknesses</h3>.");
          $(weaknessesnames_parse).each(function (j, valj) {
            $("#content_placeholder .row.w-100").append(
              " <p>" + valj + "</p>."
            );
            $("#content_placeholder .row.w-100").append(
              " <p>" + weaknessesdesc_parse[j] + "</p>."
            );
          });
          $("#content_placeholder .row.w-100").append(
            " <img src='" + val.url + "' alt=''> "
          );
        });
      },
    });
  }
}
