const d  = document
const w = window
const n = navigator

export default function networkStatus(){

    const isOnline = ()=>{
        const $div = d.createElement("div");
        if(n.onLine){
            $div.textContent = "Conexion Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(function(){
            d.body.removeChild($div)
        },2000)
    };

    // Dos evento de la Ventana
    w.addEventListener("online",(e) => {isOnline()})
    w.addEventListener("offline",(e) => {isOnline()})
    //console.log(n.onLine)
}