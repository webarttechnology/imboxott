import React, { useEffect, useState } from "react";
import { IMG } from "../../API/constant";
import * as API from "../../API/Index.js";
import Modal from "react-responsive-modal";
const AllEpisode = ({ uniqId, pageshowhide }) => {
  const [episodeData, setEpisodeData] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const allEpisodeData = async () => {
    const header = localStorage.getItem("_tokenCode");

    try {
      const response = await API.getEpisode(uniqId, header);
      console.log("response", response);
      setEpisodeData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    allEpisodeData();
  }, []);

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-md-9">
          <h4 class="mb-3">All Episode</h4>
        </div>
        <div className="col-md-3 text-end mb-3">
          <button
            type="button"
            onClick={pageshowhide}
            class="btn btn btn-secondary2"
          >
            Add Episode
          </button>
        </div>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Video</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {episodeData === "" || episodeData.length === 0
            ? ""
            : episodeData.map((item, index) => (
                <tr key={index}>
                  <th>1</th>
                  <td width="200">{item.title}</td>
                  <td width="200">{item.description}</td>
                  <td width="150">
                    <span className="videobutton" onClick={onOpenModal}>
                      {" "}
                      <i class="fa-solid fa-video"></i>
                    </span>
                    <Modal open={open} onClose={onCloseModal} center>
                      <video controls width="500" src={IMG + item.video} />
                      <h4 className="videoTitle">{item.title}</h4>
                      <p className="videoDec">{item.description}</p>
                    </Modal>
                  </td>

                  <td>
                    <i class="fa-solid fa-trash"></i>
                    <span className="plusEpisod">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default AllEpisode;
