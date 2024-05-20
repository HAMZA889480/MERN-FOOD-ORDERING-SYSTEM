import landingImage from "../../assets/landing.png";
import appDownload from "../../assets/appDownload.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-xl py-8 text-center flex flex-col gap-5 -mt-12">
        <h1 className=" text-orange-600 text-3xl tracking-tight font-bold ">
          Tuck in to the best food in town
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>

      <div className=" grid md:grid-cols-2 gap-5 mt-20">
        <img src={landingImage} alt="default" />
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <span className="text-3xl font-bold text-orange-500">
            Welcome to Foodie Moodie
          </span>
          <span className="text-lg">
            Download Foodie Moodie for faster and quicker order at anytime
          </span>
          <img src={appDownload} alt="app download" />
        </div>
      </div>
    </div>
  );
}
