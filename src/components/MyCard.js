const MyCard = ({ details }) => {
  const FirstUpper = (s) => {
    if (typeof s !== "string") {
      return "";
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const sliceDate = (s) => {
    if (typeof s !== "string") {
      return "";
    }
    return s.slice(0, 10).split("-").reverse().join("/");
  };
  return (
    <>
      <div className="flex w-3/4 h-1/2 bg-blue-400 flex-col">
        <div className="flex justify-center w-full z-10">
          <img
            height="150"
            width="150"
            className="rounded-full border-2 border-red-100 mt-6"
            // we have to add this ? as sometimes the data will not work
            src={details.picture?.large}
            alt=""
          />
        </div>
        <div className="bg-yellow-200 pl-4 -mt-12 h-full flex flex-col">
          <div className="mt-16 font-serif">
            <h1>
              <span className="inline-block w-18">Gender&nbsp;:</span>
              <span>{FirstUpper(details.gender)}</span>
            </h1>
            <h1>
              <span className="inline-block w-18">Name :</span>
              <span>{FirstUpper(details.name?.title)} </span>
              <span>
                {FirstUpper(details.name?.first)}{" "}
                {FirstUpper(details.name?.last)}
              </span>
            </h1>
            <h1>
              <span>Phone Number :</span>
              {details.phone}
            </h1>
            <h1>
              <span>DOB :</span>
              {sliceDate(details.dob?.date)}
            </h1>
            <h1>
              <span>Age :</span>
              {details.registered?.age}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCard;
