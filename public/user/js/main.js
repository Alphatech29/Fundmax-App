document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.VtuTab .buydata');
    const tabContents = document.querySelectorAll('.Field');

    // Show the first tab and its content by default
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and corresponding content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);

            button.classList.add('active');
            tabContent.classList.add('active');
        });
    });
});


const tabs = document.querySelectorAll('.buydata2');
const lists = document.querySelectorAll('.Lists');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and lists
        tabs.forEach(t => t.classList.remove('active'));
        lists.forEach(list => list.classList.remove('active'));

        // Add active class to clicked tab and corresponding list
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        const list = document.querySelector(`#${tabId}`);
        list.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.body;
  
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "auto";
  
      if (sidebar.classList.contains("active")) {
        sidebar.style.transform = "translateX(0)";
      } else {
        sidebar.style.transform = "translateX(-100%)";
      }
    });
  
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
        body.style.overflow = "auto";
        sidebar.style.transform = "translateX(-100%)";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const ellipseImage = document.querySelector(".Ellipse644");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    ellipseImage.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownContent.classList.toggle("show");
    });
  
    window.addEventListener("click", function () {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    });
  
    dropdownContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".subp3");
    const subLists = document.querySelectorAll(".sub-list");
  
    dropdownButtons.forEach((dropdownButton, index) => {
      const subList = subLists[index];
  
      dropdownButton.addEventListener("click", function () {
        subList.classList.toggle("sub-list-active");
      });
  
      document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target)) {
          subList.classList.remove("sub-list-active");
        }
      });
    });
  });
  



// This code is for product image upload
    const input = document.getElementById('imageUpload');
    const selectedImagesContainer = document.getElementById('selectedImages');
    const imageFormatText = document.getElementById('imageFormatText');

    input.addEventListener('change', function (event) {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.includes('image/jpeg') || file.type.includes('image/png')) {
                const imageNameElement = document.createElement('p');
                imageNameElement.textContent = file.name;
                selectedImagesContainer.appendChild(imageNameElement);
            } else {
                console.log('Unsupported file format: ' + file.type);
            }
        }

        // Hide the format text
        imageFormatText.style.display = 'none';
    });


    //This code is for selction of product type container and display it
    const productTypeSelect = document.getElementById("productType");
    const physicalContainer = document.getElementById("physicalContainer");
    const digitalContainer = document.getElementById("digitalContainer");

    productTypeSelect.addEventListener("change", function () {
      if (this.value === "physical") {
        physicalContainer.style.display = "block";
        digitalContainer.style.display = "none";
      } else if (this.value === "digital") {
        physicalContainer.style.display = "none";
        digitalContainer.style.display = "block";
      } else {
        physicalContainer.style.display = "none";
        digitalContainer.style.display = "none";
      }
    });


    //This code is for display countries list from api
    const countrySelect = document.getElementById("countrySelect");

    fetch("http://restcountries.com/v3.1/all")  // Using non-secure HTTP
      .then(response => response.json())
      .then(countries => {
        countries.forEach(country => {
          const option = document.createElement("option");
          option.value = country.name.common;
          option.textContent = country.name.common;
          countrySelect.appendChild(option);
        });
      })
      .catch(error => console.error("Error fetching countries:", error));

   