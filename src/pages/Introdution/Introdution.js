import React from 'react'
import IntroductionTab from './IntroductionTab'


const Introdution = () => {
  return (
    <>
    <section class="innerBanner">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-11">
                    <div class="innerBanner_img_wrap">
                        <img src="images/intro-banner.jpg" alt="" class="w-100"/>
                    </div>
                    <div class="users relative">
                        <center>
                            <span class="main_User">
                                <img src="images/user.jpg" alt="" class="w-100"/>
                                <span class="mail"><i class="bi bi-envelope"></i></span>
                            </span>
                            <div class="clearfix"></div>
                            <span class="joined">Joined Jan 21</span>
                            <h3 class="user_heading">Robinson Walker</h3>
                            <p class="user_text">Filmmaker by Profession, and storyteller by passion. Here to inspire the next grneration dreamers </p>
                            <span><a href="#" class="btn btn-secondary2">Follow</a></span>
                            <span><a href="#" class="btn btn-outline-light">Mention</a></span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-11">
                    <hr class="mt-5 mb-5"/>
                    <IntroductionTab/>
                </div> 
            </div>       
        </div>
    </section>
    </>
  )
}

export default Introdution