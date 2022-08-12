import React from 'react';
import bgIkesu from '../assets/images/bg-ikesu.jpg';
import ikesu1 from '../assets/images/ikesu-01.jpg';
import ikesu2 from '../assets/images/ikesu-02.jpg';
import ikesu3 from '../assets/images/ikesu-03.jpg';
import ikesu4 from '../assets/images/ikesu-04.jpg';

export default function Ikesu() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgIkesu} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h2>いけす</h2>
              <p className="text-black-50 mb-0">
                イカや魚が泳いでいます。
                <br />
                掬って調理します。
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={ikesu1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white">
                    魚や貝がいます
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={ikesu2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <p className="mb-0 text-white">
                    珍しい魚もいるかも
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={ikesu3} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white">
                    カワハギとか
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={ikesu4} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <p className="mb-0 text-white">
                    イカ
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}