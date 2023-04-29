import { View } from "react-native"
import dimensionConstants from "../../../constantConfig"
const Wrapper=({children,styles})=>{
    return (
        <View 
        style={{
            width:dimensionConstants.screen.width *.95,
            height:dimensionConstants.screen.height *.95,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            padding:10,
            gap:10,
            ...styles
        }}
        >
            {children}
        </View>
    )
}

export default Wrapper;