import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-sm-6">
                            <div class="single-box">
                                {/* <img src="https://static.basicinvite.com/skin/frontend/basicinvite/default/images/mobile-logo.png" alt="" width={190} /> */}
                                <h2>Quick Links </h2>
                              
                                <div id="our-difference">
                                    <ul>
                                        <li><a href="#"><u>Order Assistance</u></a></li>
                                        <li><a href="#"><u>Your Saved Products</u></a></li>
                                        <li><a href="#"><u>Your Saved Products</u></a></li>
                                        <li><a href="#"><u>Peel & Seal Envelopes</u></a></li>
                                        <li><a href="#"><u>Advanced Search</u></a></li>
                                        <li><a href="#"><u></u></a></li>
                                        <li><a href="#"><u></u></a></li>
                                        <li><a href="#"><u></u></a></li>
                                    </ul>

                                    <ul>
                                        <li><a href="#"><u>Your Proofs</u></a></li>
                                        <li><a href="#"><u>Paper Quality</u></a></li>
                                        <li><a href="#"><u>Free Address Collection</u></a></li>
                                        <li><a href="#"><u>Our Love It Guarantee</u></a></li>
                                        <li><a href="#"><u>Shipping Policy</u></a></li>
                                        <li><a href="#"><u></u></a></li>
                                    </ul>
                                </div>
                                <h3>We Accect</h3>
                                <div class="card-area">
                                    <i class="fa fa-cc-visa"></i>
                                    <i class="fa fa-credit-card"></i>
                                    <i class="fa fa-cc-mastercard"></i>
                                    <i class="fa fa-cc-paypal"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="single-box">
                                <h2>Sign up for discounts</h2>
                                <p>Join our mailing list to get notified of sales and discounts</p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="enter your email" aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2"><i class="fa fa-long-arrow-right"></i></span>
                                </div>
                                <h2><u>SIGN UP</u></h2>
                                <p class="socials">
                                    <i class="fa fa-facebook"></i>
                                    <i class="fa fa-dribbble"></i>
                                    <i class="fa fa-pinterest"></i>
                                    <i class="fa fa-twitter"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-box">
                                <h2>Contact Us</h2>
                                <ul>
                                    <li><a href="#">Looking for help with an existing order?</a></li>
                                    <li><a href="#"><u>click here for order assistance</u></a></li>
                                    <li><a href="#">Chat with us live</a></li>
                                    <li><a href="#">Email us</a></li>
                                    <li><a href="#">1.800.705.1243</a></li>
                                    {/* <li><a href="#">VPS Domain</a></li> */}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
