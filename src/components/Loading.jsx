import React from 'react';

export default function Loading() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <progress className="progress is-small is-info" max="100">
              15%
            </progress>
          </div>
        </div>
      </div>
    </section>
  );
}
