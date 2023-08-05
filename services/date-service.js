
export function nowtoHHMM(){
    
    const date = new Date(); 

    return `${date.getHours()}:${date.getMinutes().toString().padStart(2,"0")}`
    
}