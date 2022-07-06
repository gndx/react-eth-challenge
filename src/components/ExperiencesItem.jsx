import React from 'react';

const ExperiencesItem = ({experience}) => {
    return (        
        <>
          <h3>Example Inc</h3>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Jul.&nbsp;2019:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Fullstack Developer
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Description:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Tools:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-gray-300 px-3">Vue</span>
              <span className="rounded-xl bg-gray-300 px-3">Vuex</span>
              <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
              <span className="rounded-xl bg-gray-300 px-3">Docker</span>
              <span className="rounded-xl bg-gray-300 px-3">Git</span>
              <span className="rounded-xl bg-gray-300 px-3">Bitbucket</span>
              <span className="rounded-xl bg-gray-300 px-3">Jira</span>
            </div>
          </section>
        </>
    );
};

export default ExperiencesItem;