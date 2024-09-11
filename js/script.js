/** @format */

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style = "display: none; ";
});


// menu 

$("#menu-bar").click(() => {
  $(".side-nav-container").toggleClass("active");
  $("#menu-bar").toggleClass("fa-xmark");
});

// menu end  



// summernote 

     $(".summernote").summernote({
       placeholder: "Type Here...",
       tabsize: 2,
       height: 120,
       toolbar: [
         ["style", ["style"]],
         ["font", ["bold", "underline", "clear"]],
         ["color", ["color"]],
         ["para", ["ul", "ol", "paragraph"]],
         ["table", ["table"]],
         ["insert", ["link", "picture", "video"]],
         ["view", ["fullscreen", "codeview", "help"]],
       ],
     });
  


// summernote end  




// file upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}



// $(".multiselect").chosen();


// radio filter 


jQuery(document).ready(function () {
  $(".banner-ad-class").hide();
});

jQuery(function () {
  jQuery(".banner-ad-btn").click(function () {
    jQuery(".banner-ad-class").hide(".banner-show-content");
    jQuery("#banner-ad-header" + $(this).attr("target")).show(500);
  });
});




// counter

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// counter  end
