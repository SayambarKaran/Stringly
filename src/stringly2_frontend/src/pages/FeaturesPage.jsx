import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";

const FeaturesPage = () => {
    const [hovered, setHovered] = useState([false, false, false]);

    const handleHover = (index) => {
        if (!hovered[index]) {
            const newHovered = [...hovered];
            newHovered[index] = true;
            setHovered(newHovered);
        }
    };
    return (
        <>
            <section>
                <div className='relative w-full'>
                    <img src="./features/heroImg.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen md:h-auto' />
                    <div className='absolute top-80 text-center left-4 md:top-[35%] lg:top-[35%] lg:left-[33%] p-4 text-white lg:w-[560px] lg:h-[254px]'>
                        <h1 className='font-bold font-roboto leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px]'>Premium Features <h2 className='text-center bg-clip-text text-transparent' style={{ backgroundImage: 'linear-gradient(90deg, #0508D6 30.34%, #AF2C80 53.17%, #DC73B6 73.67%, #F1C7E2 85.17%)' }}>
                            Unveiled
                        </h2></h1>
                        <p className='mt-4 text-lg text-center font-roboto font-regular leading-[27px]'>
                            Explore the exceptional features that make Stringly the ultimate choice for discerning individuals.
                            Our platform combines luxury, privacy, and cutting-edge technology to enhance your dating and
                            networking experience.
                        </p>
                    </div>
                </div>
            </section>
            <section className='px-4'>
                <div className='w-full flex items-center justify-between flex-col py-12 text-[18px]'>
                    <div className='text-center gap-4 lg:w-[768px] flex items-center justify-between flex-col'>
                        <p className='hidden md:block text-[40px] font-sf font-semibold leading-[48px] font-semibold'>
                            Experience Unmatched Security and Luxury in Every Connection You Make.
                        </p>
                        <p className='text-[40px] font-sf font-semibold leading-[48px] font-semibold md:hidden'>
                            Experience  Security and Luxury
                        </p>
                        <p className='leading-[27px] font-jakarta'>
                            At Stringly, we prioritize your safety and privacy. Our Secure Connections feature ensures that every interaction is protected by cutting-edge technology. Enjoy peace of mind while forging meaningful relationships.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-evenly gap-4 py-4 lg:px-2 flex-wrap'>
                    <div class="card relative w-[363px] md:w-[408px] h-[377px] bg-black rounded-2xl text-white overflow-hidden opacity-[1]">
                        <img
                            src="./features/Card1.png"
                            alt="features"
                            class="card-image w-full h-full object-cover opacity-[50%] rounded-2xl transition-transform duration-400"
                        />
                        <div class="card-content absolute md:w-[326px] top-[229px] left-[15px] md:left-[41px]">
                            <p class="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                Tailored Matches Designed for Your Unique Preferences and Lifestyle.
                            </p>

                            <p class="card-description opacity-0 transition-opacity duration-500">
                                Our Premium Matchmaking service connects you with individuals who truly align with your values.
                            </p>
                            <button class="card-button flex items-center gap-2 absolute border-2 rounded-lg px-4 py-2 my-2">
                                Sign Up
                            </button>
                        </div>
                        <p className='learnMore absolute bottom-6 left-12 text-[18px] flex items-center gap-2 '>Learn More <FaChevronRight /></p>
                    </div>
                    <div class="card relative w-[363px] md:w-[408px] h-[377px] bg-black rounded-2xl text-white overflow-hidden opacity-[1]">
                        <img
                            src="./features/Card2.png"
                            alt="features"
                            class="card-image w-full h-full object-cover opacity-[50%] rounded-2xl transition-transform duration-400"
                        />
                        <div class="card-content absolute md:w-[326px] top-[229px] left-[15px] md:left-[41px]">
                            <p class="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                Tailored Matches Designed for Your Unique Preferences and Lifestyle.
                            </p>

                            <p class="card-description opacity-0 transition-opacity duration-500">
                                Our Premium Matchmaking service connects you with individuals who truly align with your values.
                            </p>
                            <button class="card-button flex items-center gap-2 absolute border-2 rounded-lg px-4 py-2 my-2">
                                Sign Up
                            </button>
                        </div>
                        <p className='learnMore absolute bottom-6 left-12 text-[18px] flex items-center gap-2 '>Learn More <FaChevronRight /></p>
                    </div>
                    <div class="card relative w-[363px] md:w-[408px] h-[377px] bg-black rounded-2xl text-white overflow-hidden opacity-[1]">
                        <img
                            src="./features/Card3.png"
                            alt="features"
                            class="card-image w-full h-full object-cover opacity-[50%] rounded-2xl transition-transform duration-400"
                        />
                        <div class="card-content absolute md:w-[326px] top-[229px] left-[15px] md:left-[41px]">
                            <p class="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                Tailored Matches Designed for Your Unique Preferences and Lifestyle.
                            </p>

                            <p class="card-description opacity-0 transition-opacity duration-500">
                                Our Premium Matchmaking service connects you with individuals who truly align with your values.
                            </p>
                            <button class="card-button flex items-center gap-2 absolute border-2 rounded-lg px-4 py-2 my-2">
                                Sign Up
                            </button>
                        </div>
                        <p className='learnMore absolute bottom-6 left-12 text-[18px] flex items-center gap-2 '>Learn More <FaChevronRight /></p>
                    </div>

                </div>
            </section>
            <section>
                {/* first card */}
                <div
                    className={`ppp p-4 py-8 lg:p-0 lg:flex relative items-center justify-between pt-24 ${hovered[0] ? 'hovered' : ''}`}
                    onMouseEnter={() => handleHover(0)}
                >
                    <div className={`child hidden lg:block w-[616px] ml-[100px] m-auto opacity-0`}>
                        <p className='font-roboto font-bold text-[40px] leading-[48px] py-8'>
                            Experience Unmatched Privacy with Stringly's Secure Connections Powered by ICP
                        </p>
                        <p className='text-[18px] font-roboto font-regular leading-[27px]'>
                            Our Premium Matchmaking service uses advanced algorithms to connect you with like-minded individuals. By analyzing your preferences and goals, we ensure that every match is meaningful and aligned with your aspirations.
                        </p>
                    </div>
                    <div className='lg:w-auto z-20'>
                        <img src="./features/Rectangle 1.png" alt="" className='h-screen lg:h-auto object-cover' />
                    </div>
                </div>

                {/* second card */}
                <div className={`ppp p-4 py-8 lg:p-0 lg:flex items-center justify-between ${hovered[1] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(1)}>
                    <div className='z-20'>
                        <img src="./features/Rectangle 2.png" alt="" className='h-screen lg:h-auto object-cover' />
                    </div>
                    <div className='child-2 hidden lg:block w-[756px] w-[616px] ml-[100px] m-auto  '>
                        <div>
                            <p className='font-roboto font-bold text-[40px] leading-[48px]'>
                                Experience Premium Matchmaking: Tailored Connections for Your Unique Journey
                            </p>
                            <p className='font-roboto font-regular text-[18px] leading-[27px] py-8'>
                                Our Premium Matchmaking service uses advanced algorithms to connect you with like-minded individuals. By analyzing your preferences and goals, we ensure that every match is meaningful and aligned with your aspirations.
                            </p>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <div className='flex flex-col w-[296px]'>
                                <p className='text-[20px] font-roboto font-bold leading-[28px]'>
                                    Smart Algorithms
                                </p>
                                <p className='font-roboto font-regular text-[16px] leading-[24px]'>
                                    Our algorithms consider interests, values, and relationship goals for optimal matches.
                                </p>
                            </div>
                            <div className='w-[296px]'>
                                <p className='text-[20px] font-roboto font-bold leading-[28px]'>
                                    Personalized Experience
                                </p>
                                <p>
                                    Every user receives tailored recommendations based on their unique profile and preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className={` ppp p-4 py-8 lg:p-0 lg:flex items-center justify-between ${hovered[2] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(2)}>
                    <div className='child hidden lg:block w-[756px] w-[616px] ml-[100px] m-auto  opacity-0 '>
                        <div>
                            <p className='font-roboto font-bold text-[40px] leading-[48px]'>
                                Long heading is what you see here in this feature section
                            </p>
                            <p className='font-roboto font-regular text-[18px] leading-[27px] py-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.                            </p>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <div className='flex flex-col w-[296px] '>
                                <p className='text-[20px] font-roboto font-bold leading-[28px]'>
                                    Subheading one
                                </p>
                                <p className='font-roboto font-regular text-[16px] leading-[24px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.                                </p>
                            </div>
                            <div className='w-[296px]'>
                                <p className='text-[20px] font-roboto font-bold leading-[28px]'>
                                    Subheading two
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='z-20'>
                        <img src="./features/Rectangle 3.png" alt="" className='h-screen lg:h-auto object-cover' />
                    </div>
                </div>
            </section>
            <section className='backdrop-blur-custom'>
                <div className='flex items-center justify-center text-center py-10'>
                    <div className='flex items-center justify-center flex-col text-center w-[568px] p-[18px] gap-[32px]'>
                        <img src="./features/Logo_webflow.png" alt="" />
                        <p>"Stringly transformed my dating life. The luxury and privacy made all the difference in finding genuine connections."</p>
                        <div className='flex items-center justify-center flex-col text-center'>
                            <img src="./features/Profile.png" alt="" className='pb-4' />
                            <p>Emily Johnson</p>
                            <p>Marketing Director, LuxeCo</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='px-4 lg:p-0 flex items-center justify-center gap-10'>
                    <div className='w-[616px] hidden lg:block'>
                        <div>
                            <p className='text-[48px] font-sf font-semibold'>Experience the Luxury of Meaningful Connections</p>
                            <p className='font-jakarta font-regular leading-[27px] text-[18px] py-4'>Stringly offers a unique blend of privacy and luxury, ensuring that every connection is secure and exclusive. Enjoy access to a curated community of high-profile users who value meaningful interactions.</p>
                        </div>
                        <ul className='font-sf font-regular leading-[30px]'>
                            <li>Enhanced privacy for your personal and professional connections.</li>
                            <li>Exclusive access to a premium user network.</li>
                            <li>A luxurious experience tailored to your dating needs.</li>
                        </ul>
                        <div className='py-10 flex gap-8'>
                            <button className='px-8 py-2 border-2 border-black'>Join</button>
                            <button className='flex items-center gap-4'>Discover <FaChevronRight /></button>
                        </div>
                    </div>
                    <div>
                        <img src="./features/Placeholder Image.png" alt="" className='object-cover' />
                    </div>
                </div>
            </section>
            <div className='flex items-center justify-center flex-col mb-20'>
                <div className='flex items-center justify-center flex-col p-8 lg:w-[727px]'>
                    <p className='font-roboto text-[32px] lg:text-[48px] text-center font-bold  leading-[38px] lg:leading-[57px] py-6'>Join the Exclusive Network</p>
                    <p className='font-roboto font-regular text-[18px] leading-[27px] text-center'>Experience luxury and privacy like never before with Stringly’s unique dating and networking platform.</p>
                </div>
                <div className='flex items-center justify-between gap-8 py-10'>
                    <button className='bg-black text-white p-3 px-8 font-sf rounded-lg'>Sign Up</button>
                    <button className='border-2 border-black p-3 px-8 font-sf rounded-lg'>Learn More</button>
                </div>
            </div>
        </>

    )
}

export default FeaturesPage