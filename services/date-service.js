
export function nowtoHHMM(){
    
    const date = new Date(); 

    return `${date.getHours()}:${date.getMinutes().toString().padStart(2,"0")}`
    
}

export const DAYS = ['LUN','MAR','MER','JEU','VEN','SAM','DIM',]

export function dateToDDMM(date){
    return `${date.getDate().toString().padStart(2,"0")}/${(date.getMonth()+1).toString().padStart(2,"0")}`
}