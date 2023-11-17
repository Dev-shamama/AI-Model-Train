import React from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLocationSharp,
  IoCall,
  IoMail,
} from "react-icons/io5";
import {
  Button,
  Header,
  Wrapper,
  SubWrapper,
  Nav,
  HeroSectionContent,
  SectionHeading,
  ServiceCard,
  Footer,
} from "./styleComponent/Header.style";
import Link from "next/link";
import HeroImage from "./assets/img/19199158.jpg";
import ServiceIconOne from "./assets/icon/cloud-lock.png";
import ServiceIconTwo from "./assets/icon/24-hours.png";
import ServiceIconThree from "./assets/icon/server.png";
import ServiceIconFour from "./assets/icon/live-chat.png";
import ServiceIconFive from "./assets/icon/shuttle.png";
import ServiceIconSix from "./assets/icon/secure.png";
import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";

const Index = () => {
  return (
    <>
      <Header>
        <Navbar/>

        <Wrapper>
          <SubWrapper>
            <HeroSectionContent>
              <div className="detail">
                <h1>
                  Unleash the potential of <span className="fav-color">AI</span>{" "}
                  and <span className="fav-color">Machine</span> learning
                </h1>
                <p>
                  Machine learning algorithms build a model based on sample
                  data, known as training data, in order to make predictions or
                  decisions...
                </p>

                <Button>
                  <span>Get Started</span>
                  <span></span>
                </Button>
              </div>
              <div className="img">
                <Image
                  src={HeroImage}
                  alt="heroimage"
                  width={500}
                  height={500}
                />
              </div>
            </HeroSectionContent>
          </SubWrapper>
        </Wrapper>
      </Header>

      {/* First Section Start Here */}
      <Wrapper>
        <SubWrapper>
          <SectionHeading>
            <h1>Our Wonderful Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae et eaque, quo maiores omnis laudantium pariatur saepe
              eius consequuntur.
            </p>
          </SectionHeading>

          <ServiceCard>
            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconOne}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>Secure</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>

            <div className="card card-down">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconTwo}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>24 Hours</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconThree}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>Clouding</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconFour}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>Help Center</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>

            <div className="card card-down">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconFive}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>2x Fast</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <Image
                    src={ServiceIconSix}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>Verified</h2>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, veniam totam provident incidunt ab amet.
                </p>
              </div>
            </div>
          </ServiceCard>
        </SubWrapper>
      </Wrapper>

      {/* Footer Section Start Here */}
      <Footer>
        <div className="footer-container">
          <div className="footer-address">
            <div className="item">
              <div className="icon">
                <IoLocationSharp />
              </div>
              <div className="text">
                <p>21 Revolution Street</p>
                <h3>Karachi</h3>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <IoCall />
              </div>
              <div className="text">
                <h3>+1 555 1234567</h3>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <IoMail />
              </div>
              <div className="text">
                <h3>dev.shamama@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="footer-about">
            <h2>About the company</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              incidunt tenetur ipsum optio.
            </p>
            <div className="social-icon-list">
              <div className="social-icon">
                <IoLogoFacebook />
              </div>
              <div className="social-icon">
                <IoLogoLinkedin />
              </div>
              <div className="social-icon">
                <IoLogoGithub />
              </div>
              <div className="social-icon">
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Index;
