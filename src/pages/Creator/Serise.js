import React, { useEffect, useState } from "react";
import * as API from "../../API/Index.js";
import { MESSAGE } from "../../schemas/Validation.js";
import { BeatLoader } from "react-spinners";
const initialValues = {
  title: "",
  description: "",
};
const Serise = () => {
  const [formData, setFormData] = useState(initialValues);
  const [videoData, setVideoData] = useState("");
  const [cartiData, setCartiData] = useState("");

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
    const header = localStorage.getItem("_tokenCode");
    let images = e.target.files[0];
    const formDataReq = new FormData();
    formDataReq.append("videos", images);
    const response = await API.creatorSerise(formDataReq, header);
    console.log("formDataReq", response);
    setIsLoder(false);
    setVideoData(images);
  };

  const uploadVideo = async () => {
    setIsLoder(true);
    const header = localStorage.getItem("_tokenCode");
    try {
      const formDataReq = new FormData();
      formDataReq.append("video", videoData);
      formDataReq.append("title", formData.title);
      formDataReq.append("description", formData.description);
      formDataReq.append("img", cartiData);
      formDataReq.append("uniqueId", "");
      const response = await API.creatorVideoAdd(formDataReq, header);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsLoder(false);
        MESSAGE(response.data.msg, 1);
      } else {
        setIsLoder(false);
      }
      console.log("response", response);
    } catch (error) {}
  };

  return (
    <>
      <h3 class="mb-3">Series Uploads</h3>
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
            <label>Video</label>
            <input
              type="file"
              class="form-control"
              placeholder="Series Title"
              onChange={imageUploading}
            />
          </div>
        </div>
        <div class="col-md-12 d-none">
          <fieldset class="upload_dropZone text-center">
            <legend class="visually-hidden">Image uploader</legend>

            <i class="fa-solid fa-cloud-arrow-up"></i>

            <p class="small my-2">Upload Your Video</p>

            <input
              id="upload_image_backgrounds"
              onChange={imageUploading}
              name="video"
              data-post-name="image_background"
              data-post-url="https://someplace.com/image/uploads/backgrounds/"
              class="position-absolute invisible"
              type="file"
              multiple
            />

            <label
              class="btn btn-secondary2 mb-3"
              for="upload_image_background"
            >
              Choose file(s)
            </label>

            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-2 mb-0"></div>
          </fieldset>
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
    </>
  );
};

export default Serise;
