import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const Home: NextPage = () => {
  const targetRef = useRef<any>(null);
  const [percent, setPercent] = useState<number>(0);

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 40;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

    const observer = new IntersectionObserver((entries: any) => {
      const [entry] = entries;
      setPercent(entry.intersectionRatio);
    }, options);

    function observe() {
      observer.observe(targetRef.current);
    }
    console.log(targetRef.current.getBoundingClientRect());
    window.addEventListener("scroll", observe);
    return () => {
      window.removeEventListener("scroll", observe);
    };
  }, [targetRef]);

  return (
    <HomeBlock>
      <div className="empty" />
      <div className="page" ref={targetRef}>
        <LogoItem percent={percent}>
          <span style={{ opacity: percent }}>예시용 글씨지롱</span>
        </LogoItem>
      </div>
      <div className="empty" />
    </HomeBlock>
  );
};

const HomeBlock = styled.div`
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  & > .empty {
    height: 100vh;
  }
  & > .page {
    width: 100%;
    background-color: antiquewhite;
  }
`;

type LogoItemProps = {
  percent: number;
};
const LogoItem = styled.div<LogoItemProps>`
  width: 100%;
  height: 50vh;

  background-color: #112334;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  & > span {
    color: white;
    font-weight: 700;
    font-size: 48px;

    opacity: ${(props) => props.percent * 100 + "%"};

    position: absolute;
    top: ${(props) => props.percent * 50 + "%"};
    left: ${(props) => props.percent * 50 + "%"};

    transform: rotate(${(props) => props.percent * 360 + "deg"});
    transition: all 0.3s;
  }
`;

export default Home;
