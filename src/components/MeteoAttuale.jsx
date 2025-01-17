/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "./Loader";
import Error from "./Error";




const MeteoAttuale = function (props) {
  const [citta, setCitta] = useState({});
  const [background, setBackground] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [isLoadingImg, setIsLoadingImg ] = useState(true)

  useEffect(() => {
    if(props.search === ''){
        fetchLocationData();
    }else{
        fetchSearchData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search]); //DIDMOUNT


  const fetchLocationData = async function () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location.city},${props.location.countryCode}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        fetchImage(props.location.city)
        setIsLoading(false)
        setIsError(false)
        setIsVisible(true)
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false)
      setIsLoading(false)
      setIsError(true)
    }
  };

  const fetchSearchData = async function(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.search}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        fetchImage(props.search)
        setIsLoading(false)
        setIsError(false)
        setIsVisible(true)
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false)
      setIsLoading(false)
      setIsError(true)
    }
  }
  const fetchImage = async function(element){
    const url = 'https://pixabay.com/api/?key=48285394-8f72254ba014ab76b2636f26a&q='+element
    try{
        setIsLoadingImg(true)
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            //console.log(data.hits[0].largeImageURL)
            setBackground(data.hits[0].largeImageURL)
            setIsLoadingImg(false)
        }else{
            throw new Error('ErroreFetchImg')
        }
    }catch(error){
        console.log('Errore',error)
    }

  }



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
    {
        isLoading && (
            <Loader ></Loader>
        )}
    {
        isError &&
        (<Error />)
    }




    {isVisible &&
      <Container fluid style={{ height: "50vh" }}>
        <Row xs={12} className="h-100">
          <Col className="h-100">
            <Card className="bg-dark text-white fw-bold custom-text">
                {   isLoadingImg &&
                    <div style={{backgroundImage:'url(https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif)', height: '45vh', backgroundRepeat: 'no-repeat' , backgroundPosition: 'center'}} >
                        
                        
                    </div>
                }
                {   isLoadingImg=== false &&
                    <Card.Img
                      src={background}
                      alt="WeatherInfo"
                      style={{ height: "45vh" }}
                    />
                }
              <Card.ImgOverlay>
                <Card.Title className="fs-1">
                  {citta.name} - {citta.sys.country}
                </Card.Title>
                <Card.Text className="fs-3">{citta.weather[0].main}</Card.Text>

                <Card.Text className="d-flex">
                  <img
                    src={`https://openweathermap.org/img/wn/${citta.weather[0].icon}@2x.png`}
                    alt="weatherIcon"
                  />
                  <span className=" fs-1 align-self-center">
                    {getTemp(citta.main.temp)}°
                  </span>
                </Card.Text>
                <Card.Text>{citta.weather.description}</Card.Text>
                <Card.Text>
                  Min. {getTemp(citta.main.temp_min)}° - Max.
                  {getTemp(citta.main.temp_max)}°
                </Card.Text>
                <Card.Text>Humidity: {citta.main.humidity}%</Card.Text>
                <Card.Text>
                  Sunrise {getTime(citta.sys.sunrise)} - Sunset
                  {getTime(citta.sys.sunset)}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
}
    </>
  );
};
export default MeteoAttuale;
