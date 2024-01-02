import React from 'react'
import {nationalGeograhic} from '../AppUtilities'

const Geography = () => {
  return (
    <>
    <section class="d-flex n_geographic justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 col-sm-4 text-center">
                    <img src={nationalGeograhic} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Geography