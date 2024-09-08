var _a;
//listing elements
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var genderElement = document.getElementById('gender');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var profilepictureElement = document.getElementById('resume-image');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (firstnameElement && phoneElement && emailElement && educationElement && experienceElement && skillsElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var gender = genderElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var profilepicturefile = (_a = profilepictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <img class=\"".concat(profilepictureURL, "\" src=\"\" alt=\"\">\n    <p><strong>First Name:</strong> ").concat(firstname, " </p>\n    <p><strong>Last Name:</strong>").concat(lastname, "\n    <p><strong>Gender:</strong>").concat(gender, "\n    <p><strong>E-mail Address</strong> ").concat(email, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n    <p><strong>Profile Picture:</strong>\n     <h3>Education</h3>\n    <p><strong>Enter Your Institude Name:</strong> ").concat(education, " </p>\n    <h3>Skills</h3>\n    <p>  ").concat(skills, " </p>\n    <h3>Experience</h3>\n    <p> ").concat(experience, " </p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missings');
        }
    }
    else {
        console.error('one or more output elements are missings');
    }
});
