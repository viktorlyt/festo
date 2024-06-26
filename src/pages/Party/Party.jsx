import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { useJsApiLoader } from "@react-google-maps/api";
import { getParty } from "../../helpers/axiosParty";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Slider2 } from "../../components/Slider2/Slider2";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Map } from "../../components/Map/Map";
import { FormDialog } from "../../components/FormDialog/FormDialog";
import usd from "../../images/noun-usd-square-4425742.svg";
import ticket from "../../images/ticket-confirmation-outline.svg";
import pound from "../../images/pound.svg";
import location from "../../images/location.svg";
import nounDate from "../../images/noun-date-1146237.svg";
import arrowLeft from "../../images/arrow_left.svg";
import { PartyNotFound } from "../PartyNotFound/PartyNotFound";

const libraries1 = ["places"];

export const Party = () => {
  const { id } = useParams();
  const [party, setParty] = useState(null);
  const [isOutTime, setIsOutTime] = useState(false);
  const [noParty, setNoParty] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const partyFromServer = await getParty(id);

      if (partyFromServer === undefined) {
        setNoParty(true);
      }

      if ("Error" in partyFromServer) {
        return;
      }

      setParty(partyFromServer);
    }
    fetchData();
  }, [id]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtRoN67EWe9K1x0vIoncr3DzjP9QYQzAQ",
    libraries1,
  });

  useEffect(() => {
    const currentDate = Date.parse(new Date().toUTCString());

    if (party !== null) {
      const dateOfParty = Date.parse(party.to_date + " " + party.to_time);

      if (dateOfParty <= currentDate) {
        setIsOutTime(true);
      }
    }
  }, [party]);

  return (
    <>
      <div className="party">
        {party && (
          <>
            <Header />

            <div className="party__banner"></div>
            <div className="party__container grid">
              <div className="party__left">
                <a className="party__left--a" href="/">
                  <h3 className="party__left--h3">
                    <img
                      src={arrowLeft}
                      alt="arrowLeft"
                      className="party__left--h3-img"
                    />
                    <p className="party__left--h3-p">Go home</p>
                  </h3>
                </a>
                <h2 className="party__left--h2">{party.title}</h2>

                <div className="party__slider--box">
                  <Slider2 party={party} />
                </div>

                <h3 className="party__left--host">
                  <div className="party__left--host-l">
                    <img
                      src={party.host.photo}
                      alt="flagOfEngland"
                      className="party__left--host-l-img"
                    />
                    <div className="party__left--host-l-text">
                      <p className="party__left--host-l-text1">
                        {party.host.name}
                      </p>
                      <p className="party__left--host-l-text2">Host</p>
                    </div>
                  </div>
                  {party.joining_user_count === 1 && (
                    <img
                      src={party.joining_user[0]}
                      alt="flagOfEngland"
                      className="party__left--host-img"
                    />
                  )}
                  {party.joining_user_count === 2 && (
                    <>
                      <img
                        src={party.joining_user[0]}
                        alt="flagOfEngland"
                        className="party__left--host-img1"
                      />
                      <img
                        src={party.joining_user[1]}
                        alt="flagOfEngland"
                        className="party__left--host-img2"
                      />
                    </>
                  )}
                  {party.joining_user_count > 2 && (
                    <>
                      <img
                        src={party.joining_user[0]}
                        alt="photo1"
                        className="party__left--host-img3"
                      />
                      <img
                        src={party.joining_user[1]}
                        alt="photo1"
                        className="party__left--host-img1"
                      />
                      <div className="party__left--host-img2-gray">
                        + {party.joining_user_count - 2}
                      </div>
                    </>
                  )}
                </h3>

                <h3 className="party__left--ticket">
                  <img
                    src={ticket}
                    alt="ticket"
                    className="party__left--ticket-img"
                  />
                  {party.is_free === 0 ? (
                    <span>
                      <b>{party.qty_now}</b> from <b>{party.qty}</b> tickets
                    </span>
                  ) : (
                    <span>Free</span>
                  )}
                </h3>

                <h3 className="party__left--price">
                  <img
                    src={usd}
                    alt="bank128"
                    className="party__left--price-usd"
                  />
                  {party.is_free === 0 ? (
                    <span>
                      <img
                        src={pound}
                        alt="bank128"
                        className="party__left--price-pound"
                      />
                      <span>{party.price}</span>
                    </span>
                  ) : (
                    <span>Free</span>
                  )}
                </h3>

                <h3 className="party__left--date">
                  <img
                    src={nounDate}
                    alt="nounDate"
                    className="party__left--date-date"
                  />
                  <span className="party__left--date-span">
                    {party.at_date} - {party.from_time}
                  </span>
                </h3>

                <h3 className="party__left--location">
                  <img
                    src={location}
                    alt="location"
                    className="party__left--location-svg"
                  />
                  <span className="party__left--location-span">
                    {party.location}
                  </span>
                </h3>

                <h3 className="party__left--age">
                  Age limit:{" "}
                  <b>
                    {party.min_age} to {party.max_age}
                  </b>
                </h3>

                <h3 className="party__left--rate">
                  <span className="party__left--rate-span">Ratings</span>
                  <div className={`stars stars--${party.avg_rating}`}>
                    <div className="stars_star"></div>
                    <div className="stars_star"></div>
                    <div className="stars_star"></div>
                    <div className="stars_star"></div>
                    <div className="stars_star"></div>
                  </div>
                </h3>

                {party.is_free === 0 && party.qty_now >= 1 && !isOutTime ? (
                  <FormDialog />
                ) : null}
              </div>

              <div className="party__right">
                <div className="party__right--notes">
                  <div className="party__right--notes-p">
                    <div dangerouslySetInnerHTML={{ __html: party.note }} />
                  </div>
                </div>

                {isLoaded ? (
                  <div className="party__right--map">
                    <Map
                      center={{
                        lat: +party.location_lat,
                        lng: +party.location_lng,
                      }}
                    />
                  </div>
                ) : (
                  <h2>Loading...</h2>
                )}

                {party.is_free === 0 && party.qty_now >= 1 && !isOutTime ? (
                  <FormDialog className={"party__right--lastBtn"} />
                ) : null}
              </div>
            </div>

            <Subscribe />

            <Footer />
          </>
        )}
      </div>
      {noParty && <PartyNotFound />}

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="FestoCookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "FFF",
          color: "#2B373B",
          fontSize: "15px",
          fontWeight: "bold",
        }}
        expires={365}
        hideOnAccept="true"
      >
        We use cookies on our website to see how you interact with it. By
        accepting, you agree to our use of such cookies.{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </CookieConsent>
    </>
  );
};
