import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { MESSAGE } from "../../schemas/Validation";
import * as API from "../../API/Index.js";
import AllEpisode from "./AllEpisode.js";
const initialValues = {
  title: "",
  description: "",
  season: "",
};
const Episode = ({ uniqId, getUserData }) => {
  const [isVideoLoad, setIsVideoLoad] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [seriseShow, setSeriseShow] = useState(false);
  const [cartiData, setCartiData] = useState("");
  const [videoData, setVideoData] = useState("");
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
    let images = e.target.files[0];
    setVideoData(images);
  };

  const uploadVideo = async () => {
    setIsLoder(true);
    const header = localStorage.getItem("_tokenCode");
    try {
      const formDataReq = new FormData();
      formDataReq.append("videos", videoData);
      formDataReq.append("title", formData.title);
      formDataReq.append("description", formData.description);
      formDataReq.append("season", formData.season);
      formDataReq.append("uniqueId", uniqId);
      formDataReq.append("type", "add");
      const response = await API.episodeAdd(formDataReq, header);
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
            <h4 class="mb-3">Episode Uploads</h4>
          </div>
          <div className="col-md-3 text-end">
            <button
              type="button"
              onClick={pageshowhide}
              class="btn btn btn-secondary2"
            >
              View Episode
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
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Description"
                onChange={handalerChanges}
                name="description"
                value={formData.description}
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label>Video</label>
              <input
                type="file"
                class="form-control"
                placeholder="Series Title"
                onChange={imageUploading}
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label>Season</label>
              <select
                class="form-control"
                value={formData.season}
                onChange={handalerChanges}
                name="season"
              >
                <option>--- Select ---</option>
              </select>
              {/* <input
                type="file"
                class="form-control"
                placeholder="Series Title"
                onChange={cartihandalerChanges}
              /> */}
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
        <AllEpisode
          pageshowhide={pageshowhide}
          uniqId={uniqId}
          getUserData={getUserData}
        />
      </div>
    </>
  );
};

export default Episode;
