import React from "react";
import ReactDOM from 'react-dom/client';
import appStore from "../dist/assets/app-store.png";
import arrow11 from "../dist/assets/arrow-11.svg";
import arrowUpRight from "../dist/assets/arrow-up-right.svg";
import exploreByCategory from "../dist/assets/explore-by-category.svg";
import facebookBg from "../dist/assets/facebook-bg.svg";
import figma from "../dist/assets/figma.png";
import frame21 from "../dist/assets/frame-21.svg";
import frame26 from "../dist/assets/frame-26.svg";
import frame from "../dist/assets/frame.svg";
import icon2 from "../dist/assets/icon-2.png";
import icon3 from "../dist/assets/icon-3.png";
import icon4 from "../dist/assets/icon-4.png";
import icon5 from "../dist/assets/icon-5.png";
import icon6 from "../dist/assets/icon-6.png";
import icon7 from "../dist/assets/icon-7.png";
import icon from "../dist/assets/icon.png";
import chatbot from "../dist/assets/chatbox-icon.svg";
import image3 from "../dist/assets/image-3.png";
import imagePng from "../dist/assets/image.png"; //previously declared as image
import imageSvg from "../dist/assets/image-1.svg";  //previously declared as image
import imgCarriere1 from "../dist/assets/img-carriere-1.png";
import line1 from "../dist/assets/line-1.svg";
import line2 from "../dist/assets/line-2.svg";
import line3 from "../dist/assets/line-3.svg";
import line4 from "../dist/assets/line-4.svg";
import line5 from "../dist/assets/line-5.svg";
import mapPin from "../dist/assets/map-pin.svg";
import maskGroup10 from "../dist/assets/mask-group-10.png";
import maskGroup11 from "../dist/assets/mask-group-11.png";
import maskGroup12 from "../dist/assets/mask-group-12.png";
import maskGroup2 from "../dist/assets/mask-group-2.png";
import maskGroup3 from "../dist/assets/mask-group-3.png";
import maskGroup4 from "../dist/assets/mask-group-4.png";
import maskGroup5 from "../dist/assets/mask-group-5.png";
import maskGroup6 from "../dist/assets/mask-group-6.png";
import maskGroup7 from "../dist/assets/mask-group-7.png";
import maskGroup8 from "../dist/assets/mask-group-8.png";
import maskGroup9 from "../dist/assets/mask-group-9.png";
import maskGroup from "../dist/assets/mask-group.png";
import pinterest from "../dist/assets/pinterest.png";
import searchPng from "../dist/assets/search.png";  //previously declared as search
import search from "../dist/assets/search-1.svg";
import slack from "../dist/assets/slack.png";
import spotify from "../dist/assets/spotify.png";
import "./style.css";
import telegram from "../dist/assets/telegram.png";
import twitter from "../dist/assets/twitter.svg";
import vector10 from "../dist/assets/vector-10.svg";
import vector4 from "../dist/assets/vector-4.svg";
import vector7 from "../dist/assets/vector-7.svg";
import vector9 from "../dist/assets/vector-9.svg";
import wordpress from "../dist/assets/wordpress.png";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <div className="frame-3">
              <div className="frame-4">
                <img className="img" alt="Frame" src={frame} />
                <p className="text-wrapper">
                  Find your next career opportunity and connect with like-minded individuals.
                </p>
              </div>
              <div className="social-icons">
                <div className="social-icon-facebook">
                  <div className="social-icon-hover" />
                </div>
                <img className="line" alt="Line" src={line2} />
                <img className="social-icon-facebook" alt="Social icon facebook" src={facebookBg} />
                <img className="line" alt="Line" src={line2} />
                <div className="social-icon-facebook">
                  <div className="social-icon-twitter">
                    <img className="twitter" alt="Twitter" src={twitter} />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-2">Help Links</div>
              <p className="about-us-services">
                About Us
                <br />
                Services
                <br />
                Privacy Policy <br />
                Terms &amp; Condition
              </p>
            </div>
            <div className="frame-6">
              <div className="frame-3">
                <div className="text-wrapper-3">Subscribe Our Newsletter</div>
                <p className="p">Get the freshest job news and articles delivered to your inbox every week.</p>
              </div>
              <div className="frame-7">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Email Address</div>
                </div>
                <button className="btn">
                  <div className="text-wrapper-5">Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className="frame-8">
            <p className="text-wrapper-6">© 2023 All Right Reserved Creativemouse.co</p>
            <img className="line-2" alt="Line" src={line5} />
          </div>
        </div>
        <div className="frame-9">
          <div className="frame-10">
            <div className="frame-11">
              <p className="latest-jobs-post">
                <span className="span">Latest </span>
                <span className="text-wrapper-7">Jobs </span>
                <span className="span">Post</span>
              </p>
              <img className="vector" alt="Vector" src={vector7} />
            </div>
            <div className="frame-12">
              <div className="frame-13">
                <img className="vector-2" alt="Vector" src={vector9} />
                <div className="frame-14">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                  <div className="ellipse-6" />
                </div>
                <img className="vector-3" alt="Vector" src={vector10} />
              </div>
              <div className="frame-15">
                <div className="text-wrapper-8">Browse All</div>
                <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
              </div>
            </div>
          </div>
          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="line-3" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="wordpress" alt="Wordpress" src={wordpress} />
                      <div className="text-wrapper-11">Digital Marketer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-4" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="icon" alt="Icon" src={icon6} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={imageSvg} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-3" alt="App store" src={appStore} />
                      <div className="text-wrapper-11">Lead Product Designer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-5" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="img-4" alt="Icon" src={icon7} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-3" alt="Spotify" src={spotify} />
                      <div className="text-wrapper-11">Social Media Assistant</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-5" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="img-4" alt="Icon" src={icon3} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-24">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="line-6" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="line-6" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-3" alt="Wordpress" src={wordpress} />
                      <div className="text-wrapper-11">Digital Marketer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-7" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="img-4" alt="Icon" src={icon5} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right-2" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-25">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-2" alt="Wordpress" src={wordpress} />
                      <div className="text-wrapper-11">Digital Marketer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-8" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="icon-2" alt="Icon" src={icon2} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-3" alt="Slack" src={slack} />
                      <div className="text-wrapper-11">Full-Stack Developer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-5" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="img-4" alt="Icon" src={imagePng} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="img-2" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="img-3" alt="Pinterest" src={pinterest} />
                      <div className="text-wrapper-11">UX Designer/Researcher</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-5" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="img-4" alt="Icon" src={icon4} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
              <div className="frame-26">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-20">
                      <div className="frame-7">
                        <div className="text-wrapper-9">APPLY BEFORE</div>
                        <div className="element-dec">8 DEC, 2023</div>
                      </div>
                      <img className="line-9" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">JOB TYPE</div>
                        <div className="text-wrapper-10">FULL TIME</div>
                      </div>
                      <img className="line-9" alt="Line" src={line3} />
                      <div className="frame-7">
                        <div className="text-wrapper-9">SALARY</div>
                        <div className="text-wrapper-10">$10K-$15K</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-21">
                      <img className="figma" alt="Figma" src={figma} />
                      <div className="text-wrapper-11">Digital Marketer</div>
                    </div>
                    <p className="text-wrapper-12">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <img className="line-10" alt="Line" src={line4} />
                <div className="frame-22">
                  <div className="frame-23">
                    <img className="icon-3" alt="Icon" src={icon} />
                    <div className="text-wrapper-13">London, United Kingdom</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-14">More Details</div>
                    <img className="arrow-up-right-3" alt="Arrow up right" src={arrowUpRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-jobs">
          <div className="frame-27">
            <div className="frame-28">
              <p className="featured-jobs-2">
                <span className="span">Featured </span>
                <span className="text-wrapper-7">Jobs</span>
              </p>
              <img className="vector-4" alt="Vector" src={vector7} />
            </div>
            <div className="frame-15">
              <div className="text-wrapper-8">Browse All</div>
              <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-29">
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="App store" src={appStore} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-15">Email Marketing</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Spotify" src={spotify} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Visual Designer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Wordpress" src={wordpress} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Data Analyst</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Slack" src={slack} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Content Writer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Search" src={search} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Product Designer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Telegram" src={telegram} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">PHP/JS Developer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="figma-2" alt="Figma" src={figma} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Plugin Developer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-6">
                  <div className="frame-31">
                    <img className="img-3" alt="Pinterest" src={pinterest} />
                    <img className="line-11" alt="Line" src={line2} />
                    <div className="full-time">FULL TIME</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-17">Digital Marketer</div>
                    <p className="text-wrapper-16">
                      Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
                    </p>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">More Details</div>
                  <img className="arrow-up-right" alt="Arrow up right" src={arrowUpRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-32">
          <div className="frame-33">
            <div className="text-wrapper-18">Start Recruiting Now</div>
            <p className="text-wrapper-19">
              Are you ready to take your recruitment efforts to the next level? Our platform offers a seamless and
              efficient way to get your job listings in front of top talent.
            </p>
          </div>
          <button className="button">
            <div className="text-wrapper-20">Sign Up Now</div>
          </button>
          <div className="frame-34">
            <div className="frame-35">
              <img className="mask-group" alt="Mask group" src={maskGroup} />
              <img className="mask-group-2" alt="Mask group" src={maskGroup4} />
            </div>
            <div className="frame-36">
              <img className="mask-group-3" alt="Mask group" src={maskGroup3} />
              <img className="mask-group-4" alt="Mask group" src={maskGroup6} />
            </div>
          </div>
        </div>
        <div className="category">
          <img className="explore-by-category" alt="Explore by category" src={exploreByCategory} />
          <div className="frame-6">
            <div className="frame-29">
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup11} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Design</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup9} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Analyst</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup12} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Electrician</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup5} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Finance</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup8} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Technology</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup7} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Engineering</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup2} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Marketing</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
              <div className="frame-37">
                <img className="mask-group-5" alt="Mask group" src={maskGroup10} />
                <div className="frame-38">
                  <div className="text-wrapper-21">Programmer</div>
                  <div className="text-wrapper-22">235 Jobs Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="frame-3">
            <div className="frame-6">
              <div className="frame-39">
                <div className="frame-40">
                  <img className="frame-41" alt="Frame" src={frame} />
                  <div className="frame-42">
                    <a href="learnership_internship.html" > <div className="text-wrapper-23">Find Learnership/internship</div></a>
                    <a href="jobs.html" ><div className="text-wrapper-23">Latest Jobs</div></a>
                    <a href="bursaries.html" ><div className="text-wrapper-23">Browse Bursaries</div></a>
                    <a href="chatbot.html"><div className="text-wrapper-23">Entrepreneurs Community
                    </div></a> 
                  </div>
                </div>
                <button className="btn-2" onClick={() => window.location.href = 'sign-in.html'}>
                  <div className="text-wrapper-5">Sign In</div>
                </button>
              </div>
              <div className="frame-13">
                <div className="frame-43">
                  <div className="frame-44">
                    <p className="explore-over">
                    <span className="span">Finders Keeper </span>
                    
                      <span className="span">Explore Over </span>
                      <span className="text-wrapper-7">7,000+</span>
                      <span className="span"> Job Opportunities</span>
                    </p>
                    <p className="text-wrapper-24">
                      Discover a platform tailored for passionate job seekers interested in startups. Find your next
                      career opportunity and connect with like-minded individuals.
                    </p>
                  </div>
                  <div className="frame-7">
                    <div className="frame-45">
                      <div className="frame-46">
                        <div className="frame-14">
                         
                          <div className="text-wrapper-25"></div>
                        </div>
                       
                        <div className="frame-47">
                          
                          <div className="text-wrapper-25">
                            <input id="keyword" type="text"></input>
                          </div>
                        </div>
                      </div>
                      <button className="btn-3">
                        <div className="text-wrapper-5" >Search</div>
                      </button>
                    </div>
                    <div id="searchBtn" className="frame-48">
                    <img className="vector-5" alt="Vector" src={vector4} />
                      <p className="text-wrapper-26">Tags: Digital Marketer, UX Designer, Data Analyst</p>
                    </div>
                  </div>
                </div>
                <img className="img-carriere" alt="Img carriere" src={imgCarriere1} />
              </div>
            </div>
            <div className="frame-49">
              <img className="frame-50" alt="Frame" src={frame26} />
              <div className="frame-51">
                <div className="ellipse-7" />
                <div className="ellipse-8" />
                <div className="ellipse-9" />
                <div className="ellipse-10" />
                <div className="ellipse-11" />
                <div className="ellipse-12" />
              </div>
              <div className="frame-52">
                <div className="ellipse-7" />
                <div className="ellipse-8" />
                <div className="ellipse-9" />
                <div className="ellipse-10" />
                <div className="ellipse-11" />
                <div className="ellipse-12" />
              </div>
            </div>
          </div>
          <div className="frame-53">
            <div className="frame-54">
              <div className="frame-55">
                <div className="rectangle" />
                <img className="arrow" alt="Arrow" src={arrow11} />
              </div>
              <div className="scroll-down">SCROLL DOWN</div>
            </div>
            <img className="frame-56" alt="Frame" src={frame21} />
          </div>
          <div className="sponsors">
            <img className="image" alt="Image" src={image3} />
            <img className="image-2" alt="Image" src={image3} />
          </div>
        </div>
      </div>
    </div>
  );
};
// Create a root and render the Desktop component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Desktop />);