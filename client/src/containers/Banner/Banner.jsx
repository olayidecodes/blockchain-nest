import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {FaDiscord, FaTelegram} from 'react-icons/fa'

import './Banner.scss'

const Banner = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);
  return (
    <section className='app__banner section__padding'>
        <div className="app__banner-box app__banner-textbox">
            <h1 className="heading_1">Make Insurance Fair and Accessible</h1>
            <p>Decentralized insurance protocol to collectively build insurance products.</p>
            <div className="join__box">
                <div className="box">
                    <FaTelegram className='icon'/>
                    <p className="text">Join our Telegram community!</p>
                </div>
                <div className="box">
                    <FaDiscord className='icon'/>
                    <p className="text">Join our Discord!</p>
                </div>
            </div>
        </div>

    <Particles
      className='app__banner'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 150,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />

    </section>
  );
};

export default Banner