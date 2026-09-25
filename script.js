/* =========================================
   THE ARCHIVE
   Main JavaScript
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const loginScreen =
    document.getElementById("loginScreen");

const archiveScreen =
    document.getElementById("archiveScreen");

const nameInput =
    document.getElementById("nameInput");

const accessButton =
    document.getElementById("accessButton");

const errorMessage =
    document.getElementById("errorMessage");

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");


/* =========================================
   SECRET NAME
========================================= */

const CORRECT_NAME = "roshan";


/* =========================================
   LOGIN
========================================= */

function checkAccess() {

    const enteredName =
        nameInput.value.trim().toLowerCase();


    /*
        Only "Roshan" will work.

        toLowerCase() means:

        Roshan
        roshan
        ROSHAN
        RoShAn

        will all be accepted.
    */

    if (enteredName === CORRECT_NAME) {

        unlockArchive();

    } else {

        showAccessDenied();

    }
}


/* =========================================
   UNLOCK
========================================= */

function unlockArchive() {

    errorMessage.classList.remove("show");

    loginScreen.classList.add("hidden");

    archiveScreen.classList.remove("hidden");

    document.body.style.overflowX = "hidden";

}


/* =========================================
   ACCESS DENIED
========================================= */

function showAccessDenied() {

    errorMessage.classList.add("show");

    nameInput.classList.add("shake");

    setTimeout(() => {

        nameInput.classList.remove("shake");

    }, 400);

}


/* =========================================
   BUTTON CLICK
========================================= */

accessButton.addEventListener(
    "click",
    checkAccess
);


/* =========================================
   ENTER KEY
========================================= */

nameInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkAccess();

        }

    }
);


/* =========================================
   NAVIGATION
========================================= */

const navigationButtons =
    document.querySelectorAll(
        ".nav-item"
    );


const sections =
    document.querySelectorAll(
        ".content-section"
    );


function openSection(sectionId) {

    /* Hide every section */

    sections.forEach(section => {

        section.classList.remove("active-section");

        section.classList.add("hidden");

    });


    /* Show selected section */

    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.remove("hidden");

        selectedSection.classList.add(
            "active-section"
        );

    }


    /* Update sidebar */

    navigationButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.section === sectionId
        ) {

            button.classList.add("active");

        }

    });


    /* Close mobile menu */

    sidebar.classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* =========================================
   SIDEBAR BUTTONS
========================================= */

navigationButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            openSection(
                this.dataset.section
            );

        }
    );

});


/* =========================================
   DASHBOARD FILE BUTTONS
========================================= */

const fileButtons =
    document.querySelectorAll(
        ".file-button"
    );


fileButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            openSection(
                this.dataset.section
            );

        }
    );

});


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener(
    "click",
    function() {

        sidebar.classList.toggle("open");

    }
);


/* =========================================
   SECRET FILE → LOVE LETTER
========================================= */

const unlockSecret =
    document.getElementById(
        "unlockSecret"
    );


unlockSecret.addEventListener(
    "click",
    function() {

        /*
            Change the button text
        */

        unlockSecret.textContent =
            "FILE UNLOCKED ♥";


        /*
            Open the Love Letter section
        */

        openSection("love-letter");

    }
);

/* =========================================
   FINAL LOVE BUTTON
========================================= */

const finalButton =
    document.getElementById(
        "final-question"
    );


finalButton.addEventListener(
    "click",
    function() {

        
        openSection("closed");

    }
);