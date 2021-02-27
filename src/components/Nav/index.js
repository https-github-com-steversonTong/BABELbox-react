import { Clown } from "../Logos";

const Navbar = (props) => {

  return (
    <div className="navbar w-full px-12 z-50 pt-6 flex justify-between items-center absolute sticky top-0">
    <div className={`flex items-center space-x-4`}>
      <img src="./images/whitebox.png" className="h-12" />
      <p className={`font-poppins uppercase text-babelPink-500 text-lg font-bold`}>
      {props.brandName || 'BABELBOX'}
      </p>
    </div>
    <ul className={`flex items-center font-semibold cursor-pointer space-x-12 text-${props.color} font-roboto font-medium text-sm`}>
      <li>Help</li>
      <li>About</li>
      <li>Games</li>
      <li>Login</li>
      <li style={{padding: "8.48611px 16.9722px"}} className={`p-2 border-2 border-${props.color} rounded-3xl flex items-center justify-center`}>
        Sign Up
      </li>
    </ul>
    </div>
  );
};

export default Navbar;
