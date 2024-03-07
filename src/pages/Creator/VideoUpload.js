import React, { useState } from "react";
import * as API from "../../API/Index.js";
const initialValues = {
  title: "",
  subtitle: "",
  description: "",
  cast: "",
  age_limit: "",
};
const VideoUpload = () => {
  const [formData, setFormData] = useState(initialValues);
  const [videoData, setVideoData] = useState("");

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setVideoData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  const uploadVideo = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        title: formData.title,
        subtitle: formData.subtitle,
        video: videoData,
        description: formData.description,
        cast: formData.cast,
        age_limit: formData.age_limit,
      };
      console.log("reqObj", reqObj);
      const response = await API.creatorVideoAdd(reqObj, header);
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
            <div class="form-check col-md-4">
              <input
                type="radio"
                class="form-check-input"
                id="radio1"
                name="optradio"
                value="option1"
              />
              Option 1<label class="form-check-label" for="radio1"></label>
            </div>
            <div class="form-check col-md-4">
              <input
                type="radio"
                class="form-check-input"
                id="radio2"
                name="optradio"
                value="option2"
              />
              Option 2<label class="form-check-label" for="radio2"></label>
            </div>
            <div class="form-check col-md-4">
              <input type="radio" class="form-check-input" />
              Option 3<label class="form-check-label"></label>
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
            <button
              type="button"
              class="btn btn btn-secondary2 mt-3"
              onClick={uploadVideo}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoUpload;
