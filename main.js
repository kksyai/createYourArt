userName = document.getElementById('userName');
title = document.getElementById('projectTitle');
description = document.getElementById('projectDescription');
submit = document.getElementById('submitButton');
popup = document.getElementById('popup');
popupClose = document.getElementById('closeButton');


// popup.style.display='none';

// submit.addEventListener("click", function() {
//     // popup.style.display='none';
//     console.log('hello world');
//     popup.style.display='flex';
// });

document.addEventListener('input', function() {
    if ((title.value.length > 0) &&
    (description.value.length > 0)) {
        submit.removeAttribute("disabled");
     } else {
        submit.setAttribute("disabled", "disabled");
     }
})

// closeButton.addEventListener("click", function() {
//     popup.style.display='none';
// });
