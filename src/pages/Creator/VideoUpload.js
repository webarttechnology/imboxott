import React, { useEffect, useState } from "react";
import * as API from "../../API/Index.js";
import { MESSAGE } from "../../schemas/Validation.js";
import { BeatLoader } from "react-spinners";
const initialValues = {
  title: "",
  subtitle: "",
  video: "",
  description: "",
  cast: "",
  age_limit: "",
};
const VideoUpload = ({ allCartifi }) => {
  const [formData, setFormData] = useState(initialValues);
  const [videoData, setVideoData] = useState("");
  const [cartiData, setCartiData] = useState("");

  const [isLoder, setIsLoder] = useState(false);

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    setIsLoder(false);
    setFormData({ ...formData, [name]: value });
  };
  const cartihandalerChanges = async (data) => {
    setCartiData(data);
    setIsLoder(false);
  };
  const imageUploading = (e) => {
    let images = e.target.files[0];
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
      formDataReq.append("subtitle", formData.subtitle);
      formDataReq.append("description", formData.description);
      formDataReq.append("cast", formData.cast);
      formDataReq.append("age_limit", cartiData);
      const response = await API.creatorVideoAdd(formDataReq, header);
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
      <h3 class="mb-3">Video Uploads</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Video Title"
              onChange={handalerChanges}
              value={formData.title}
              name="title"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Sub Title"
              onChange={handalerChanges}
              value={formData.subtitle}
              name="subtitle"
            />
          </div>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id=""
              onChange={handalerChanges}
              value={formData.cast}
              name="cast"
              placeholder="Cast"
            />
          </div>
          <div class="d-flex flex-wrap flex-row mt-3 justify-content-between">
            <label for="" class="w-100 mb-1">
              Choose age limit
            </label>
            <div class="form-checkss">
              {allCartifi.length === 0
                ? ""
                : allCartifi.map((item, index) => (
                    <label class="form-check-label" for={index}>
                      <input
                        type="radio"
                        class="form-check-input"
                        id={index}
                        onChange={() => cartihandalerChanges(item.abbr)}
                        name="age_limit"
                      />
                      {item.abbr}
                    </label>
                  ))}
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-5">
            <textarea
              class="form-control"
              placeholder="Description comes here"
              id=""
              style={{ height: 260 }}
              onChange={handalerChanges}
              value={formData.description}
              name="description"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <fieldset class="upload_dropZone text-center">
            <legend class="visually-hidden">Image uploader</legend>

            <i class="fa-solid fa-cloud-arrow-up"></i>

            <p class="small my-2">Upload Your Video</p>

            <input
              id="upload_image_background"
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

export default VideoUpload;
