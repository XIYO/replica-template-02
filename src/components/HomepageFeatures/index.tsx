import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI 혁명',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        생성형 AI가 바꾸는 개발 환경과 새로운 가능성을 탐구합니다.
        GitHub Copilot, Cursor 등 AI 코딩 어시스턴트의 시대입니다.
      </>
    ),
  },
  {
    title: '클라우드 네이티브',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        컨테이너와 쿠버네티스로 구축하는 현대적 인프라.
        확장성, 유연성, 복원력을 핵심 가치로 합니다.
      </>
    ),
  },
  {
    title: '모던 개발',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        프론트엔드, 백엔드, DevOps의 최신 트렌드를 다룹니다.
        React, Vue, Go, Rust 등 현대적인 기술 스택을 소개합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
