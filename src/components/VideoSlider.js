import React from 'react';
import {videos} from '../AppUtilities';

const VideoSlider = () => {
  return (
    <>
     <section class="video_slier">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-11">
                    <video width="100%" controls>
                        <source src={videos} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default VideoSlider