import "./styles/house.css";
import useCompanies from "../Hooks/useCompanies";
import useCompany from "../Hooks/useCompany";
import useComplex from "../Hooks/useComplex";
import useRoom from "../Hooks/useRoom";
import useBank from "../Hooks/useBank";

const House = () => {
  const { companies } = useCompanies();
  const { setCompanyId, company } = useCompany();
  const { setComplexId, complex, setComplex } = useComplex();
  const { setRoomId, setRoom } = useRoom();
  const { setDuration, roomId, setBank } = useBank();

  const handleChangeCompany = (value) => {
    setComplex([]);
    setRoom([]);
    setBank([]);
    //
    setComplexId("");
    setRoomId("");
    setDuration("");
    //
    document.getElementById("complex").value = "choose";
    document.getElementById("room").value = "choose";
    document.getElementById("bank").value = "choose";
    setCompanyId(value);
  };

  const handleChangeComplex = (value) => {
    setRoom([]);
    setBank([]);
    //
    setRoomId("");
    setDuration("");
    //
    document.getElementById("room").value = "choose";
    document.getElementById("bank").value = "choose";
    setComplexId(value);
  };
  const handleChangeRoom = (value) => {
    setBank([]);
    //
    setDuration("");
    //
    document.getElementById("bank").value = "choose";
    setRoomId(value);
  };

  return (
    <section className="house">
      <div className="container">
        <div className="house__body">
          <div className="select-wrapper">
            <h3 className="select-title">Company:</h3>
            <select
              className="company"
              defaultValue="choose"
              onChange={(e) => handleChangeCompany(e.target.value)}
              name=""
              id="company"
            >
              <option value="choose" disabled>
                Choose
              </option>
              {companies?.map((company, index) => {
                return (
                  <option key={index} value={company?.company_id}>
                    {company?.company_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="select-wrapper">
            <h3 className="select-title">Complex:</h3>
            <select
              className="company"
              defaultValue="choose"
              onChange={(e) => handleChangeComplex(e.target.value)}
              name=""
              id="complex"
            >
              <option value="choose" disabled>
                Choose
              </option>
              {company[0]?.complexs?.map((complex, index) => {
                return (
                  <option key={index} value={complex?.id}>
                    {complex?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="select-wrapper">
            <h3 className="select-title">Number of rooms:</h3>
            <select
              className="company"
              defaultValue="choose"
              onChange={(e) => handleChangeRoom(e.target.value)}
              name=""
              id="room"
            >
              <option value="choose" disabled>
                Choose
              </option>
              {complex[0]?.rooms?.map((room, index) => {
                return (
                  <option key={index} value={room?.id}>
                    {room?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="select-wrapper">
            <h3 className="select-title">Mortgage duration:</h3>
            <select
              className="company"
              defaultValue="choose"
              onChange={(e) => setDuration(e.target.value)}
              name=""
              id="bank"
            >
              <option value="choose" disabled>
                Choose
              </option>
              {roomId && (
                <>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default House;
