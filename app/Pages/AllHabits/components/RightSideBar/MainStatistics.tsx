import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { defaultColor, darkModeColor } from "@/colors";

function MainStatistics() {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;

    const statisticsInfo = [
        { id: 1, num: 10, subTitle: "Best streaks" },
        { id: 2, num: 12, subTitle: "Perfect days" },
    ];

    return (
            <div
            style={{
                backgroundColor: isDarkMode
                    ? darkModeColor.backgroundSlate
                    : defaultColor.backgroundSlate,
            }} 
                className="flex mx-4 flex-col gap-6 justify-center items-center mt-14 rounded-xl p-5 pt-7"
            >
                <span className="font-bold text-xl cursor-pointer hover:text-customRed">
                    Statistics
                </span>

            {/* The circular progress bar */}
            <div className="relative pt-3">
                <CircularProgressBar progress={80} />
                <div className="flex flex-col justify-center items-center absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="font-bold text-xl text-customRed">80%</span>
                    <span className="text-[11px]">{ `Today's Progress` }</span>
                </div>
            </div>

            {/* Streaks and perfect days */}
            <div className="my-4 w-full flex justify-center gap-6 flex-wrap items-center w-full">
                {statisticsInfo.map((singleItem, singleItemIndex) => (
                    <div className="flex items-center gap-3" key={singleItemIndex}>
                        <div className="flex h-2 w-2 bg-customRed rounded-full"></div>
                        <span className="flex flex-col font-bold">{singleItem.num}</span>
                        <span 
                            style={{
                                color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor50,
                            }}
                            className=" "
                            >
                            {singleItem.subTitle}</span>
                    </div>
                ))}
            </div>
            </div>
    );
}

interface CircularProgressBarProps {
   progress: number; 
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({  
    progress,  
}) => {  
    const data = [  
        { name: "Completed", value: progress },  
        { name: "Remaining", value: 100 - progress },  
    ];  

    const COLORS = [defaultColor.default, "#edf2f4"];  

    return (  
        <PieChart  
            width={200}  
            height={200}  
            // className="bg-red-300"  
            margin={{ top: -20, right: 0, bottom: 40, left: 0 }}  
        >  
            <Pie  
                data={data}  
                cx={100}  
                cy={100}  
                startAngle={180}  
                endAngle={-180}  
                innerRadius={66}  
                outerRadius={progress === 100 ? 80 : 78}  
                fill="#8844d8"  
                paddingAngle={0}  
                dataKey="value"  
                stroke="none"
            >  
                {data.map((entry, index) => (  
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />  
            ))}  
</Pie>  
        </PieChart>  
    );  
};  

export default MainStatistics;
