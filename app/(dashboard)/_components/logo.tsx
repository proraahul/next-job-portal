import Image from "next/image"


const Logo = () => {
  return (
    <Image
    width={60}
    height={60}
    alt='logo'
    src='/img/logo.jpg'
     />
  ) 
}

export default Logo