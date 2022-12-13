import '../App.css';
export default function Tabla({setInvoice}){
    const datas = () =>{
        let array = [];
        console.log(array);
        array.push(setInvoice);
        console.log(array);
        
    };
    return (
        <div>
            {datas}
        </div>
    );
}