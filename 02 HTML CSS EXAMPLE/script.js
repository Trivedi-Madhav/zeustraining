document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("basicForm").addEventListener("submit", function(e) {
      e.preventDefault();
  
      let username = document.querySelector("#username");
      let comments = document.querySelector("#comments");
      let genderMale = document.getElementById("Male").checked;
      let genderFemale = document.getElementById("Female").checked;
  
      if (username.value.trim() === '' || comments.value.trim() === '' || (genderMale && genderFemale)) {
        alert('Please fill in all fields.');
        if(username.value.trim()==='')
        {
            username.focus();
        }
        else if(comments.value.trim()==='')
        {
            comments.focus();
        }
        else
        {
            if(!genderFemale && !genderFemale)
            {
                document.getElementById("Male").focus();
            }
        }
      } else {
        alert("Form submitted!");
      }
    });
  });
  