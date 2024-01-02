import React from 'react';
import {brand} from '../AppUtilities';

const Brands = () => {
  return (
    <>
    <section class="brands">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
                <div class="col-lg-2">
                  <img src={brand} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brands