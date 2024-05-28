import BatteryReplacement from "@/components/ServicesCard/BatteryReplacement";
import ChipSetReplacement from "@/components/ServicesCard/ChipSetReplacement";

const ServicesSection = () => {
  return (
    <div className="lg:mx-10 lg:mb-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold">Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement/>
       <ChipSetReplacement/>
        <div className="bg-light-gray h-[415px] rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-light-gray h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
