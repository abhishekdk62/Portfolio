function sendMail() {
  
    // Get form values
    let fromName = document.getElementById("name").value;
    let fromEmail = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // Reset previous error messages
    document.getElementById("name").classList.remove('is-invalid');
    document.getElementById("email").classList.remove('is-invalid');
    document.getElementById("message").classList.remove('is-invalid');
  
    // Validate Name
    if (fromName.trim() === '') {
      document.getElementById("name").classList.add('is-invalid');
      alert('Please enter your name.');
      return;
    }
  
    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(fromEmail)) {
      document.getElementById("email").classList.add('is-invalid');
      alert('Please enter a valid email.');
      return;
    }
  
    // Validate Message
    if (message.trim() === '') {
      document.getElementById("message").classList.add('is-invalid');
      alert('Please enter a message.');
      return;
    }
  
    // If validation passes, send email
    emailjs.send("service_ood0x1o", "template_ny17cb4", {
      from_name: fromName,
      email: fromEmail,
      message: message,
    }).then(() => {
      alert("Email sent successfully!");
      // Reset the form after successful submission
    }).catch((error) => {
      console.error("EmailJS Error: ", error);
      alert("Failed to send message. Please try again later.");
    });
  }
  