import { FIRESTORE_DB as db}   from "../config/firebase";
import { collection, addDoc, getDocs, updateDoc, doc, query, where, deleteDoc } from "firebase/firestore";



    export async function saveTask(task){
        try{
            await addDoc(collection(db, "tasks"), {
                description: task,
                done: false,
            });
            return 'sucesso';
        }catch(error){
            console.log(error);
            return 'erro';
        }
}

    export async function loadData(state){
        let data = [];
        try{
            const querySnapshot = await getDocs(query(collection(db,"tasks"),where("done","==",state)));
            querySnapshot.forEach((doc)=>{
                data.push({
                    ...doc.data(),
                    id: doc.id,
                });
            })
            return data;

        }catch(error){
            console.log(error);
        }
}

    export async function changeState(task){
        try{
            await updateDoc(doc(db, "tasks", task.id), {
                done: !task.done,
            });
        }catch(error){
            console.log(error);
            return('erro');
        }
}

    export async function deleteTask(id){
        try{
            await deleteDoc(doc(db,"tasks", id));
         }catch(error){
            console.log(error);
            return('erro');
         }
    }




    