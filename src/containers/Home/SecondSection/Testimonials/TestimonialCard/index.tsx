import Image from "next/image";

import Rating from "./Rating";

const TestimonialCard = () => {
    return (
        <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
            <div className="flex mb-4">
                <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
                    <Image 
                        src="/assets/home/profile.png"
                        alt="Profile dummy"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </figure>

                <div className="flex-flex-col">
                    <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
                        Hisyam H
                    </p>
                    <p className="text-heading-5 text-gray-50 font-bold">
                        Jakarta TImur, DKI Jakarta
                    </p>
                </div>
            </div>

            <Rating />

            <p className="text-heading-5 text-gray-70 my-4">
                Nyari makanan halal gampang banget udah ada tour guidenya, tour guidenya ramah-ramah, dan penginapannya pun nyaman dan aman
            </p>

            <p className="text-heading-5 text-gray-100 font-bold">
                Nusa Penida, Bali
            </p>
            <p className="text-heading-6 text-gray-50">
                06-02-2023
            </p>
        </article>
    )
}

export default TestimonialCard;