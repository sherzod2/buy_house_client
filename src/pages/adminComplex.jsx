import React from "react";
import Header from "../components/header";
import "./pageStyles/adminComplex.scss";
import useComplexs from "../Hooks/useComplexs";
import useCompanies from "../Hooks/useCompanies";

const AdminComplex = () => {
  const { complexs } = useComplexs();
  const { companies } = useCompanies();

  const handleSubmitComplex = (e) => {
    e.preventDefault();
    const { complexName, companyId } = e.target;
    console.log(complexName.value, companyId.value);

    fetch(`http://localhost:7777/complex/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: complexName.value,
        companyId: companyId.value,
      }),
    });
    window.location.reload();
  };

  const deleteComplex = (id) => {
    console.log(id);
    fetch(`http://localhost:7777/complex/delete/${id}`, {
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
    <>
      <Header />
      <main className="main admin-complex">
        <section className="newcomplex">
          <div className="container">
            <form
              className="newcomplex__form"
              onSubmit={(e) => handleSubmitComplex(e)}
            >
              <h2 className="newcomplex__form--title">Add new complex</h2>
              <div className="newcomplex__form--data">
                <div className="newcomplex__form--data-box">
                  <label>Complex's name</label>
                  <input
                    type="text"
                    name="complexName"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="newcomplex__form--data-box">
                  <label>Complex's company</label>
                  <select
                    className="newstudent__course"
                    defaultValue=""
                    name="companyId"
                  >
                    <option value="" disabled>
                      Select company
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
                {complexs?.map((complex, index) => {
                  return (
                    <li key={index} className="cards__item">
                      <div className="cards__item-top">
                        <img
                          className="cards__item-img"
                          src={complex?.company_img}
                          alt="card"
                          width="201"
                          height="202"
                        />
                      </div>

                      <div className="cards__item-infor">
                        <h3 className="cards__item-title">
                          {complex?.company_name}
                        </h3>
                        <p className="cards__item-desc">
                          {complex?.complex_name}
                        </p>
                      </div>

                      <div className="cards__item-buttons">
                        <button
                          href="#"
                          className="cards__item-read-btn"
                          target="_blank"
                          onClick={() => deleteComplex(complex?.complex_id)}
                        >
                          Delete{complex?.complex_id}
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
    </>
  );
};

export default AdminComplex;
