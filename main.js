import { useState, useEffect } from "react";
import "./../main/main.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="App">
        <div className="conatiner-fluid">
          <div className="grides">
          <div className="imgone">
            <div className=" "> 
              <div  className="text">
            <h1 className="display-1 fw-bold justify-content-center">
   Discover the Best Shopping, Dining and Entertainment at
   Nilkanth Plaza

 </h1></div></div>

{/*               
              <h1 className="display-1 fw-bold text-white">
                Discover the Best
              </h1>
              <h1 className="display-1 fw-bold text-white">
                {" "}
                Shopping, Dining and{" "}
              </h1>

              <h1 className="display-1 fw-bold text-white">
                {" "}
                Entertainment at
              </h1>

              <h1 className="display-1 fw-bold text-white"> Nilkanth Plaza</h1> */}

              <p className="para">
                With a wide variety of stores, restaurants, and entertainment
                options, our shopping center has something for everyone. From
                fashion and beauty to home and garden, you'll find everything
                you need and more. Plus, with convenient parking and easy
                access, you can enjoy a seamless shopping experience every time
                you visit. Come see us today and discover why we're the go-to
                destination for all your shopping needs.
              </p>
            </div>
            <br />
            <br />
            <div class="slate-spacer r2ud8k0" style={{height: '125px', width: '700px'}}></div>

            <div className="container mt-5">
            <div data-aos="zoom-in-up" >
              <p style={{ fontWeight: "bold", fontSize: 80, color: "black",  textAlign:'left' }}>
                <b>About Us</b>{" "}
              </p>
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: 30 }}
                className="text-secondary"
              >
                <p  style={{   textAlign:'left' }}>
                We are a real estate agency that has been established since
                  2004 with many
               <br />
                  dvantages over our competitors. We have more than 500 happy
                  customers
                
            <br/>And have worked with more than 200 distributors </p>
              </div>
            </div>
            <div class="slate-spacer r2ud8k0" style={{height: '125px', width: '700px'}}></div>

            <div data-aos="zoom-in" className="">
              <div className="container-fluid">
                {" "}
                <div className="row">
                  <div className="col-md-3">
                    {" "}
                    <img src="ab2_.avif" style={{ width: "400px" }} />{" "}
                  </div>

                  <div className="col-md-2">
                    {" "}
                    <img src="ab3.avif" style={{ width: "300px" }} />{" "}
                  </div>
                  <div className="col-md-2">
                    <img src="ab32.avif" style={{ width: "300px" }} />
                  </div>{" "}
                  <div className="col-md-2">
                    <img src="ab1.avif" style={{ width: "400px" }} />
                  </div>
                  <div className="col-md-3">
                    <img src="ab4.avif" style={{ width: "300px" }} />
                  </div>{" "}
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="">
              <h1 style={{ fontWeight: "bold", fontSize: 70, color: "black" }}>
                Why Choose Us
              </h1>
              <div class="slate-spacer r2ud8k0" style={{height: '125px', width: '700px'}}></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <svg
                    style={{ color: 'blue' ,fontWeight: "bold", fontSize: 70}}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                    <h1>Best Price</h1>

                    <p>
                      We will provide the best price for you. We will give you a
                      special price compared to other places and we will give
                      you other benefit. heyy welcome{" "}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <svg
                    style={{ color: 'blue' ,fontWeight: "bold", fontSize: 70}}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock-history"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <h1>Quick Process</h1>

                    <p>
                      We will provide the best price for you. We will give you a
                      special price compared to other places and we will give
                      you other benefit. heyy welcome{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row  justify-content-center">
                  <div className="col-md-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone-inbound"
                      viewBox="0 0 16 16"
                    >
                      <path style={{ color: 'blue' ,fontWeight: "bold", fontSize: 70}} d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <h1>Custom by Request</h1>

                    <p>
                      We will provide the best price for you. We will give you a
                      special price compared to other places and we will give
                      you other benefit. heyy welcome{" "}
                    </p>
                  </div>
                  <div className="col-md-6" >
                    <svg
                
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-buildings"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                      <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                    </svg>
                    <h1>Property Insurance</h1>

                    <p>
                      We will provide the best price for you. We will give you a
                      special price compared to other places and we will give
                      you other benefit. heyy welcome{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="slate-spacer r2ud8k0" style={{height: '125px', width: '700px'}}></div>
            {/* <h1 class="slate-h1 scale-in-grow animated-block-visible ohgk4r1 ohgk4r0" style={{width:'700px' ,textalign: 'center'}}><span class="_1untytp0">Our Statistics</span></h1> */}
            <div data-aos="zoom-in-up" className="">
              <h1>
                <b className="diaplay-1  " style={{ fontWeight: "bold", fontSize: 70, color: 'black'  }}>Our Statistics</b>{" "}
              </h1>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h1 style={{ color: 'blue' , fontWeight: "bold", fontSize: 120}}>3+</h1>

                    <p>Ongoing Projects</p>
                  </div>
                  <div className="col-md-4">
                    <h1 style={{ color: 'blue' ,fontWeight: "bold", fontSize: 120}}>90+</h1>

                    <p>Property </p>
                  </div>
                  <div className="col-md-4">
                    <h1 className=""  style={{ color: 'blue' ,fontWeight: "bold", fontSize: 120}}> 1K+</h1>
                    <p>Happy Customers </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="slate-spacer r2ud8k0" style={{height: '150px', width: '700px'}}></div>

            {/* <div className="row justify-content-center " id="counter-section" >
           <div className="col-md-3 text-center text-dark mt-5 mb-3">
             
              <h1>+34789 <br />
              Happy Clients</h1>
           </div>
           <div className="col-md-3 text-center text-dark mt-5 mb-3">
             
             <h1>+34789 <br />
             Happy Clients</h1>
          </div>
          <div className="col-md-3 text-center text-dark mt-5 mb-3">
             
             <h1>+34789 <br />
             Happy Clients</h1>
          </div>
           <div>

           </div>
      </div> */}
            <div data-aos="zoom-in-up" className=""></div>

            <div className="background-img">
              <h1
                className="jay"
                style={{ fontWeight: "bold", fontSize: 25, color: "white" }}
              >
                Get Special Offers and Enjoy a Happier Life in Your New Home
              </h1>
              <button className="btn btn-info  ">Contact Us</button>
            </div>
            <div className="container-fluid w-100">
              <div className="row">
            <p className="dev" >
              <b >
Shukla Developers</b></p>
          </div>
          </div>
          </div>
        </div>
        {/* <div role="none" class="slate-container _1bgwy4x2 _1bgwy4x9 _1bgwy4x0" style={{minheight:'517px',width:'100%',maxwidth:'100%', background: 'black'}}>
          <div class="slate-spacer r2ud8k0" style={{height: '50px', width: '700px'}}></div>
          <h1 class="slate-h1 ohgk4r1 ohgk4r0" style={{width:'700px'}}><span class="_1untytp0">
            <span style="color: rgb(241, 128, 153);">
              <span style={{backgroundimage: lineargradient('135deg', rgb(255, 204, 51) ),  backgroundclip: text, webkittextfillcolor: transparent, webkitboxdecorationbreak: clone, backgroundrepeat: no-repeat}}>          
         Shukla Developers</span></span></span></h1><div class="slate-spacer r2ud8k0" style="height: 50px; width: 700px; max-width: min(100%, 700px);"></div></div>
        <div class="slate-spacer r2ud8k0" style={{height: '125px', width: '700px'}}></div>

         */}
      </div>

      
    </>
  );
}

export default Main;
