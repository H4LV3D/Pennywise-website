import React from "react";
import groovyWalkAnimation from "./Animation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const DynamicComponentWithNoSSR = () => (
  <Lottie
    animationData={groovyWalkAnimation}
    loop
    autoplay
    style={{ width: "100%", height: "100%" }}
  />
);

const LottieComponent = () => <DynamicComponentWithNoSSR />;
export default LottieComponent;
LottieComponent.displayName = "LottieComponent";
