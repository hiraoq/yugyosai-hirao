import React from 'react';
import config from '../../config';
import Scroll from '../components/Scroll';

export default function MastHead() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="projects">
            <a href="#projects" className="btn btn-primary">
              お料理
            </a>
          </Scroll>
        </div>
      </div>
    </header>
  );
}