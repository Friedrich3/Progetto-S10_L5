/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const MeteoOdierno = function (props) {
  const [citta, setCitta] = useState({});
  const [listaMeteo, setListaMeteo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.search === "") {
      fetchLocationData();
    } else {
      fetchSearchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search]); //DIDMOUNT

  const fetchLocationData = async function () {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location.city},${props.location.countryCode}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.location.city}&appid=ddc0cf03218fcced7c3d841c79b3f14f`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        setListaMeteo(data.list);
        setIsVisible(true);
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false);
    }
  };

  const fetchSearchData = async function () {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.search}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=ddc0cf03218fcced7c3d841c79b3f14f`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        setListaMeteo(data.list);
        setIsVisible(true);
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false);
    }
  };

  const getTodayDate = function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getTemp = (element) => {
    return Math.floor(element - 273.15);
  };

  const getTime = (element) => {
    const sunTimer = new Date(element * 1000);
    const sunTime = `${sunTimer
      .getHours()
      .toString()
      .padStart(2, "0")}:${sunTimer.getMinutes().toString().padStart(2, "0")}`;
    return sunTime;
  };

  return (
    <>
      {isVisible && (
        <Container fluid className="pb-3">
          <h2>Today&apos;s Meteo</h2>
          <Row>
            {listaMeteo.map((e) => {
              if (e["dt_txt"].includes(getTodayDate())) {
                return (
                  <Col key={e.dt} xs={3} md={2}>
                    <Card>
                      <Card.Body>
                        <Card.Title className=" text-end">{getTime(e.dt)}</Card.Title>
                        <Card.Text className="d-flex">
                          <img
                            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                            alt="weatherIcon"
                            style={{ width: "60px" }}
                          />
                          <span className=" fs-1 align-self-center">
                            {getTemp(e.main.temp)}°
                          </span>
                        </Card.Text>
                        <Card.Subtitle>Weather:</Card.Subtitle>
                        <Card.Text className="fs-4">{e.weather[0].main}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default MeteoOdierno;
