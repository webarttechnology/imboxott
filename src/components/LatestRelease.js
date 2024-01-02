import React from "react";
import {latestSliders} from '../AppUtilities';
import {movieTitles} from '../AppUtilities';
import Slider from "./Slider";

const LatestRelease = () => {
    return (
      <>
        <section class="text-center latest_release">
            <div class="container-fluid">
                <div class="row align-items-end">
                    <div class="col-12 p-0">
                        <h3 class="site_heading">Latest <span>Releases</span></h3>
                        <Slider/>
                        
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
export default LatestRelease;
  