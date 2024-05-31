function sendmail(){
    var params = {
      name :  document.getElementById("name").value,
      email : document.getElementById("email").value,
      date :  document.getElementById("date").value,
      number: document.getElementById("number").value,
      message : document.getElementById("message").value,
    };
    
    const serviceID = "service_1xe14mh";
    const templateID = "template_vb3qx18";
    
    emailjs
    .send(serviceID,templateID,params)
    .then(
      res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
      document.  getElementById("number").value = "";
      document.  getElementById("message").value = "";
      console.log(res);
      alert("Submitted Successfully...");
    })
    
    .catch((err) => console.log(err));
  }