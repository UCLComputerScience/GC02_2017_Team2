import { Injectable } from '@angular/core';

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