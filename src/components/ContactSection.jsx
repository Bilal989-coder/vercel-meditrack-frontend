import React from "react";

const ContactSection = () => {
  return (
    <section className="mb-10">
      <div className="text-center mb-8">
        <h2 className="text-secondary font-bold text-2xl mb-4 uppercase">Get in Touch</h2>
        <h1 className="text-primary  text-3xl md:text-4xl">Contact</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Emergency Section */}
        <div className="bg-blue-200 hover:scale-105 transition-all p-6 rounded-md shadow-md w-64 text-center">
          <div className="mb-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10a9 9 0 1118 0 9 9 0 01-18 0zm9-4v5m0 4h.01"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-primary">Emergency</h3>
          <p className="text-primary">
            (237) 681-812-255 <br />
            (237) 666-331-894
          </p>
        </div>

        {/* Location Section */}
        <div className="bg-primary p-6 rounded-md hover:scale-105 transition-all shadow-md w-64 text-center">
          <div className="mb-4 text-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.05 10.75a5.25 5.25 0 11-8.1 0m4.05 8.25v2m7-10.25h-4m-6 0H5m0 0l4-4m0 8l-4-4"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-blue-200">Location</h3>
          <p className="text-blue-200">0123 Some place <br /> 9876 Some country</p>
        </div>

        {/* Email Section */}
        <div className="bg-blue-200 p-6 hover:scale-105 transition-all rounded-md shadow-md w-64 text-center">
          <div className="mb-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8a9 9 0 1118 0 9 9 0 01-18 0zm9-4v5m0 4h.01"
              />
            </svg>
          </div>
        <div>
        <h3 className="font-bold text-lg text-primary">Email</h3>
          <p className="text-primary">
            fildineesoe@gmail.com <br />
            myebstudios@gmail.com
          </p>
        </div>
    </div>

        {/* Working Hours Section */}
        <div className="bg-blue-200 p-6 rounded-md hover:scale-105 transition-all shadow-md w-64 text-center">
          <div className="mb-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.1 0-2 .9-2 2m0 0c0 1.1.9 2 2 2m0-4c1.1 0 2 .9 2 2m-2 2v4m0 0c-4.418 0-8-3.582-8-8 0-.964.193-1.885.54-2.707M4.54 12.707c.5.693 1.155 1.282 1.936 1.72M4.5 20.5l-1.5-2m7.5-10l1.5-2m7 0h-3m-3 0h-1m5 5c.964 0 1.885.193 2.707.54m0 0c.693.5 1.282 1.155 1.72 1.936M12 4V2"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-primary">Working Hours</h3>
          <p className="text-primary">
            Mon-Sat 09:00-20:00 <br />
            Sunday Emergency only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
