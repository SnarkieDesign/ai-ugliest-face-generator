import React, { useState } from 'react';
import Particles from 'react-particles-js';
import './App.css';

function App() {
  const [stage, setStage] = useState('initial');
  const [loadingText, setLoadingText] = useState('Process started');

  const initial = () => {
    setStage('initial');
  }

  const confirm = () => {
    setStage('confirm');
  }

  const launch = () => {
    setStage('launch');

    setTimeout(() => {
      setLoadingText('Booting up supercomputer network');
    }, 2000);

    setTimeout(() => {
      setLoadingText('Found 7,674,329,834 images of faces');
    }, 4000);

    setTimeout(() => {
      setLoadingText('Scanning faces for maximum ugliness');
    }, 6000);

    setTimeout(() => {
      setLoadingText('Disturbing faces found');
    }, 6500);

    setTimeout(() => {
      setLoadingText('Found ugliest nose');
    }, 7500);

    setTimeout(() => {
      setLoadingText('Found ugliest mouth');
    }, 8500);

    setTimeout(() => {
      setLoadingText('Found ugliest eyes');
    }, 9800);

    setTimeout(() => {
      setLoadingText('Found disgusting hair');
    }, 12000);

    setTimeout(() => {
      setLoadingText('Warning: ugliness overload. Server reaching max capacity');
    }, 14000);

    setTimeout(() => {
      setLoadingText('Compositing all ugly features into single face');
    }, 17000);

    setTimeout(() => {
      setLoadingText('Face render complete');
    }, 20000);

    setTimeout(() => {
      result();
    }, 23000);
  }

  const result = () => {
    setStage('result');
  }

  let content;

  if (stage === 'initial') {
    content = (
      <>
        <Particles
          width={451}
          height={515}
          className="particles-face"
          params={{
            "fps_limit": 28,
            "particles": {
              "collisions": {
                "enable": false
              },
              "number": {
                "value": 200,
                "density": {
                  "enable": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 30,
                "opacity": 0.4
              },
              "move": {
                "speed": 0.3
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "opacity_min": 0.05,
                  "speed": 1,
                  "sync": false
                },
                "value": 0.4
              }
            },
            "polygon": {
              "enable": true,
              "scale": 0.5,
              "type": "inline",
              "move": {
                "radius": 5
              },
              "url": "/images/face-outline.svg",
              "inline": {
                "arrangement": "equidistant"
              },
              "draw": {
                "enable": true,
                "stroke": {
                  "color": "rgba(255, 255, 255, .2)"
                }
              }
            },
            "retina_detect": false,
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                }
              },
              "modes": {
                "bubble": {
                  "size": 6,
                  "distance": 40
                }
              }
            }
          }}
        />
        <div className="text">
          <h1>Ugliest face generator</h1>
          <p>Using advanced ai and machine-learning algorithms, this application processes <strong>billions of images</strong> of real faces. It finds the most visually upsetting facial features and composits them to form the <strong>ugliest face possible</strong>.</p>
          <button className="button" onClick={() => confirm()}>Launch processing sequence</button>
        </div>
      </>
    )
  } else if (stage === 'confirm') {
    content = (
      <div className="text">

        <div class="alert alert--type-warning alert--icon alert--open alert--animate-in alert--emoji">
          <div class="alert__inner">
            <div class="alert__content">
              <div class="alert__content__inner">
                <div class="alert__icon">⚠️</div>
                <div class="alert__text">
                  <p class="alert__title">Warning!</p><p class="alert__description">Some people may find the result highly disturbing. Please be aware you will not be able to unsee this</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-list">
          <button className="button button--secondary" onClick={() => initial()}>I'm too scared, don't do it</button>
          <button className="button" onClick={() => launch()}>My stomach is ready</button>
        </div>
      </div>
    )
  } else if (stage === 'launch') {
    content = (
      <div className="text">
        <div class="lds-ripple"><div></div><div></div></div>
        <p className="loading-text">{loadingText}</p>
      </div>
    )
  } else if (stage === 'result') {
    content = (
      <div className="text">
        <h1>Result</h1>
        <p>Ugliest face generation complete</p>
        <img className="face" src="images/generated-face.jpg" alt="" width={1001} height={1334} />
      </div>
    )
  }

  return (
    <div className="App">
      <div className="page-content">
        {content}
      </div>
      <Particles
        className="particles-bg"
        params={{
          particles: {
            "number": {
              "value": 200,
              "density": {
                "enable": false
              }
            },
            "move": {
              "speed": 0.6
            },
            "opacity": {
              "value": 0.01
            }
          }
        }}
      />

    </div>
  );
}

export default App;
