import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`overflow: hidden;`;

const Container = styled.div`
  position: relative;
  width: 76%;
  height: 80rem;
  margin-bottom: 4.5rem;
  margin-left: .5rem;
  > a {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 2.5rem;
    padding-bottom: 2rem;
    ${({ theme }) => theme.transition};
  }
  &:hover {
    > a {
      transform: scale(.95);
    }
  }
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 60rem;
  }
`;

const ThumbContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Thumb = styled.div`
  width: 100%;
  max-width: 105rem;
  height: 60rem;
  border-radius: 10px;
  position: absolute;
  background: #ffffff20;
  top: 0;
  right: 1rem;
  bottom: 3rem;
  margin: auto 0;
  @media screen and (max-width: 1440px) {
    width: 95%;
  }
  @media screen and (max-width: 1024px) {
    width: 100rem;
    top: 0;
    bottom: 0;
    right: -30rem;
  }
  @media screen and (max-width: 925px) {
    width: 95rem;
  }
  @media screen and (max-width: 860px) {
    width: 90rem;
  }
  @media screen and (max-width: 800px) {
    width: 86rem;
  }
  @media screen and (max-width: 768px) {
    width: 75rem;
    height: 45rem;
  }
  @media screen and (max-width: 640px) {
    width: 70rem;
  }
  @media screen and (max-width: 540px) {
    width: 65rem;
  }
  @media screen and (max-width: 480px) {
    width: 62rem;
  }
  @media screen and (max-width: 425px) {
    width: 58rem;
  }
`;

const ThumbVideo = styled.video`
  width: 100%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 3rem;
  right: 1rem;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
  ${({ theme }) => theme.transition};
  @media screen and (max-width: 1440px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

const MetaContainer = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: left;
  display: flex;
  align-items: center;
  bottom: 5rem;
  &::before {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    background-color: ${({ theme }) => theme.darkGreyColor};
    margin-right: 2rem;
  }
`;

const Meta = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.blackColor};
  margin-right: 4rem;
`;

const Caption = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const MainProjectPC = ({ id, className, background, thumb, project, caption, category, pid }) => {
  return (
    <Wrapper id={id} className={className}>
      <Container>
        <Link to={`/works/${pid}`}>
          <ThumbContainer src={background}>
            <Thumb>
              <ThumbVideo autoPlay loop muted poster={thumb} playsinline>
                <source src={thumb} />
              </ThumbVideo>
            </Thumb>
          </ThumbContainer>
          <MetaContainer>
            <Meta>
              {category}
            </Meta>
          </MetaContainer>
          <TitleContainer>
            <Title>
              {project}
            </Title>
            <Caption>
              {caption}
            </Caption>
          </TitleContainer>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default MainProjectPC;
