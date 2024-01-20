

import Navbar from "./(components)/navbar/navbar";
import Card from "./(components)/card/card";
import Line from "./(components)/lining/lining";
import BeautifulCard from "./(components)/lightcard/lightcard";
import Animate from "./(components)/typeanimation/typeanimation";
import Footer from "./(components)/footer/footer";


export default function Contact() {
  return (
    <>
    <div className=" bg-slate-300">
      <header className="relative bg-cover w-full h-auto">

        {/* Background image */}
        <img
          className="object-cover w-full h-90 rounded-lg mb-4"
          src="/Header-image.jpg"
          alt=""
        />


        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
       <Animate/>
          <div className=" text-white pl-20 -mt-10">Providing world class Tech-solutions to digitally transform your<br/>
           business. Say goodbye to frustration and hello to a world where<br/>
            technology obstacles become a thing of the past with our<br/>
             unparalleled tech-solution.</div>
        </div>
               
        {/* Container for additional header content */}
        <div className="container mx-auto px-4 py-8">
          {/* Additional header content if needed */}
        </div>
      </header>
      <div>


        {/* Service section start */}

        <div className=" h-auto w-100 flex flex-wrap flex-col items-center
        ">
          <div>
            <p className=" text-4xl font-bold text-blue-400 hover:text-red-400"> Our Services </p>
            <div className=" w-30 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          </div>
          <div className="w-full flex flex-wrap  justify-evenly ">
            <Card title="Web App Development" image="/website-picture.png"  dec="Full Stack Develpment with Cross Browser Compatibility" />
            <Card title="Mobile App Development" image="/5721489.jpg" />
            <Card title="AI Base Solutions" image="/Ai-picture.jpg"  />
          </div>
        </div>
      </div>
      {/* Service section End */}
      

    <div className="h-auto w-100 flex flex-wrap flex-col items-start mt-4">
   <Line title="Cantact Us"/>
   <div className=" h-full min-w-0.5 border rounded bg-red-600 border-red-600">Heloo</div>
   <div className="w-full  flex flex-wrap items-start  ">
  <BeautifulCard title="" image="/WhatsApp Image 2024-01-19 at 04.00.00_7e4547a0.jpg" />
   </div>
   <div className=" items-end"> about us</div>
    </div>


      <section className="loacation w-full justify m-20 my-5 mt-6 border-0">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
  width="800"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
></iframe>

    </section>

      {/* Footer section start */}

    </div>
    </>
  );
}
