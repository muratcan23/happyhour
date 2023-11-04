const Moods = () => {
  return (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-row items-center">
        <p className="text-2xl font-bold">Your mood is now =</p>
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlTDww9_77U9oupxJkEL_PsRUkZ4xKEK3osQPzXN7hrdrdR8mOy2JGslkjlZ1C3XMHcg&usqp=CAU"
          alt=""
        />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex h-20">
          <button className="flex items-center font-bold">
            Happier
            <img
              className="h-8 w-10"
              src="https://e7.pngegg.com/pngimages/412/673/png-clipart-green-arrow-up-arrow-s-angle-triangle.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex h-20">
          <button className="flex items-center font-bold">
            Unhappier
            <img
              className="h-8 w-10"
              src="https://www.citypng.com/public/uploads/preview/down-arrow-downward-download-red-button-icon-png-11664427793dlk6ryh2uy.png?v=2023062412"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moods;
