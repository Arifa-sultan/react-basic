import './background.css'
import videoscar from '../../assets/videos car'
import image1 from '../../assets/1.avif'
import image2 from '../../assets/2.avif'
import image3 from '../../assets/3.jpg'

const background = ({playstatus,herocount}) => {
  if(playstatus){
    return(
      <video className='background' autoPlay loop muted>
        <source scr={videoscar} type='videos car' />
      </video>
    )
  }
  else if(herocount==0)
  {
    return <img scr={image1}  className='background' alt=""  />
  }
  else if(herocount==1)
    {
      return <img scr={image2}  className='background' alt=""  />
    } 
    else if(herocount==2)
      {
        return <img scr={image3}  className='background' alt=""  />
      }
  
}
export default  background
