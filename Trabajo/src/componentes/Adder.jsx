import { useState } from "react"

function Adder(props) {
    const [newPerson,SetNewPerson]=useState({
        Name:"",
        LastName:"",
        Age:0,
        "Phones Number":0
    })
    const [Errores,SetErrores]=useState({
        Name:"",
        LastName:"",
        Age:"",
        "Phones Number":""
    })
const submit=(event)=>{
    event.preventDefault()
    console.log(Errores)
    if(newPerson["Name"].length>4){
        SetErrores({...Errores,["Name"]:""})
        console.log(Errores)
        if(newPerson["LastName"].length>4){
            SetErrores({...Errores,["LastName"]:""})
            console.log(Errores)
            if(newPerson["Age"]<150){
                SetErrores({...Errores,["Age"]:""})
                
                props.send(newPerson)
            }
            else{
                SetErrores({...Errores,["Age"]:"Error,You are very old"})
            } 
        }
        else{
            SetErrores({...Errores,["LastName"]:"Error, invalid LastName"})
        }
    }else{
        SetErrores({...Errores,["Name"]:"Error, invalid Name"})
    }
    
}
const HandleValue=(event)=>{
    const {name,value}=event.target
    SetNewPerson({...newPerson,[name]:value})
}
    return (
        <div className="Adder">
            <link
  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"></link>
            <form onSubmit={submit}>
            <h4>
            Name <input type="text" name="Name" onChange={HandleValue} />
                </h4>
                <h6>{Errores["Name"]}</h6>
                <h4>
                LastName <input type="text" name="LastName" onChange={HandleValue}  />
                </h4>
                <h6>{Errores["LastName"]}</h6>
                <h4>
                   Age <input type="number" name="Age" onChange={HandleValue} />    telephone <input type="tel" name="Phones Number" onChange={HandleValue} />
                </h4>
                <h6>{Errores["Age"]}</h6>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Adder