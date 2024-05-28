import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const useScrollGrowHook = () => {
    const componentsRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:componentsRef,
        offset:['0 1','1.2 1']
    });
    const scaleValue = useTransform(scrollYProgress,[0,1], [0.7,1])
    const opacityValue = useTransform(scrollYProgress,[0,1], [0.1,1])

    const style = {scale:scaleValue,opacity:opacityValue}
    
    return {componentsRef,style}
};

export default useScrollGrowHook;