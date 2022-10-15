import React from "react";
import Header from "../components/header";
import "./pageStyles/adminCompany.scss";
import useCompanies from "../Hooks/useCompanies";

const AdminCompany = () => {
  const { companies } = useCompanies();

  const handleSubmitCompany = (e) => {
    e.preventDefault();
    const { companyName, companyImg } = e.target;
    console.log(companyName.value, companyImg.value);

    fetch(`http://localhost:7777/company/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: companyName.value,
        img: companyImg.value,
      }),
    });
    window.location.reload();
  };

  const deleteCompany = (id) => {
    console.log(id);
    fetch(`http://localhost:7777/company/delete/${id}`, {
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
              onSubmit={(e) => handleSubmitCompany(e)}
            >
              <h2 className="newcomplex__form--title">Add new company</h2>
              <div className="newcomplex__form--data">
                <div className="newcomplex__form--data-box">
                  <label>Company's name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>Company's picture's link</label>
                  <input
                    type="text"
                    name="companyImg"
                    placeholder="picture link"
                    required
                  />
                </div>
                <div className="newcomplex__form--btn">
                  <button className="newcomplex__add-btn" type="submit">
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
                {companies?.map((company, index) => {
                  return (
                    <li key={index} className="cards__item">
                      <div className="cards__item-top">
                        <img
                          className="cards__item-img"
                          src={company?.company_img}
                          alt="card"
                          width="201"
                          height="202"
                        />
                      </div>

                      <div className="cards__item-infor">
                        <h3 className="cards__item-title">
                          {company?.company_name}
                        </h3>
                        <p className="cards__item-desc"></p>
                      </div>

                      <div className="cards__item-buttons">
                        <button
                          href="#"
                          className="cards__item-read-btn"
                          target="_blank"
                          onClick={() => deleteCompany(company?.company_id)}
                        >
                          Delete{company?.company_id}
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

export default AdminCompany;
