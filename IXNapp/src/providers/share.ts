import { Injectable } from '@angular/core';

//This ShareService approach is adapted from https://www.gajotres.net/ionic-2-sharing-data-between-pagescomponents/
@Injectable()
export class ShareService {
    
   firstName: string;
   lastName: string;
   userID: number; 

   constructor() {
       this.firstName = 'Blank';
       this.lastName = 'Name';
       this.userID = 0; 
   }
 
   setUserName(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;       
   }

   setUserID(userID){
       this.userID = userID; 
   }

   getUserID(){
       return this.userID; 
   }
 
   getUserName() {
       return this.firstName + ' ' + this.lastName;
   }  
}