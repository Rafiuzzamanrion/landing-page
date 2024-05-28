import useScrollGrowHook from "@/Hooks/ScrollGrowHook";
import {motion} from "framer-motion";


const BatteryReplacement = () => {
   const {style,componentsRef} = useScrollGrowHook()
  
    return (
        <motion.div style={style} ref={componentsRef} className="bg-light-gray h-[415px] rounded-2xl col-span-12"></motion.div>
    );
};

export default BatteryReplacement;