function sendEmail(contactForm){
    email.js.send("gmail","rosie",
    {"from_name":contactForm.name.value,
    "from_email":contactForm.emailaddress.value,
    "project_request":contactForm.projectsummary.value})
    .then(function(response) {
        console.log("SUCCESS");
        },
        function(err) {
            console.log("FAILED");
        });
         return false; 
}