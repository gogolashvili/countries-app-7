import back from "../images/arrow-back.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function CountryInfo(props) {
  let { countryId } = useParams();

  const navigate = useNavigate();
  const countryInfo = props.data.find((item) => {
    return item.name.common === countryId && item;
  });
  console.log(countryInfo);

  console.log(props.data);
  return (
    <>
      <div
        className="backDiv"
        style={{ backgroundColor: props.isDarkMode ? "#2B3844" : "" }}
        onClick={() => {
          navigate("/countries-app-7");
        }}
      >
        <img className="backImg" src={back} alt="back-arrow" />
        <h4 style={{ color: props.isDarkMode ? "white" : "" }}>Back</h4>
      </div>
      <div className="countyInfoDiv">
        <img
          className="flagInfoImg"
          src={countryInfo.flags.png}
          alt={`${countryInfo.name.common} flag`}
        />
        <div className="infoDiv">
          <div className="infoDivUp">
            <div className="infoDivLeft">
              <h1 style={{ color: props.isDarkMode ? "white" : "" }}>
                {countryInfo.name.common}
              </h1>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Native Name:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.name.nativeName &&
                    Object.values(countryInfo.name.nativeName)[0].common}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Population:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.population}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Region:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.region}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Sub Region:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.subregion}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Capital:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.capital}
                </h3>
              </h2>
            </div>
            <div className="infoDivRight">
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Top Level Domain:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.tld}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Currencies:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.currencies &&
                    Object.values(countryInfo.currencies)[0].name}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Languages:&nbsp;
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {countryInfo.languages &&
                    Object.values(countryInfo.languages)[0]}
                </h3>
              </h2>
            </div>
          </div>
          <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
            Border Countries:&nbsp;
          </h2>
          <div className="infoDivDown">
            {countryInfo.borders &&
              countryInfo.borders.map((border) => {
                let fullName = props.data.find((element) => {
                  return border === element.cca3;
                });

                return (
                  fullName && (
                    <div key={border} className="borderCountries">
                      <button
                        style={{
                          backgroundColor: props.isDarkMode ? "#2B3844" : "",
                          color: props.isDarkMode ? "white" : "",
                        }}
                        onClick={() => {
                          navigate(`/countries-app-7/${fullName.name.common}`);
                        }}
                      >
                        {fullName.name.common}
                      </button>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
