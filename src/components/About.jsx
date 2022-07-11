import React, { useContext } from 'react';
import { Context } from '../containers/App';

const About = () => {
  const data = useContext(Context);

  return (
    <>
      <div className="flex flex-col mt-4 gap-6 About-title">
        <div className="flex flex-col gap-3 justify-center items-center lg:flex-row">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-1 items-center About-item">
              <img className="h-5" src="../assets/icons/mail.svg" />
              <a
                className="neon-social"
                href="https://www.linkedin.com/in/igpresas/"
                target="_blank"
              >
                {data?.email}
              </a>
            </div>
            <div className="flex flex-row gap-1 items-center About-item">
              <img className="h-5" src="../assets/icons/github.svg" />
              <a
                className="neon-social"
                href="https://github.com/nv-cho"
                target="_blank"
              >
                {data?.website}
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center About-item">
            <img className="h-5" src="../assets/icons/phone.svg" />
            <p>{data?.phone}</p>
          </div>

          <div className="flex flex-row gap-1 items-center About-item">
            <img className="h-5" src="../assets/icons/address.png" />
            <p>{data?.address}</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-12 neon-poap rounded-xl">
          <a
            className="flex w-full justify-center items-center"
            href="https://www.welook.io/0xE912BC1F48E05629e94e5e7b7f87DC45E97f9d7e"
            target="_blank"
          >
            Mira mis POAPs!
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
