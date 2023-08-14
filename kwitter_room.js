
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyB6VTR7DICm8TuMjlESHhYnQLvo_BJK7Dg",
      authDomain: "kwitter-13ee0.firebaseapp.com",
      databaseURL: "https://kwitter-13ee0-default-rtdb.firebaseio.com",
      projectId: "kwitter-13ee0",
      storageBucket: "kwitter-13ee0.appspot.com",
      messagingSenderId: "36097163555",
      appId: "1:36097163555:web:455b621e453fa48f8a4c96",
      measurementId: "G-E648M98MRX"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

   function addRoom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name" 
        });  
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_Message.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;   
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_Message.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
