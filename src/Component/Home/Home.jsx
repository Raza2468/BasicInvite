import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export default function Home() {
    return (
        <>
            <Header />
            <div className='container'>
                {/* SECTION ONE */}
                <section id="about" class="about section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            {/* <h2>About</h2> */}
                            {/* <h3>Find Out More <span>About Us</span></h3> */}
                            <img data-src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/congrats_heading.png" alt="Congratulations on your
        engagement!" class="ls-is-cached lazyloaded" id="signature" src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/congrats_heading.png" />
                            <p>Not sure where to start? Here are some steps you can take today to make planning your wedding as easy as possible</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                                {/* <img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/planner_banner_desktop_optimized.jpg.webp"  class="img-fluid" alt="" /> */}
                            </div>

                            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <ul>
                                    <li>
                                        <div>
                                            <p class="fst-italic mt-2">
                                                <i class="bx bx-store-alt">1</i>
                                                <h3>Download our free printable planner.</h3>
                                                Over 100 pages of planning templates!
                                            </p>
                                        </div>
                                    </li>
                                    <a href="/wedding/wedding-invitations.html" class="btn btn-link holiday"><span>Download</span></a>
                                </ul>

                                {/* <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p> */}
                            </div>
                        </div>

                    </div>
                </section>
                <br />
                <br />
                {/* SECTION TWO */}
                <section id="about" class="about section-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="row" id='sectio2'>
                            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                                <img src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/mailing_address_banner_mobile_optimized.jpg" class="img-fluid set-section-img2" alt="" />
                            </div>

                            <div class="col-lg-6 p-5 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <ul>
                                    <li>
                                        <div>
                                            <p class="fst-italic mt-2">
                                                <i class="bx bx-store-alt">2</i>
                                                <h3 id='sectionText'>Create a free website to collect addresses</h3>
                                                {/* Over 100 pages of planning templates! */}
                                            </p>
                                        </div>
                                    </li>
                                    <p>
                                        Automatically collect guest addresses with a simple link. Print them on your envelopes for FREE
                                    </p>
                                    <a href="/wedding/wedding-invitations.html" class="btn btn-link holiday"><span>Create A Website</span></a>
                                </ul>

                            </div>
                        </div>

                    </div>
                </section>
                <br />
                <br />
                {/* SECTION THREE */}
                <section id="about" class="about section-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="row">
                            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                                <img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/std_banner_mobile_optimized.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <ul>
                                    <li>
                                        <div>
                                            <p class="fst-italic mt-2">
                                                <i class="bx bx-store-alt">3</i>
                                                <h3>Order custom save the date samples</h3>
                                                Customize photos, colors, and text then click “order a sample”
                                            </p>
                                        </div>
                                    </li>
                                    <a href="/wedding/wedding-invitations.html" class="btn btn-link holiday"><span>Download</span></a>
                                </ul>

                                {/* <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p> */}
                            </div>
                        </div>

                    </div>
                </section>
                <br />
                <br />
                {/* ================ */}
                <div class="section-title">
                    <div id="ribbon-container">
                        <img class="ls-is-cached lazyloaded" id="signature" height={100} src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe_header_mobile.png" alt="Congratulations on your" />
                    </div>
                    <br />
                    <p>Whether your event is an outdoor bash in the woods or a glitzy big city dinner, we've got the perfect invite to match your style.</p>
                </div>
                <br />
                <br />
                <br />
                {/* <!-- ======= Card Section ======= --> */}
                <section id="chefs" class="chefs">
                    <div class="container">

                        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_foil.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>styled photo by @julianamary</span>
                                        <h4 className='m-2'>FOIL INVITATIONS</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Autumn Leaves</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_seal_and_send.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>sstyled photo by @steadyhearcreativeartist</span>
                                        <h4 className='m-2'>SEAL & SEND INVITES</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Split Type</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_clear.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>styled photo by @me_weddingsstyled photo</span>
                                        <h4 className='m-2'>CLEAR INVITATIONS</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Sweet Grass</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="container">
                        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_floral.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>styled photo by @basicinvite</span>
                                        <h4 className='m-2'>FLORAL INVITATIONS</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Sunflower Field</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_modern.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>styled photo by @kristinaadamsphoto</span>
                                        <h4 className='m-2'>MODERN INVITATIONS</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Minimal Print</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="member">
                                    <div class="pic" style={{ display: "flex", justifyContent: "center" }}><img src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/wedding_vibe/wedding_vibe_typography.png" class="img-fluid" alt="" /></div>
                                    <div class="member-info text-center mt-4">
                                        <span>styled photo by @katieannhernandez</span>
                                        <h4 className='m-2'>TYPOGRAPHY INVITATIONS</h4>
                                        <h5 style={{ fontWeight: "normal" }}>Brush Script</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Card Section --> */}
                <br />
                <br />
                {/* ========== */}
                <div class="section-title">
                    <div id="ribbon-container">
                        <img class="ls-is-cached lazyloaded" id="signature" height={100} src="https://d2wi55zl4h3jkw.cloudfront.net/media/wysiwyg/2022/BI/Homepage/custom_suite_heading.png" alt="Congratulations on your" />
                    </div>
                    <br />
                    <p style={{ fontWeight: "normal" }}>Choose from over 180 colors and metallic foils to create suite that is as unique as your love story. Match everything for your big day with more matching suite items than <br /> other sites.</p>
                </div>
                <br />

                <picture>
                    <img data-src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/custom_suite_optimized_2.jpg"
                        alt="Congratulations on your engagement!" class="custom-suite-image lazyloaded"
                        src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/custom_suite_optimized_2.jpg" />
                </picture>
                <br />
                <br />
                <br />

                <div class="section-title">
                    <div id="ribbon-container">
                        <p class="hide-below-768">The Basic Invite Difference</p>
                    </div>
                    <br />
                    <p style={{ fontWeight: "normal" }}>We are a family owned company that has been designing and printing wedding stationery in Utah for over fifteen years. Here are some of the features that make us stand out from the crowd</p>
                    <br />
                    <br />
                    <div class="our-difference-list">
                        <ul>
                            <li>Custom color invitations</li>
                            <li>Instant previews</li>
                            <li>Customized samples</li>
                            <li>Free custom foil text</li>
                            <li>Free websites</li>
                            <li>Free address collection</li>
                        </ul>

                        <ul>
                            <li>Fast shipping</li>
                            <li>Mailing service</li>
                            <li>Luxe paper types</li>
                            <li>Utah based customer service</li>
                            <li>Free Peel &amp; Seal envelopes</li>
                            <li>Free Address printing</li>
                        </ul>

                    </div>

                </div>
                <br />

                <div class="social-links text-center">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
                </div>
                <br />
                <br />
                {/* <!-- Footer --> */}
                <footer class="text-center text-lg-start bg-light text-muted">


                    <section class="">
                        <div class="container text-center text-md-start mt-5">
                            <div class="row mt-3">
                                <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4">
                                        Quick Links
                                    </h6>
                                    <div class="our-difference-list">
                                        <ul>
                                            <li>Order Assistance</li>
                                            <li>Instant previews</li>
                                            <li>Customized samples</li>
                                            <li>Free custom foil text</li>
                                            <li>Free websites</li>
                                            <li>Free address collection</li>
                                        </ul>

                                        <ul>
                                            <li>Your Proofs</li>
                                            <li>Paper Quality</li>
                                            <li>Free Address Collection</li>
                                            <li>Our Love It Guarantee</li>
                                            <li>Shipping Policy</li>
                                            <li>Contact Us</li>
                                            <li>Inspiration Gallery</li>
                                            <li>Basic Invite Blog</li>
                                            <li>Wording Examples</li>
                                            <li>Partner Program</li>
                                            <li>Site Map</li>
                                        </ul>

                                    </div>
                                </div>

                                {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold mb-4">
                                        Quick Links
                                    </h6>
                                    <p>
                                        <a href="#!" class="text-reset">Your Saved Products</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Order a Custom Sample</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Peel & Seal Envelopes</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Advanced Search</a>
                                    </p>
                                    
                                </div> */}

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 class="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" class="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Help</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>
                                        info@example.com
                                    </p>
                                    <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                        </div>
                    </section>
                    <div class="text-center p-4" >
                        © 2023 Copyright:
                        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">faizeraza2468@gmail.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
            </div>

        </>
    )
}
