//  Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, Timestamp } from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import moment from 'moment';

import { Activity } from '@/models';
import type { EntryForm } from '@/models';
// import * as firebaseConfig from '';
// TODO: Add SDKs for Firebase products that you want to use
// https://www.npmjs.com/package/firebase

const firebaseConfig = require('./firebaseconfig.json')
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const activityCol = collection(db, 'Activity');
const entryFormCol = collection(db, 'EntryForm');

async function queryAc():Promise<Activity[]> {
    const activitySnapshot = await getDocs(activityCol);
    return activitySnapshot.docs.map(doc => { return docToActivity(doc)});
} 

async function queryAcById(acId:string):Promise<Activity> {
    const docRef = doc(db, 'Activity', acId);
    const activitySnapshot = await getDoc(docRef);
    return docToActivity(activitySnapshot);
}

async function addEntryForm(entryForm:EntryForm) {
    console.log("entryForm",entryForm)
    const entryFormSnapshot = await addDoc(entryFormCol, entryFormToDoc(entryForm))
    console.log("entryFormSnapshot:",entryFormSnapshot)
}

async function queryEntryForm():Promise<DocumentData[]> {
    const snapshot = await getDocs(entryFormCol);
    return snapshot.docs.map(doc => { return doc.data()});
} 

function entryFormToDoc(entryForm: EntryForm):DocumentData {
    return {activityId:entryForm.activityId, name: entryForm.name, email: entryForm.email, cellphone: entryForm.cellphone, status: entryForm.status,createDT: Timestamp.now()}
}

function docToActivity(doc: DocumentData):Activity {
    let data = doc.data()
    return new Activity(doc.id,data.title,data.subTitle,data.description,moment.unix(data.startDateTime.seconds).format('yyyy-MM-DD HH:mm'))
}

export {
  queryAc,
  queryAcById,
  addEntryForm,
  queryEntryForm
}