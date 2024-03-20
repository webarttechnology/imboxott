import React, { useEffect, useState } from "react";
import * as API from "../../API/Index.js";
import { MESSAGE } from "../../schemas/Validation.js";
import { BeatLoader } from "react-spinners";
import AllSerise from "./AllSerise.js";
const initialValues = {
  title: "",
  description: "",
};
const Serise = ({ getUserData }) => {
  const [isVideoLoad, setIsVideoLoad] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [seriseShow, setSeriseShow] = useState(false);
  const [cartiData, setCartiData] = useState("");
  const [uniqId, setUniqId] = useState("");
  const [isLoder, setIsLoder] = useState(false);

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    setIsLoder(false);
    setFormData({ ...formData, [name]: value });
  };
  const cartihandalerChanges = async (e) => {
    setCartiData(e.target.files[0]);
    setIsLoder(false);
  };
  const imageUploading = async (e) => {
    setIsVideoLoad(true);
    const header = localStorage.getItem("_tokenCode");
    let images = e.target.files[0];
    if (uniqId === "") {
      const formDataReq = new FormData();
      formDataReq.append("videos", images);
      const response = await API.creatorSerise(formDataReq, header);
      console.log("formDataReq", response);
      if (response.data.success === 1) {
        setUniqId(response.data.data.unique_id);
        setIsVideoLoad(false);
      }
    } else {
      const formDataReq = new FormData();
      formDataReq.append("videos", images);
      formDataReq.append("uniqueId", uniqId);
      const response = await API.creatorSerise(formDataReq, header);
      console.log("formDataReq", response);
      if (response.data.success === 1) {
        setUniqId(response.data.data.unique_id);
        setIsVideoLoad(false);
      }
    }

    setIsLoder(false);
  };
  const uploadVideo = async () => {
    setIsLoder(true);
    const header = localStorage.getItem("_tokenCode");
    try {
      const formDataReq = new FormData();
      formDataReq.append("title", formData.title);
      formDataReq.append("description", formData.description);
      formDataReq.append("img", cartiData);
      formDataReq.append("uniqueId", uniqId);
      const response = await API.creatorSerise(formDataReq, header);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsLoder(false);
        MESSAGE(response.data.msg, 1);
      } else {
        setIsLoder(false);
      }
    } catch (error) {}
  };

  const pageshowhide = () => {
    setSeriseShow(!seriseShow);
  };

  return (
    <>
      <div className={seriseShow ? "d-none" : ""}>
        <div className="row">
          <div className="col-md-9">
            <h4 class="mb-3">Series Uploads</h4>
          </div>
          <div className="col-md-3 text-end">
            <button
              type="button"
              onClick={pageshowhide}
              class="btn btn btn-secondary2"
            >
              View Series
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <label>Title</label>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Series Title"
                onChange={handalerChanges}
                value={formData.title}
                name="title"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label>Thumbnail</label>
              <input
                type="file"
                class="form-control"
                placeholder="Series Title"
                onChange={cartihandalerChanges}
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label>Trailer</label>
              <input
                type="file"
                class="form-control"
                placeholder="Series Title"
                onChange={imageUploading}
                disabled={isVideoLoad ? true : false}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="loader">
              {isVideoLoad ? <BeatLoader color="#fff" /> : ""}
            </div>
          </div>
          <div className="col-md-12">
            <div class="text-end align-self-end">
              {isLoder ? (
                <button type="button" class="btn btn btn-secondary2 mt-3">
                  <BeatLoader color="#fff" />
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn btn-secondary2 mt-3"
                  onClick={uploadVideo}
                >
                  Upload
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={seriseShow === false ? "d-none" : "row"}>
        <AllSerise
          setSeriseShow={setSeriseShow}
          pageshowhide={pageshowhide}
          getUserData={getUserData}
        />
      </div>
    </>
  );
};

export default Serise;
