import React, { useState } from "react";
import { IMG } from "../../API/constant";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import Episode from "./Episode";
const AllSerise = ({ getUserData, pageshowhide }) => {
  const [open, setOpen] = useState(false);
  const [uniqId, setUniqId] = useState("");

  const [episodPsage, setEpisodPsage] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const episodPage = (data) => {
    setUniqId(data);
    //console.log("data", data);
    setEpisodPsage(true);
  };

  return (
    <>
      {episodPsage ? (
        <>
          <Episode getUserData={getUserData} uniqId={uniqId} />
        </>
      ) : (
        <>
          <div className="row justify-content-end">
            <div className="col-md-9">
              <h4 class="mb-3">All Series</h4>
            </div>
            <div className="col-md-3 text-end mb-3">
              <button
                type="button"
                onClick={pageshowhide}
                class="btn btn btn-secondary2"
              >
                Add Series
              </button>
            </div>
          </div>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Video</th>
                <th scope="col">Episode</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getUserData === "" || getUserData.length === 0
                ? ""
                : getUserData.series.map((item, index) => (
                    <tr>
                      <th>1</th>
                      <td width="200">{item.title}</td>
                      <td width="200">
                        <img style={{ width: "15%" }} src={IMG + item.img} />
                      </td>
                      <td width="150">
                        <span className="videobutton" onClick={onOpenModal}>
                          {" "}
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </td>
                      <td width="150">
                        <span className="videobutton" onClick={onOpenModal}>
                          <i class="fa-solid fa-video"></i> 10+
                        </span>
                      </td>
                      <td>
                        <i class="fa-solid fa-trash"></i>
                        <span
                          className="plusEpisod"
                          onClick={() => episodPage(item.unique_id)}
                        >
                          Add Episode
                        </span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AllSerise;
