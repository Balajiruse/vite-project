
import './App.css'

function App() {
  const data=[{
    subTitle:"FREE",
    title:"0",
    user:"Single User",
    L6:"✘",
    L7:"✘",
    L8:"✘",
    L9:"✘",
    
  },
  {
    subTitle:"PLUS",
    title:"9",
    user:"5 Users",
    L6:"✔",
    L7:"✔",
    L8:"✔",
    L9:"✘",

  },
  {
    subTitle:"PRO",
    title:"49",
    user:"Unlimited Users",
    L6:"✔",
    L7:"✔",
    L8:"✔",
    L9:"✔",
  }];
  return (
    <div className='app'>
      {
        data.map((price,idx)=>(
         <Price key={idx}
         subTitle={price.subTitle}
         title={price.title}
         user={price.user}
         L6={price.L6}
         L7={price.L7}
         L8={price.L8}
         L9={price.L9}
         />
        ))
      }
   </div>   
)
    }
export default App

function Price(prop){
 
  return(
    
    <div className='card'>
      <h4 className='sub'>{prop.subTitle}</h4>
      <h1 className='title'>${prop.title}/month</h1>
      <div className='details'>
        <p> ✔ {prop.user}</p><br/>
        <p> ✔ 50GB Storage</p><br/>
        <p> ✔ Unlimited Public Projects</p><br/>
        <p> ✔ Community Access</p><br/>
        <p style={{color: prop.L6==="✔"?"black":"gray"}}>{prop.L6}Unlimited Private Projects</p><br/>
        <p style={{color: prop.L7==="✔"?"black":"gray"}}>{prop.L7} Dedicated Phone Support</p><br/>
        <p style={{color: prop.L8==="✔"?"black":"gray"}}>{prop.L8} Free Subdomain</p><br/>
        <p style={{color: prop.L9==="✔"?"black":"gray"}}>{prop.L9} Monthly Status Reports</p><br/>
        <div className='btn'>
        <span>BUTTON</span>
    </div>
      </div>
      </div>
 
  )
}