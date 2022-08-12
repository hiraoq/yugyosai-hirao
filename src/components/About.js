import React from 'react';
import secondSurface from '../assets/images/second-surface.jpg';

export default function About() {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">イカの仕入れは不安定です</h2>
            <p className="text-white-50">
              イカは不漁により提供できないことが多々あります。
            </p>
          </div>
        </div>
        <img img-fluid src={secondSurface} className="img-fluid" alt="" />
      </div>
    </section>
  );
}