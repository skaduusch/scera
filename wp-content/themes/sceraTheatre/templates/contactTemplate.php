<?php
/*
Template Name: Contact Page
*/
get_header();
?>

<div class="contact-page-container">
    <img src="<?php echo get_template_directory_uri(); ?>/img/contact-banner.png" alt="">
    
    <section class="title-section-center borderless-section">
        <h2 class="title blue">Contact Us</h2>
    
        <h3 class="uppercase">Main Office</h3>
        <p class="text-section padding-none">SCERA Center for the Arts, 745 South State Street, Orem, UT 84058</p>
        <p class="text-section padding-none"><span>Phone: </span>(801) 225-ARTS</p>
        <p class="text-section padding-none"><span>Hours: </span>10AM-6PM Weekdays</p>
    </section>

    <p class="text-section center">Email us at info@scera.org, All ticket questions to our email</p>

    <section class="visit-section borderless-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12175.311814626919!2d-111.70230536305183!3d40.279571870098984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9a94a7a0f48f%3A0xf72b03aaec011118!2sSCERA%20Center%20for%20the%20Arts!5e0!3m2!1sen!2sus!4v1595549070393!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </section>

    <section class="join-section bg-grey borderless-section">
        <h2 class="title blue center">Join Mailing List</h2>

        <section class="center">
            <button class="scera-btn">Subscribe</button>
        </section>
    </section>

    <section class="parking-section borderless-section center">
        <h2 class="title blue">Parking</h2>

        <p class="text-section">Free parking is available in several lots near the Shell Theater SCERA Park Pool (699 S. State St.) Orem High School (175 S. 400 E.) LDS Church (631 S. 400 E.) SCERA Park Elementary (450 S. 400 E.) SCERA Center (745 S. State) and along 400 East.</p>
    </section>
</div>

<?php get_footer(); ?>