import search from "../images/search.png";
export default function SectionFilter() {
  return (
    <div className="section1">
      <div className="searchDiv">
        <img src={search} />
        <form>
          <input type={"search"} placeholder="Search for a country.." />
        </form>
      </div>
      <div className="selectDiv">
        <select>
          <option>Filter By Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Azia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
    </div>
  );
}
