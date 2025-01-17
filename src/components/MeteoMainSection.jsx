import { useEffect, useState } from "react";
import MeteoAttuale from "./MeteoAttuale";
import MeteoNextDays from "./MeteoNextDays";
import MeteoOdierno from "./MeteoOdierno";
import MeteoSearch from "./MeteoSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import MeteoNav from "./MeteoNav";
import MeteoFooter from "./MeteoFooter";

const MeteoMainSection = function () {
  const [ipAddress, setIpAddress] = useState(""); //FOR FIRST RENDER
  const [geoInfo, setGeoInfo] = useState({});
  const [geoInfoPresent, setGeoInfoPresent] = useState(false);

  const [search, setSearch] = useState(""); //FOR SEARCH COMPONENT

  useEffect(() => {
    //DIDMOUNT
    fetchIpAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchIpAddress = async function () {
    try {
      const response = await fetch("https://api.ipify.org");
      if (response.ok) {
        const data = await response.text();
        setIpAddress(data);
        fetchLocation();
      } else {
        throw new Error("FetchIP");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const fetchLocation = async function () {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      if (response.ok) {
        const data = await response.json();
        setGeoInfo(data);
        setGeoInfoPresent(true);
      } else {
        setGeoInfoPresent(false);
        throw new Error("FetchLocation");
      }
    } catch (error) {
      console.log("Error", error);
      setGeoInfoPresent(false);
    }
  };

  return (
    <main className=" bg-body-secondary">
      {geoInfoPresent && (
          <BrowserRouter>
          <MeteoNav />
          <Routes>
            <Route
              path="/"
              element={
                  <>
                  <MeteoSearch search={search} setSearch={setSearch} />
                  <MeteoAttuale location={geoInfo} search={search} />
                  <MeteoOdierno location={geoInfo} search={search} />
                </>
              }
            />
            <Route path="/next-days" element={<MeteoNextDays />} />


            <Route path="*" element={<NotFound />} />
          </Routes>
          <MeteoFooter />
        </BrowserRouter>
      )}
    </main>
  );
};

export default MeteoMainSection;
