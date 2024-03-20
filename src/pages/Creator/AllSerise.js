import React, { useState } from "react";
import { IMG } from "../../API/constant";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const AllSerise = ({ getUserData, pageshowhide }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="row justify-content-end">
        <div className="col-md-3 text-end mb-3">
          <button
            type="button"
            onClick={pageshowhide}
            class="btn btn btn-secondary2"
          >
            back
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
                  <td width="100">
                    <span className="videobutton" onClick={onOpenModal}>
                      {" "}
                      <i class="fa-solid fa-video"></i>
                    </span>
                  </td>
                  <td width="100">
                    <span className="videobutton" onClick={onOpenModal}>
                      {" "}
                      <i class="fa-solid fa-video"></i>
                    </span>
                  </td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default AllSerise;
