import React from "react";
import Header from "../components/header";
// import DeleteFoto from "../assets/images/delete.png";
import "./pageStyles/adminRoom.scss";
import useRooms from "../Hooks/useRooms";
import useComplexs from "../Hooks/useComplexs";

const AdminRoom = () => {
  const { rooms } = useRooms();
  const { complexs } = useComplexs();

  const handleSubmitRoom = (e) => {
    e.preventDefault();
    const { countRooms, price, area, address, complexId } = e.target;
    console.log(
      countRooms.value,
      price.value,
      area.value,
      address.value,
      complexId.value
    );
    fetch(`http://localhost:7777/room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countRooms: countRooms.value,
        price: price.value,
        area: area.value,
        address: address.value,
        complexId: complexId.value,
      }),
    });
    window.location.reload();
  };

  const deleteRoom = (id) => {
    fetch(`http://localhost:7777/room/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.message) {
          window.location.reload();
        } else {
          alert("o`chmadi");
        }
      });
  };
  return (
    <div>
      <Header />
      <main className="main admin-complex">
        <section className="newcomplex">
          <div className="container">
            <form
              className="newcomplex__form"
              onSubmit={(e) => handleSubmitRoom(e)}
            >
              <h2 className="newcomplex__form--title">Add new house</h2>
              <div className="newcomplex__form--data">
                <div className="newcomplex__form--data-box">
                  <label>Number of rooms</label>
                  <input
                    type="number"
                    name="countRooms"
                    placeholder="rooms count"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>House meter square price</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="meter square price"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>House's area</label>
                  <input
                    type="number"
                    name="area"
                    placeholder="area"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>House's address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>House's complex</label>
                  <select
                    className="newstudent__course"
                    defaultValue=""
                    name="complexId"
                  >
                    <option value="" disabled>
                      Select complex
                    </option>
                    {complexs?.map((complex, index) => (
                      <option key={index} value={complex?.complex_id}>
                        {complex?.complex_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="newcomplex__form--btn">
                  <button
                    className="newcomplex__add-btn newroom__add-btn"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="complexs">
          <div className="container">
            <div className="complexs__body">
              <ul className="cards__list">
                {rooms?.map((room, index) => {
                  return (
                    <li key={index} className="cards__item">
                      <div className="cards__item-top">
                        <img
                          className="cards__item-img"
                          src={room?.company_img}
                          alt="card"
                          width="201"
                          height="202"
                        />
                      </div>

                      <div className="cards__item-infor">
                        <h3 className="cards__item-title">
                          {room?.company_name}
                        </h3>
                        <p className="cards__item-desc">{room?.complex_name}</p>
                        <p className="cards__item-desc">{room?.room_count}</p>
                        <p className="cards__item-desc">{room?.room_price}</p>
                        <p className="cards__item-desc">{room?.room_area}</p>
                        <p className="cards__item-title">
                          {room?.room_address}
                        </p>
                      </div>

                      <div className="cards__item-buttons">
                        <button
                          href="#"
                          className="cards__item-read-btn"
                          target="_blank"
                          onClick={() => deleteRoom(room?.room_id)}
                        >
                          Delete{room?.room_id}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminRoom;
