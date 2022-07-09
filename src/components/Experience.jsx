import AppCard from './shared/app-card/AppCard';

function Experience() {
  return (
    <section className='Experience section'>
      <h3 className='Experience-title'>Experience</h3>

      <article className='Experience-content card-container'>
        <AppCard
          title='Frontend Engineer at Aplazo (CDMX)'
          description='As a Aplazo Front end Engineer, I take a place in B2B development
          team. I work mainly with the Angular framework to develop the
          dashboard of the merchants, In the last refactoring I take a code
          that was highly coupled to the framework for a better approach by
          splitting the domain into its own library, free of frameworks and
          defining use-cases to maintain and scale the app in the future.'
          className='Experience-item'
        />
        <AppCard
          title='Frontend Dev at Coconutt (CDMX)'
          description="Most of my participation was on creating custom frontend web
          applications for the customers (final users). In my day to day I was
          involved working with Vue, Angular and clean architectures to build
          dashboards, SPA's, landing pages and improve some projects that
          was built before my arrived. For example we can built a landing page
          with template engines, vanilla Javascript, SASS and bundled the app
          with webpack, but for other projects we built on top of Angular
          framework and used CD with docker images and GH actions to
          accomplished the task."
          className='Experience-item'
        />
        <AppCard
          title='Freelance (CDMX)'
          description=' I am focused on building and developing web applications for my
          clients. Recently I start to use Laravel as tool that let me to do
          my job. I mainly work with Javascript technologies and I can say
          that I work effortlessly with frameworks like Laravel, Express,
          Hapi.js, Angular, Ionic, Vue.js and Quasar. My learning roots
          include HTML, CSS, Vanilla Javascript, Typescript y Git, and in my
          day to day, I handle tools such as Webpack, Pug, SASS, RxJS, Jest.'
          className='Experience-item'
        />
      </article>
    </section>
  );
}

export default Experience;
