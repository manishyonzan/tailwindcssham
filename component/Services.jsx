
const Services = () => {

  return (
    <div className="mt-1 flex flex-col p-5 w-full justify-between font-mono text-sm lg:flex  bg-gray-500">

    <div>
      <h1 className="text-center text-5xl" >Our Services</h1>
    </div>
      <div className="w-full flex flex-col sm:flex-row justify-around">

        <div className=" w-full flex justify-around sm:w-1/3 sm:justify-between m-5">
          <div className="h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Consulting</h1>
          </div>

          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Passenger Assistance</h1>
          </div>
        </div>

        <div className=" w-full flex justify-around sm:w-1/3 sm:justify-between m-5">
          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Ticket Booking</h1>
          </div>

          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Hotel Reservation</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-around">

        <div className=" w-full flex justify-around sm:w-1/3 sm:justify-between m-5">
          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Local Guide</h1>
          </div>

          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Home Stay</h1>
          </div>
        </div>

        <div className=" w-full flex justify-around sm:w-1/3 sm:justify-between m-5">
          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Route Planning</h1>
          </div>

          <div className=" h-40 w-40 flex justify-center items-center rounded-md bg-blue-100 p-4">
            <h1 className="text-2xl">Excursions</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center">Copyright c</h1>
      </div>
    </div>
  )
}

export default Services