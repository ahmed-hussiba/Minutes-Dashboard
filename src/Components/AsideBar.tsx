import Image from 'next/image';
import React from 'react';
import styles from './AsideBar.module.scss';
import Link from 'next/link';


const Images = ['Frame2.png', 'Frame3.png', 'Frame4.png', 'Frame5.png', 'Frame6.png', 'Frame7.png', 'Frame8.png']

const AsideBar = () => {
    return (
        <div className= {styles.sideBar}>
            {Images.map((img) => (
                <Link href={'/'} key={img}>
                    <Image src={`/${img}`} width={50} height={50} alt='Image'/>
                </Link>
            ))}
        </div>
    );
}

export default AsideBar;
