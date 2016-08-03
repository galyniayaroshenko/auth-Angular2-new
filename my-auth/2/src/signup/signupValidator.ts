import {Control} from '@angular/common';

export class SignupValidator {
    
    static underscorecheck(control: Control){
        if(control.value.indexOf('_')>=0)
        return null;
        
        return {underscorenotfound: true};
    }
    
    static useruniquecheck(control: Control){
        return new Promise((resolve) => {
            setTimeout (()=>{
                if(control.value == "steve_")
                resolve({usernotunique: true});
                else
                resolve(null);
            }, 2000);
        })
        
        
   }
}