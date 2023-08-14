//YOUR FIREBASE LINKS

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
     room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         us_name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_tag="<h4>" +us_name + "<img class='user_tick' src='tick.png'></h4>";
         message_tag="<h4 class='message_4'>" + message + "</h4>";
         like_button="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatedLike(this.id)'>";
         span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
         row=name_tag + message_tag + like_button + span_tag;
         document.getElementById("output").innerHTML+=row;
//End code

      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      console.log(msg);
      console.log(room_name);
      firebase.database().ref(room_name).push({
           name: user_name,
           message: msg,
           like: 0             
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function updatedLike(message_id){
      console.log("Clicked on Like Button " + message_id);
      button_id=message_id;
      like_count=document.getElementById(button_id).value;
      updated_like_count=Number(like_count) + 1 ;
      console.log(updated_like_count);
      
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_like_count
      });
}
