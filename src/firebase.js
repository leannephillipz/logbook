import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCa2qBGIJzhc9V640bzwqXQfO7dGObv01U",
      authDomain: "learningassistancesoftware.firebaseapp.com",
      databaseURL: "https://learningassistancesoftware.firebaseio.com",
      projectId: "learningassistancesoftware",
      storageBucket: "learningassistancesoftware.appspot.com",
      messagingSenderId: "973280472320"
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings( { timestampsInSnapshots: true }) now default

var getallstudents

function outputstudents(doc) {
  var getallstudents = doc.data()
  console.log(getallstudents)
}

var db = firebaseApp.firestore()
db.collection("students")
      .get()
      .then
      //success
      (function(querySnapshot) {
           querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " : ", doc.data());
              // var allstudents = doc.data()
              // console.log(allstudents)
              outputstudents(doc)
          })
      })
      .catch
      //fail
      (function(error) {
          console.log("Error getting documents: ", error);
      })

      // I need to move this into a mutation and a action? or fetch before app is mounted
      // returns a promise and THEN once complete poulates data async tho! so it wont get data instanly!
      //https://ssr.vuejs.org/guide/data.html#data-store
      // https://github.com/vuejs/vuefire/tree/master/packages/vuexfire


export default {db, getallstudents}
