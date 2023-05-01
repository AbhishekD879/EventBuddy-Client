import {Slot,usePathname} from "expo-router"
import Model from "../components/LandingComponent/Model";
import Header from "../components/LandingComponent/Header";
import { useState } from "react";
import withSafeAreaWrapper from "../Utils/decorators/withSafeAreaView";
import FooterComponent from "../components/LandingComponent/FooterComponent";
const pathToAvoid:string[]=["/login","/register","/register/with-email"]
const LandingLayout=({segment})=>{
    const path= usePathname()
    const [sidebarVisible, setSidebarVisible] = useState(false);
    if(pathToAvoid.includes(path)) return <Slot />;
    return <>
        <Header setSidebarVisible={setSidebarVisible}/>
        <Slot />
        <Model sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
        <FooterComponent/>
    </>;
}
export default withSafeAreaWrapper(LandingLayout);