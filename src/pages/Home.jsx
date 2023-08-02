import React from "react";
import Header from "../components/headers/Header";
import List from "../components/lists/List";
import RegistrationForm from "../components/forms/RegistrationForm";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <main className="hero-pattern pt-12 box-border w-screen">
      <div className="flex justify-between items-center box-border ml-32 pr-28">
        <div className="w-[734px] flex flex-col justify-center items-center">
          <div className="text-center">
            <Header />
          </div>
          <List
            content={[
              "Get access to IELTS Centralised Library",
              "British Council Certified Teacher",
            ]}
            styles={"text-center list-inside mt-5"}
          />
          <RegistrationForm />
        </div>
        <div className="w-96 h-96 shrink-0 relative bg-sky-950 rounded-full background-student">
          <img
            className="w-96 z-10 h-[420px] absolute bottom-0 rounded-b-full object-scale-down"
            src="/images/student.png"
            alt="student"
          />
        </div>
        <img
          className="origin-top-left h-[800px] absolute top-20 right-0"
          src="/images/background.svg"
          alt="background-pattern"
        />
      </div>
      <Cards />
      <div className="bg-gradient-to-r from-sky-950 to-purple-950 rounded-[105px] flex justify-evenly mt-20">
        <div className="w-96 h-96 rounded-3xl mt-48">
          <img
            className="w-full h-full"
            src="/images/mobile.png"
            alt="mobile"
          />
        </div>
        <div>
          <div>
            <h1 className="text-6xl font-bold text-white mt-20">
              Our Services
            </h1>
          </div>
          <div className="grid-cols-2 text-white mt-32">
            <div>
              <div className="w-24 h-24 bg-white rounded-3xl border border-gray-400 flex justify-center items-center">
                <img
                  className="w-12 h-12"
                  src="/images/accommodation.png"
                  alt="accommodation"
                />
              </div>
              <h6 className="text-white text-2xl font-bold mt-4">
                Accommodation
              </h6>

              <List
                content={[
                  "20,000+ Listed Properties  across 5 countries.",
                  "100+cities",
                ]}
                styles={"mt-7"}
              />
            </div>
            {/* <div>
              <img src="" alt="" />
              <h6></h6>
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <h6></h6>
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <h6></h6>
              <p></p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
