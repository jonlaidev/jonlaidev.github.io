const LeftColumn = () => {

  return (
    <div className="border-r border-gray">
      <div className="bg-bg border border-text m-8">
          <img src="../img/jonlaidev(LOGO).jpg" alt="profile picture" width="100%" height="100%" />
      </div>
      <div className="w-[280px]">
        <h2 className="text-4xl text-center">Hello!</h2>
          <p className="text-balance text-center">
            I'm a passionate to become full stack web developer with a keen eye for detail and a love for crafting seamless user experiences.
             Let's build something amazing together!
          </p>
      </div>
      <div className="m-8 text-center">
        <h2 className="text-3xl text-center">Contact details</h2>
        <p className="text-gray">Email:</p>
        <p>jonlaidev@gmail.com</p>
        <p className="text-gray">Adress:</p>
        <p>Vihti, Suomi</p>
        <p>03400</p>
      </div>
      <a href="mailto:jonlaidev@gmail.com" className="m-8 block bg-red h-[50px] relative z-10  hover:bg-gray">
        <span className="absolute -bottom-5 -left-5 size-8 z-20 bg-repeat rotate-45"></span>
        <span className="absolute -top-5 -right-5 size-8 z-20 bg-repeat rotate-45"></span>
        <span className="text-center text-text w-full h-10 absolute -text-2 font-bold pt-4 -top-1 bottom-2 border-t border-b border-gray pb-10">
          Send me a message </span>
      </a>
      <div className="m-8 text-3xl text-center">
        <h2 className="p-2">Get social</h2>
        <div className="flex flex-col gap-4">
          <div>
            <a className="bg-red py-2 px-4 text-text rounded-r-[50px] hover:bg-[#E1306C] text-lg flex items-center gap-2" href="https://www.instagram.com/">
              Instagram
            </a>
          </div>
          <div>
            <a className="bg-[#007bb6] text-text rounded-r-[50px] hover:bg-blue-700 py-2 px-4 text-lg flex items-center gap-2" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;