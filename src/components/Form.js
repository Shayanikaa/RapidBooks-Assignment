import React,{useState,useEffect} from 'react'

function Form() {
const [inputarr, setinputarr] = useState([{
  debit:"0",
  credit:"0"
},
{
debit:"23",
credit:"34"
},
{
debit:"2",
credit:"3"
}
])

 const [inputdata, setinputdata] = useState({
  debit:"",
  credit:"",
 })
 var total = 0;
 var sum = 0;
 function change(e){
  setinputdata({...inputdata,[e.target.name]:e.target.value})
 }
 
 let {debit,credit} =inputdata;
 function changes(){
  setinputarr([...inputarr,{debit,credit}]);
 console.log(inputarr);
//console.log(inputdata);
//console.log(total);
 setinputdata({debit:"",credit:""})
}
useEffect(() => {
console.log(inputarr)
}, [inputarr])
 
 
//console.log(inputdata.debit);

 function deleteData(index){
  const data = [...inputarr];
  data.splice(index,1);
  setinputarr(data);
 }

  return (
   <>
   <div className="container mt-3">
      <form>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" aria-labelledby="dropdownMenuButton" required placeholder="Debit Amount" name='debit' value={inputdata.debit} onChange={change}/>
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Credit Amount" required name='credit' value={inputdata.credit} onChange={change}/>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
             Account Dropdown
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-required="true">
              <button className="dropdown-item" type="button">Debit</button>
              <button className="dropdown-item" type="button">Credit</button>
            </div>
          </div>
         <div className="col">
          <button onClick={changes}>add</button>
         </div>
        </div>
      </form>
      <div className='container mt-3'>
   <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Debit</th>
      <th scope="col">Credit</th>
    </tr>
  </thead>
  <tbody>
    
     {
      inputarr.map((info,ind)=>{
        return(
          <tr key={ind}>
            <td>{ind+1}</td>
            <td>{info.debit}</td>
            <td>{info.credit}</td>
            <button onClick={()=>deleteData(ind)}>Delete</button>
          </tr>
        )
      })
     }

  </tbody>
</table>
   </div>
   <table className="table table-striped table-dark">
    <thead>
      <tr>
      <th scope="col">Total Debit</th>
      <th scope="col">Total Credit</th>
      </tr>
    </thead>
    <tbody>
    {
      inputarr.map((info,ind)=>{
        total += Number(info.debit)
        sum += Number(info.credit)
        return(
          <tr key={ind}>
            <td>{total}</td>
            <td>{sum}</td>
          </tr>
        )
      })
     }
    </tbody>
   </table>
    </div>
   </>
  )
}

export default Form
