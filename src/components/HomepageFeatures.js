import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use...',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        POLARIS was designed from the ground up to be easy to use and quick to find the resource you need.
      </>
    ),
  },
  {
    title: 'Focused...',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Simple, Short, and Sassy...Synopsis of Facts around Projects being considered, already started, or somewhere stuck along the way.
      </>
    ),
  },
  {
    title: 'Modern...',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Open Source, Free, and Modern. Able to be modified with little effort, to capture future needs. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
