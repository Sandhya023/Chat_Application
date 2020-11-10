import firebase from 'firebase';
import { SnapshotViewIOS } from 'react-native';

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyC-uSumv6JAczVWkRAlQzH0zrNG0X4N_Ls",
                authDomain: "chatapp-54efd.firebaseio.com",
                databaseURL: "https://chatapp-54efd.firebaseio.com",
                projectId: "chatapp-54efd",
                storage_bucket: "chatapp-54efd.appspot.com",
                messagingSenderId: "62843656636",
                appId: "1:62843656636:android:08fab99f891985ee61b3b9",
               
            });
        }
    };
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };
    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message);
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    }

    off() {
        this.db.off();
    }
    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}
export default new Fire();