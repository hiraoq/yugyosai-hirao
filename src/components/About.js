import React from 'react';
import secondSurface from '../assets/images/second-surface.jpg';

export default function About() {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">メッセージ</h2>
            <p className="text-white-50">
              メッセージメッセージメッセージ
            </p>
          </div>
        </div>
        <img img-fluid src={secondSurface} className="img-fluid" alt="" />
      </div>
    </section>
  );
}