import { Link } from 'react-router-dom'

const HeaderNav = ({title , img , path ,classes}) => {
    const s1 = `/${path}`;
    const s2 = `/images/${img}`;
    return (
    <li className={classes}>
        <Link  to={s1} className='relative flex flex-col justify-center items-center w-fit group'>
            <img src={s2} alt='nav-icon'></img>
            <span className='text-[12px] text-[rgba(0,0,0,0.6)] group-hover:text-[rgba(0,0,0,0.9)] duration-200 whitespace-nowrap max-[500px]:hidden'>{title}</span>
        </Link>
    </li>
    );
};

export default HeaderNav;
