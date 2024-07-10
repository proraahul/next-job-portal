import { UserButton } from "@clerk/nextjs";
import DashboardLayout from "./(dashboard)/layout";

const HomePage = () => {
  return(
    <>
      <UserButton /> 
      <DashboardLayout />
    </>
  )
}

export default HomePage 