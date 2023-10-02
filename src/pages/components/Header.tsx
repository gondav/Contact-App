import settingsSrc from "../../icons/settings.png";
import backArrowSrc from "../../icons/back-arrow.png";
import lightModeSrc from "../../icons/light-mode.png";
import addSrc from "../../icons/add.png";
import profilePicSrc from "../../icons/profile-pic.png";

const Header = () => {
  return (
    <header>
      <div className="h-14 border-b border-customGrey-60 md:h-24 ">
        <div className="mx-auto h-full max-w-3xl border-customGrey-60 md:border-x"></div>
      </div>
      <div className="h-24 border-b border-customGrey-60">
        <div className="flex h-24 items-start justify-center md:items-center">
          <img
            className="mx-4 mt-3 md:mx-6 md:mt-0"
            src={backArrowSrc.src}
            alt="Back arrow"
          />
          <div className="h-full w-[48rem] border-customGrey-60 md:border-x  md:p-6">
            <nav className="flex h-full flex-col items-center justify-between md:flex-row">
              <h1>Contacts</h1>
              <div className="flex h-full items-center">
                <img className="mr-4" src={settingsSrc.src} alt="Settings" />
                <img
                  className="mr-4 md:mr-8"
                  src={profilePicSrc.src}
                  alt="Profile picture"
                />
                <button className="btn-prio flex items-center rounded-3xl bg-customGrey-60 px-3 py-2">
                  <img className=" md:mr-3" src={addSrc.src} alt="Add" />
                  <span className="hidden text-white md:block">Add new</span>
                </button>
              </div>
            </nav>
          </div>
          <img
            className="mx-4 mt-3 md:mx-6 md:mt-0 "
            src={lightModeSrc.src}
            alt="Light mode"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
