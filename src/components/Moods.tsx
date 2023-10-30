const Moods = () => {
  return (
    <div className="flex">
      <div className="flex flex-row align-center justify-center mx-40 my-5">
        <p className=" text-2xl mt-4 font-bold">Your mood is now = </p>
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlTDww9_77U9oupxJkEL_PsRUkZ4xKEK3osQPzXN7hrdrdR8mOy2JGslkjlZ1C3XMHcg&usqp=CAU"
          alt=""
        />
      </div>

      <div className="flex flex-col  space-y-50">
        <div className="flex h-75">
          <button className="flex ">
            <p className="font-bold">Heppier</p>
            <img
              className="h-16 w-20"
              src="https://e7.pngegg.com/pngimages/412/673/png-clipart-green-arrow-up-arrow-s-angle-triangle.png"
              alt=""
            />
          </button>
        </div>

        <div>
          <button className="flex">
            <p className="font-bold">Unhappier</p>
            <img
              className="h-16 w-20"
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
