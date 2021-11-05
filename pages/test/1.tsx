import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";

const InteractiveTest1: NextPage = () => {
  useEffect(() => {
    function isElementUnderBottom(element: any, startRect?: number) {
      //top은 정확하게 엘레멘트의 처음 위치가 0이다
      const { top } = element.getBoundingClientRect();
      //화면 높이 기준
      const { innerHeight } = window;

      //기본적으로 startRect가 있으면 startRect를 반환, 없으면 0을 반환하고
      //이벤트가 시작하는 위치 값이 top의 값보다 작아지는 기준이 되는가에
      //대한 boolean값을 return해준다
      return top > innerHeight + (startRect || 0);
    }

    //위의 함수에서 스크롤 이벤트마다 return해주는 것을
    //가지고 css 애니메이션을 진행해준다
    //특정 위치에 있는지 일치함에 따라서 이벤트를 진행해준다
    function handleScroll() {
      //section이라는 클라스명을 가진 엘레멘트들을 전부불러
      const boardList = document.querySelectorAll(".section");
      //해당 엘레멘트들에게 top위치가 만족할때 마다
      //css 애니메이션 실행하게 적용시킴
      boardList.forEach((board) => {
        if (isElementUnderBottom(board, -20)) {
          board.className = "section notShow";
        } else {
          board.className = "section show";
        }
      });
    }

    //스크롤링 할때마다 해당 이벤트를 진행함을 선언
    window.addEventListener("scroll", handleScroll);
    //컴포넌트 언마운트 될 때는 이제 그만쓰겠다라고 선언
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <InteractiveTestBlock1>
      <div className="empty" />
      <div className="section">
        We are dancing. We are extra dancing. Try hard to achieve succeed. We
        will not try to go. Try hard succeed. Indeed so. Some women cry. This
        generator should succeed. This generator should be used and succeed. We
        will not go. Try hard to achieve everything you can succeed. We are
        extra cool everyday dancing. We are extra cool everyday dancing. Try
        hard to achieve everything you can succeed. This generator should be
        used and succeed. Try hard to achieve everything succeed. This generator
        should be used and succeed. We will not try to bow and go. We are
        dancing. We are dancing. We are extra dancing. Try hard to achieve
        succeed. We will not try to go. Try hard succeed. Indeed so. Some women
        cry. This generator should succeed. This generator should be used and
        succeed. We will not go. Try hard to achieve everything you can succeed.
        We are extra cool everyday dancing. We are extra cool everyday dancing.
        Try hard to achieve everything you can succeed. This generator should be
        used and succeed. Try hard to achieve everything succeed. This generator
        should be used and succeed. We will not try to bow and go. We are
        dancing. We are dancing. We are extra dancing. Try hard to achieve
        succeed. We will not try to go. Try hard succeed. Indeed so. Some women
        cry. This generator should succeed. This generator should be used and
        succeed. We will not go. Try hard to achieve everything you can succeed.
        We are extra cool everyday dancing. We are extra cool everyday dancing.
        Try hard to achieve everything you can succeed. This generator should be
        used and succeed. Try hard to achieve everything succeed. This generator
        should be used and succeed. We will not try to bow and go. We are
        dancing.
      </div>
      <div className="empty" />
      <div className="imageList">
        <h2>예시 이미지 리스트</h2>
        <div className="image" style={{ backgroundColor: "red" }}>
          <div className="item" />
        </div>
        <div
          className="image"
          style={{ backgroundColor: "blue", border: "4px solid white" }}
        >
          <div className="item" />
        </div>
        <div className="image" style={{ backgroundColor: "green" }}>
          <div className="item" />
        </div>
      </div>
      <div className="empty" />
    </InteractiveTestBlock1>
  );
};

const InteractiveTestBlock1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .empty {
    height: 100vh;
  }
  & > .section {
    width: 640px;
    padding: 8px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    transition: transform 1s, opacity 1.5s;
  }
  .show {
    opacity: 1;
    transform: translateY(0px);
  }
  .notShow {
    opacity: 0;
    transform: translateY(70px);
  }
  & > .imageList {
    width: 100%;
    height: 360vh;
    background-color: black;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 10vh;
    & > h2 {
      width: 100%;
      padding: 10vh 0;
      position: sticky;
      top: 0;
    }
    & > .image {
      position: sticky;
      top: 20vh;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 80%;
      height: 60vh;

      margin: 64px 0;
      overflow: hidden;
      background-color: lightslategrey;
      border: 4px solid yellow;
      & > .item {
        width: 100%;
        height: auto;
        max-width: 80vw;
        max-height: 60vh;
      }
    }
  }
`;

export default InteractiveTest1;
