import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"


const social = [
    { Icon: <FaGithub/>, path: "https://github.com/sineth1222" },
    { Icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/sineth-mashenka-113122241/" },
    { Icon: <FaFacebook/>, path: "https://web.facebook.com/profile.php?id=100086166321782" },
    { Icon: <FaTwitter/>, path: "" },
];

interface Pagesocials {
    containerStyles: any;
    iconStyles: any;
}

const Socials: React.FC<Pagesocials> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.Icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Socials
