import '../styles/components/errorpage.sass'
import error from '../assets/img/404Error.svg';

export default function Error() {
  return (
    <div className='ErrorPage'>
        <img src={error} alt="" />
    </div>
  )
}
