import DownloadCv from './DownloadCv';

const Header = () => {
  return (
    <div className="h-15 border-b border-gray relative">
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <DownloadCv />
      </div>
      
      <div className="w-[281px] h-15 border-r border-gray">
        <h1 className="uppercase font-semibold text-center text-4xl text-text m-5 mb-1 underline underline-offset-4">
          Joni <span className="text-4xl text-red underline">Laine</span>
        </h1>
        <h2 className="uppercase font-semibold mx-4 text-center text-red font text-custom-size">
          Full stack Web Developer
        </h2>
      </div>
    </div>
  );
};

export default Header;