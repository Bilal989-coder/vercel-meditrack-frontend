import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeSection = () => {
    const navigate = useNavigate()
    return (
        <section className="pt-16  text-center mt-2">
            <h4 className="text-secondary font-bold text-2xl mb-4">Welcome to MediTrack</h4>
            <h2 className=" text-primary text-2xl hidden md:block md:text-4xl  mb-6">
                A Great Place to Receive Care
            </h2>
            <p className="text-black max-w-3xl mx-auto mb-6">
                At MedITRACK, we take pride in being a reliable and compassionate healthcare provider that puts your well-being first. Our dedicated team of healthcare professionals is committed to delivering top-quality care and personalized services to meet your unique needs.
            </p>
            <button onClick={() => { navigate('/about'); scrollTo(0, 0) }} className="bg-primary hover:scale-105 transition-all text-white px-6 py-2 rounded hover:bg-secondary">
                Learn More
            </button>

            <div className="mt-10 pt-4 ipad-hidden mx-28 hidden md:block lg:hidden xl:block">
                <div
                    className="h-[38vh] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('src/assets/Group 183.png')",
                    }}
                ></div>
            </div>

        </section >
    );
};

export default WelcomeSection;