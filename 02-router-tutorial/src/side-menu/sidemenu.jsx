

export default function SideMenu() {

	return (
		<div>
			{/* <!-- SIDEBAR --> */}
			<div class="sidebar-menu hidden-xs hidden-sm">
			<div class="top-section">
				<div class="profile-image">
				<img src="img/tsystems-logo.png" alt="Volton" />
				</div>
				<h3 class="profile-title">T-Systems</h3>
				<p class="profile-description">Let's Power Higher Performance</p>
			</div>
			{/* <!-- top-section --> */}
			<div class="main-navigation">
				<ul class="navigation">
				<li>
					<a href="#face-image"
					><i class="fa fa-bar-chart"></i>Live Recognition</a
					>
				</li>
				<li>
					<a href="#about"><i class="fa fa-bar-chart"></i>Timewise</a>
				</li>
				<li>
					<a href="#floorwise"><i class="fa fa-bar-chart"></i>Floorwise</a>
				</li>
				<li>
					<a href="#monthwise"><i class="fa fa-bar-chart"></i>Monthly</a>
				</li>
				<li>
					<a href="#feedback"><i class="fa fa-link"></i>Feedback</a>
				</li>
				</ul>
			</div>

			{/* <!-- .main-navigation --> */}
			<div class="social-icons">
				<ul>
				<li>
					<a href="#"><i class="fa fa-facebook"></i></a>
				</li>
				<li>
					<a href="#"><i class="fa fa-twitter"></i></a>
				</li>
				<li>
					<a href="#"><i class="fa fa-linkedin"></i></a>
				</li>

				</ul>
			</div>
			{/* <!-- .social-icons --> */}
			</div>
			{/* <!-- .sidebar-menu --> */}
		</div>
	);

}
