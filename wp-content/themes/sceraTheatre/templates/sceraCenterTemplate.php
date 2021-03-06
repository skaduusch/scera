<?php
/*
Template Name: Scera Center Page
*/
get_header();
?>

<div class="scera-center-container">
    <img src="<?php echo get_template_directory_uri(); ?>/img/scera-center-banner.png" alt="">

    <section class="title-section-center borderless-section">
        <h2 class="title blue">Scera Center for the Arts</h2>

        <p class="text-section">10AM-6PM Weekdays</p>
        <p class="text-section">745 South State Street, Orem, UT, 84058</p>
        <p class="text-section">Admissions Vary on Events</p>
    </section>

    <section class="details-section bg-blue border-section">
        <div class="top-transition-blue"></div>

        <h2 class="title gold">Details</h2>
        
        <p class="text-section">The historic SCERA Center for the Arts, opened in 1941, is our longest-standing facility and has two theatres: the remodeled Clarke Grand Theatre and Showhouse II. The entire lobby and concessions area was renovated in 2006. In the lobby are series of stained glass windows depicting 8 areas of the arts: as well as two floor-to-ceiling custom stained glass pieces by artist Tom Holdman. The Center offer something for everyone: our indoor performing arts series; art exhibits in Gallery 101; an outdoor courtyard; feature films, classic cinema series and children’s summer matinee program; arts education programs for youth including drama, music, dance, art and more (with financial need scholarships awarded to deserving students); special events including Sunday firesides, Theatre for Young Audiences, Celebration of Veterans, The Star Awards and the LDS Film Festival; and rental availability of our theaters and multi-purpose rooms for fairs, festivals, meetings, reunions, conferences, classes, performances, recitals, rehearsals and more.</p>

        <img src="<?php echo get_template_directory_uri(); ?>/img/stage-map.png" alt="">

        <div class="bottom-transition-blue"></div>
    </section>

    <section>
        <h2 class="title blue">Gallery</h2>
    </section>

    <section class="upcoming-events bg-red border-section">
		<div class="top-transition-red"></div>

		<h2 class="title gold">Upcoming Events</h2>

			<section class="events-container">
				<div class="events-info">
					<img src="<?php echo get_template_directory_uri(); ?>/img/UE-night-of-broadway.png" alt="">
					<div class="events-outlook">
                        <div class="events-text">
                            <h3>Night of Broaday</h3>
                            <p class="text-section">May 1 - May 7</p>
                        </div>
                        <div class="ticket-section">
                            <img class="golden-ticket" src="<?php echo get_template_directory_uri(); ?>/img/decoratives/ticket.svg" alt="">
                        </div>
					</div>
				</div>

				<div class="events-info">
					<img src="<?php echo get_template_directory_uri(); ?>/img/UE-the-untold-story.png" alt="">
					<div class="events-outlook">
						<div class="events-text">
							<h3>The Untold</h3>
							<p class="text-section">April 25 - April 30</p>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12175.311814626919!2d-111.70230536305183!3d40.279571870098984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9a94a7a0f48f%3A0xf72b03aaec011118!2sSCERA%20Center%20for%20the%20Arts!5e0!3m2!1sen!2sus!4v1595549070393!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        
        <h2 class="title blue">Visit the Venue</h2>

        <p class="text-section">SCERA Center for the Arts 745 South State Street, Orem, UT, 84058</p>

        <p class="text-section">(801) 225-ARTS</p>
    </section>
</div>

<?php get_footer(); ?>