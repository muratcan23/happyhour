const Info = () => {
  return (
    <div className="bg-gray-700">
      <p className="flex text-white text-lg justify-center font-bold size-20px">
        You have 1 hour
      </p>
      <div className="flex flex-row bg-gray-700 h-30 w-100 justify-center">
        <img
          className="h-24 w-24"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-sand-timer-maria-dryfhout.jpg"
          alt=""
        />
      </div>
      <p className="flex text-white text-lg justify-center font-bold-italic size-20px tracking-tight">
        Choose your mood and let's see how much 1 hour is for you.
      </p>
      <p className="flex text-slate-400 text-lg justify-center  size-16px tracking-tight">
        Do not forget Time is illusion
      </p>
    </div>
  );
};

export default Info;