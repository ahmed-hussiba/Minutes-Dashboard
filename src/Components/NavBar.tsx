import Image from "next/image";
import React from "react";
import styles from "../Components/NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>

      <div className={styles.leftNavBarContainer}>
        <Link href={"/"}>
          <Image src={"/Mask Group.png"} alt="image" width={30} height={30} />
        </Link>

        <div className={styles.countrySelectorContainer}>
          <Link className={styles.countryFlag} href={"/"}>
            <Image src={"/CountryFlag.png"} alt="image" width={30} height={30} />
          </Link>
          <Link className={styles.Darktore} href={"/"}>
            <Image src={"/Darktore.png"} alt="image" width={30} height={30} />
          </Link>
          <h5>Bur Dubai</h5>
          <Link className={styles.Rectangle} href={"/"}>
            <Image src={"/Rectangle.png"} alt="image" width={10} height={10} />
          </Link>
          <Link className={styles.SelectorCode} href={"/"}>
            <Image src={"/Right.png"} alt="image" width={120} height={30} />
          </Link>
        </div>

      </div>


      <div>
        <div className={styles.OptionsContainer}>
          <Link href={"/"}>
            <Image src={"/search.png"} alt="image" width={30} height={30} />
          </Link>
          <Link href={"/"}>
            <Image src={"/settings.png"} alt="image" width={30} height={30} />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/notifications.png"}
              alt="image"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
