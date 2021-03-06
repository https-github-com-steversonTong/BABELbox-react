const RightSide = (props) => {
  return (
    <div className="col-span-3 h-full flex justify-center overflow-hidden">
    <img className="inline-block animate-wiggle h-12 w-12 object-cover absolute top-3/4 -ml-12 animation-delay-1000" src="./clown.png" />
      <div className="h-8 w-8 bg-babelYellow-700 rounded-full animate-slide-up-vertical-medium absolute top-1/2 animation-delay-1000"></div>
      <svg className="text-babelBlue-300 w-8 h-8 animate-slide-up-vertical-medium absolute top-3/4 -ml-24 animation-delay-1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125">
        <path stroke="none" fill="currentColor" d="M52 4.5621778264911a21 21 0 0 1 21 0l34.425625842204 19.875644347018a21 21 0 0 1 10.5 18.186533479473l0 39.751288694036a21 21 0 0 1 -10.5 18.186533479473l-34.425625842204 19.875644347018a21 21 0 0 1 -21 0l-34.425625842204 -19.875644347018a21 21 0 0 1 -10.5 -18.186533479473l0 -39.751288694036a21 21 0 0 1 10.5 -18.186533479473"></path>
      </svg>
    </div>
  );
};

export default RightSide;
