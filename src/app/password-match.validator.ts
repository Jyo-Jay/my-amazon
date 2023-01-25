import { AbstractControl } from "@angular/forms";

export function passwordMatch(src:string,des:string)
{
    return function (control:AbstractControl):{}|null {
        let passCntrl = control.get(src)
        let cfpassCntrl = control.get(des)
        let passValue = passCntrl?.value
        let cfpassValue = cfpassCntrl?.value
        if(passValue!="" && cfpassValue!="")
        {
            if(passValue!=cfpassValue)
            {
                cfpassCntrl?.setErrors({'mismatch':true})
}
        }
        return null
    }
}
