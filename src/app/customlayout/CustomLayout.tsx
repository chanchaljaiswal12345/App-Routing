import Navbar from "../navbar/page";



const CustomLayout = ({ children }:any) => {
    return (
      <div>
    <Navbar/>
        {children}
      </div>
    );
  };
  
  export default CustomLayout;
  