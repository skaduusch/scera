<?php
/*
Template Name: Scera Outdoor Theater Page
*/
get_header();
?>

<div class="scera-outdoor-theater-container">
    <img src="<?php echo get_template_directory_uri(); ?>/img/scera-shell-banner.png" alt="">

    <section class="title-section-center borderless-section">
        <h2 class="title blue">Scera Shell Outdoor Theater</h2>

        <p class="text-section">600 South 400 East, Orem, UT, 84058</p>
        <p class="text-section">Middle of Scera Park</p>
        <p class="text-section">Admissions Vary on Event</p>
    </section>

    <section class="details-section bg-blue border-section">
        <div class="top-transition-blue"></div>

        <h2 class="title gold">Details</h2>
        
        <p class="text-section">With the beautiful backdrop of the Wasatch Mountains, enjoy a summer season under the stars filled with grand-scale live theatre, nationally touring concerts, and big screen outdoor movies! The SCERA Shell Outdoor Theatre features festival seating on a grassy slope, with a designated general admission section for chairs and another just for blankets. There are also prime reserved areas in the center of the hill that come with a free lawn chair.</p>

        <p class="text-section">Thanks to the City of Orem, we have handrails to help you get up and down the hill. And a special thanks to you for voting SCERA as Best Live Music Venue, Best Live Theatre, Best Date Place and Best Family Entertainment Venue!</p>

        <img src="<?php echo get_template_directory_uri(); ?>/img/outdoor-stage-map.png" alt="">

        <div class="bottom-transition-blue"></div>
    </section>

    <section class="title-section-center borderless-section">
        <h2 class="title blue">Policies & Faqs</h2>

        <p class="text-section">To see the policies and frequently asked questions about SCERA Shell Outdoor Theater, Click the link below.</p>

        <a href="#" class="scera-btn">More Info</a>
    </section>

    <section class="upcoming-events bg-red border-section">
		<div class="top-transition-red"></div>

		<h2 class="title gold">Upcoming Events</h2>

			<section class="events-container">
				<div class="events-info">
					<img src="<?php echo get_template_directory_uri(); ?>/img/willy-wonka-square.png" alt="">
					<div class="events-outlook">
                        <div class="events-text">
                            <h3>Willy Wonka</h3>
                            <p class="text-section">July 3 - July 18</p>
                        </div>
                        <div class="ticket-section">
                            <img class="golden-ticket" src="<?php echo get_template_directory_uri(); ?>/img/decoratives/ticket.svg" alt="">
                        </div>
					</div>
				</div>

				<div class="events-info">
					<img src="<?php echo get_template_directory_uri(); ?>/img/jumanji.png" alt="">
					<div class="events-outlook">
						<div class="events-text">
							<h3>Jumanji Next Level</h3>
							<p class="text-section">July 8</p>
						</div>
						<div class="ticket-section">
							<img class="golden-ticket" src="<?php echo get_template_directory_uri(); ?>/img/decoratives/ticket.svg" alt="">
						</div>
					</div>
				</div>
			</section>
			
			<div class="center">
				<a class="scera-btn">More</a>
			</div>

		<div class="bottom-transition-red"></div>
	</section>

    <section class="visit-section borderless-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.5133767458005!2d-111.68901168496923!3d40.286558771470574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9a94a7a0f48f%3A0x96be3a52932aa0c8!2sSCERA%20Shell%20Outdoor%20Theatre!5e0!3m2!1sen!2sus!4v1595554269528!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        <h2 class="title blue">Visit the Venue</h2>

        <p class="text-section">SCERA Shell Outdoor Theater 600 South 400 East, Orem, UT, 84058</p> 
        <p class="text-section">Middle of Scera Park</p>

        <p class="text-section">(801) 225-2787</p>
    </section>
</div>

<?php get_footer(); ?>