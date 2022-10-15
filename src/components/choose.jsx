import React from "react";
import "./styles/choose.css";
import useCompany from "../Hooks/useCompany";
import useComplex from "../Hooks/useComplex";
import useRoom from "../Hooks/useRoom";
import useBank from "../Hooks/useBank";
// company, complex, room, bank
const Choose = () => {
  const { company } = useCompany();
  const { complex } = useComplex();
  const { room } = useRoom();
  const { bank } = useBank();
  return (
    <>
      <main className="main">
        <section className="choose">
          <div className="container">
            {company[0] && (
              <div className="choose__body">
                <div className="choose__company">
                  {company[0]?.company_img && (
                    <img
                      className="choose_company-img"
                      src={company[0]?.company_img}
                      alt="company logo"
                    />
                  )}
                  {company[0]?.company_name && (
                    <h3 className="choose__company-name">
                      {company[0]?.company_name}
                    </h3>
                  )}
                  {complex[0]?.complex_name && (
                    <h4 className="choose__complex-name">
                      {complex[0]?.complex_name}
                    </h4>
                  )}
                  {room[0]?.room_count && (
                    <p className="choose__room-count">
                      {room[0]?.room_count} rooms
                    </p>
                  )}
                  {room[0]?.room_price && (
                    <p className="choose__room-price">
                      {room[0]?.room_price}$ meter square
                    </p>
                  )}
                  {room[0]?.room_area && (
                    <h4 className="choose__room-area">
                      {room[0]?.room_area} meter square
                    </h4>
                  )}
                  {room[0]?.room_address && (
                    <p className="choose__room-address">
                      {room[0]?.room_address}
                    </p>
                  )}
                </div>
                <div className="choose__bank">
                  {bank[0]?.bank_img && (
                    <img
                      className="choose_company-img"
                      src={bank[0]?.bank_img}
                      alt="company logo"
                    />
                  )}
                  {bank[0]?.bank_name && (
                    <h3 className="choose__bank-name">{bank[0]?.bank_name}</h3>
                  )}
                  {bank[0]?.bank_updo && (
                    <h5 className="choose__bank-updo">
                      {bank[0]?.bank_updo} updo
                    </h5>
                  )}
                  {bank[0]?.bank_duration && (
                    <h5 className="choose__bank-duration">
                      Mortgage duraation: {bank[0]?.bank_duration} year
                    </h5>
                  )}
                  {bank[0]?.starting_payment && (
                    <h3 className="choose__bank-start-payment">
                      Starting payment: 17%
                    </h3>
                  )}
                </div>
                <div className="choose__calc">
                  {bank[0]?.house_price && (
                    <>
                      <h3 className="choose__house-calc">Calculator</h3>
                      <h5 className="choose__house-price">
                        House price: {bank[0]?.house_price}$
                      </h5>
                    </>
                  )}
                  {bank[0]?.starting_payment && (
                    <h5 className="choose__house-start-payment">
                      Starting payment: {bank[0]?.starting_payment}$
                    </h5>
                  )}
                  {bank[0]?.monthly_payment && (
                    <>
                      <h5 className="choose__house-monthly-payment">
                        Monthly payment: {Math.round(bank[0]?.monthly_payment)}$
                      </h5>
                      <h5 className="choose__house-bank-service">
                        Bank service: 250$
                      </h5>
                      <p className="choose__house-payment-duration">
                        Payment duration: {bank[0]?.bank_duration} year
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Choose;
