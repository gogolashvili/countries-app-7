import back from "../images/arrow-back.png";
import { useParams } from "react-router-dom";
export default function CountryInfo(props) {
  let { countryId } = useParams();

  const countryInfo = props.data.find((item) => {
    return item.name.common === countryId && item;
  });
  console.log(countryInfo);
  return (
    <>
      <div className="backDiv">
        <img className="backImg" src={back} alt="back-arrow" />
        <h4>Back</h4>
      </div>
      <div className="countyInfoDiv">
        <img
          className="flagInfo"
          src={countryInfo.flags.png}
          alt={`${countryInfo.name.common} flag`}
        />
      </div>
    </>
  );
}
