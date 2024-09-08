


//listing elements
document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;
    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
    const genderElement = document.getElementById('gender') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const profilepictureElement = document.getElementById('resume-image') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


     if(firstnameElement && phoneElement && emailElement &&  educationElement && experienceElement && skillsElement){

        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const gender = genderElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const profilepicturefile = profilepictureElement.files?.[0];
        const profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile):'';
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
     
    //create resume output
    const resumeOutput =`
    <h2>Resume</h2>
    <img class="${profilepictureURL}" src="" alt="">
    <p><strong>First Name:</strong> ${firstname} </p>
    <p><strong>Last Name:</strong>${lastname}
    <p><strong>Gender:</strong>${gender}
    <p><strong>E-mail Address</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>
    <p><strong>Profile Picture:</strong>
     <h3>Education</h3>
    <p><strong>Enter Your Institude Name:</strong> ${education} </p>
    <h3>Skills</h3>
    <p>  ${skills} </p>
    <h3>Experience</h3>
    <p> ${experience} </p>
    `;


    const resumeOutputElement = document.getElementById('resumeOutput')
     if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
     }else{
        console.error('the resume output elements are missings')
     }
}else{
    console.error('one or more output elements are missings')
}

})

