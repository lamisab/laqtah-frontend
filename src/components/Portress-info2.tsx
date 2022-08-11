
import { FcCompactCamera,FcIphone,FcFeedback ,FcBullish,FcFilmReel} from "react-icons/fc";





export function PortressInfo2(){

return(
<>
<div id="main-card">
        

        <div className="cover-photo"></div>
        <div className="photo">
           
         <img className='proimg' src="nicolas.jpg" alt="" />
                          
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
                            <td>Nicolas Ladino Silva</td>
                        </tr>
                        <tr>
      
                        <td><FcFeedback size={20}/>Email</td>
                            <td>:</td>
                            <td>Nicolas-Silva@gmail.com</td>
                        </tr>
                        <tr>
                            <td><FcIphone size={25}/>Phone </td>
                            <td>:</td>
                            <td>055999999</td>
                        </tr>
                        <tr>
                            <td><FcBullish size={20}/>Price  </td>
                            <td>:</td>
                            <td>300-3000 RS</td>
                        </tr>
                        <tr>
                            <td><FcFilmReel size={25}/> Photographer Url  </td>
                            <td>:</td>
                            <td>https://www.instagram.com/
                                ancoraimparo_ll/</td>
                        </tr>
                        </tbody>
          </table> 
          <button className="edit"type="submit">resrvation </button>
  </div>
  
  </div>
  </div>

      
  </>
);

}