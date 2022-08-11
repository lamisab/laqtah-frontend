import { Link } from 'react-router-dom';
import { FcCompactCamera,FcIphone,FcFeedback ,FcBullish,FcFilmReel} from "react-icons/fc";





export function PortressInfo(){

return(
<>
<div id="main-card">
        

        <div className="cover-photo"></div>
        <div className="photo">
           
         <img className='proimg' src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                          
        </div>
                <h1 className="h3"> Photographer Page:</h1>
      
       
        <br/>
        <div className="content">
             <div className="card-body">
      
      {/* <h1 className="h3"> Photographer Page:</h1> */}
            
      
      <table>
                    <tbody>
                        <tr>
                            <td><FcCompactCamera size={25}/> Photographer Name </td>
                            <td>:</td>
                            <td>Jakob Owens</td>
                        </tr>
                        <tr>
      
                        <td><FcFeedback size={20}/>Email</td>
                            <td>:</td>
                            <td>Jakob-Owens@gmail.com</td>
                        </tr>
                        <tr>
                            <td><FcIphone size={25}/>Phone </td>
                            <td>:</td>
                            <td>055555555</td>
                        </tr>
                        <tr>
                            <td><FcBullish size={20}/>Price  </td>
                            <td>:</td>
                            <td>200-1500 RS</td>
                        </tr>
                        <tr>
                            <td><FcFilmReel size={25}/> Photographer Url  </td>
                            <td>:</td>
                            <td>https://www.instagram.com/
                                jakobowens/</td>
                        </tr>
                        </tbody>
          </table> 
          
  </div>
  
  </div>
  </div>

      
  </>
);

}