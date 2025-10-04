import Image from "next/image"
import { FancyButton } from "./fancybutton"

export const FrontCard = () => {
    return (
        <div className={`bg-green-200 w-full h-fit flex flex-col`}>
            <div className={`flex`}>
                <div className={`p-10 text-gold-950 w-full space-y-3`}>
                    <p className={`text-4xl`}>University of Manitoba</p>
                    <h1 className={`text-7xl`}>PHILOSOPHY</h1>
                    <p className={`text-4xl`}>Student Association</p>
                    <p className={`text-3xl`}>Filler Text</p>
                    <br className={`h-3`} />
                    <div className={`w-1/2`}>
                        <FancyButton
                            href="./"
                            label="Become a PSA Member"
                            bgcolour="bg-green-400" />
                    </div>
                </div>
                <div className={`relative w-[30vw] h-[30vw]`}>
                    <Image
                        className={``}
                        src={`svg/phi-green.svg`}
                        alt={`greek letter phi`}
                        fill={true}
                    />
                </div>
            </div>
            <div className={`relative items-start w-140 h-54`}>
                <Image
                    className={``}
                    src={`svg/laurel-green.svg`}
                    alt={`a laurel leaf that is green`}
                    fill={true}
                />
            </div>
        </div>
    )
}
