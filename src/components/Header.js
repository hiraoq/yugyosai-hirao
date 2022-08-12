import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="page-top"
          >
            <a className="navbar-brand" href="#page-top">
              {config.siteTitle}
            </a>
          </Scroll>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${openMenu ? '' : 'collapsed'
              }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="cuisine"
                >
                  <a className="nav-link" href="#cuisine">
                    お料理
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    メッセージ
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="ikesu"
                >
                  <a className="nav-link" href="#ikesu">
                    いけす
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="interior"
                >
                  <a className="nav-link" href="#interior">
                    内装
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="social-link"
                >
                  <a className="nav-link" href="#social-link">
                    ご連絡・アクセス
                  </a>
                </Scroll>
              </li>
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <li className="nav-item nav-link">
                    <a key={url} href={url} className="social">
                      <i className={`fab ${icon}`}></i>
                      <a className='not-hover'>{social.name}</a>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
