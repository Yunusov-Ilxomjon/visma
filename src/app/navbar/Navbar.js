import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">


            <Link href="/"><h1 style={{color: 'gray'}}>VISMA</h1></Link>

            <ul>
                <li><Link href="/dogovr">Клиент договор</Link></li>
                <li><Link href="/zapros">Клиент запрос</Link></li>



            </ul>

            <div className='search-box'>
                <Image src="/navbar-image/search.png" alt="Search Icon" width={24} height={24} />
                <input className='search-input' type="text" placeholder='' />
            </div>

            <select style={{ fontSize: '20px' }} className='lang'>


                <option value="en">Eng</option>
                <option value="uz">Uz</option>
                <option value="ru">Rus</option>


            </select>

        </div>
    )
}

export default Navbar