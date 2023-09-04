import { GraphicIcon } from "@/icons/GraphicIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { StrategyIcon } from "@/icons/StrategyIcon";

export const Benefits = (): JSX.Element => (
    <div className="flex flex-col justify-center h-screen bg-white">
        <p className="text-black text-center font-poppins font-medium text-5xl">Designed for those who live and<br />breathe football passion</p>
        <div className="flex flex-row justify-between mx-20">
            <div className="flex flex-col items-center mt-20 justify-center">
                <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
                    <StrategyIcon width='36' height='36' />
                </div>
                <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Professional strategies<br />within reach</p>
                <p className="text-black text-center font-inter ">Unlock professional tactics and strategies.<br />Elevate your game with insights from football's<br />best minds.</p>
            </div>
            <div className="flex flex-col items-center mt-20 justify-center">
                <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
                    <HeartIcon width='36' height='36' />
                </div>
                <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Passionate Football<br />Community</p>
                <p className="text-black text-center font-inter ">Join a community of like-minded football fans.<br />Share and exchange knowledge, experiences, and insights, <br />fostering a valuable network of support.</p>
            </div>
            <div className="flex flex-col items-center mt-20 justify-center">
                <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
                    <GraphicIcon width='36' height='36' />
                </div>
                <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Detailed Analysis for<br />Improvement</p>
                <p className="text-black text-center font-inter ">Receive detailed performance analysis to improve<br />strengths and address areas for growth using<br />accurate data.</p>
            </div>
        </div>
    </div>
)