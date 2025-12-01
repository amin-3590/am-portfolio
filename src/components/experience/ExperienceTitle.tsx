
const ExperienceTitle = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-6">
        <h2 className="text-3xl text-orange-400 uppercase">Since 2023</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-cyan-400">2</h1>
            <h1 className="text-xl text-gray-400 uppercase">Years</h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-400">-</h1>
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-cyan-400">18</h1>
            <h1 className="text-xl text-gray-400 uppercase">Websites</h1>
          </div>
        </div>
        <p className="text-gray-300 max-w-[300px] mx-auto lg:max-w-[4000px]">
          With 2 years of experience building dynamic and user-friendly web
          applications.
        </p>
        <div>
          <h1 className="mt-5 text-4xl font-bold text-cyan-400">Quality First</h1>
          <h1 className="text-md text-gray-400 uppercase">Flexible Budget</h1>
        </div>
      </div>
    </>
  );
};

export default ExperienceTitle;
