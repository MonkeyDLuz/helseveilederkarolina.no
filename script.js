document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	root.innerHTML = `
		<div class="min-h-screen bg-gray-50">
			<header class="bg-blue-600 text-white">
				<nav class="container mx-auto px-6 py-4 flex justify-between items-center">
					<h1 class="text-2xl font-bold">FitPro Training</h1>
					<div class="space-x-6">
						<a href="#services" class="hover:text-blue-200">Services</a>
						<a href="#about" class="hover:text-blue-200">About</a>
						<a href="#testimonials" class="hover:text-blue-200">Testimonials</a>
						<a href="#contact" class="hover:text-blue-200">Contact</a>
					</div>
				</nav>
				
				<div class="container mx-auto px-6 py-24 grid grid-cols-2 gap-8">
					<div>
						<h2 class="text-5xl font-bold mb-6">Transform Your Life Through Expert Fitness Training</h2>
						<p class="text-xl mb-8">Personalized workout plans, nutrition guidance, and dedicated support to help you achieve your fitness goals.</p>
						<button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
							Book a Free Consultation
						</button>
					</div>
					<div class="flex justify-center">
						<img 
							src="https://placehold.co/500x600" 
							alt="Personal Trainer" 
							class="rounded-lg shadow-xl"
						/>
					</div>
				</div>
			</header>
 
			<!-- Services Section -->
			<section id="services" class="py-20">
				<div class="container mx-auto px-6">
					<h2 class="text-3xl font-bold text-center mb-16">Services Offered</h2>
					<div class="grid grid-cols-3 gap-8">
						<div class="bg-white p-6 rounded-lg shadow-md">
							<svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18m-9 6h9"/>
							</svg>
							<h3 class="text-xl font-semibold mb-4">Personal Training</h3>
							<p>One-on-one sessions tailored to your specific goals and fitness level.</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
							</svg>
							<h3 class="text-xl font-semibold mb-4">Group Classes</h3>
							<p>High-energy group workouts that combine cardio and strength training.</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
							<h3 class="text-xl font-semibold mb-4">Nutrition Planning</h3>
							<p>Custom meal plans and nutritional guidance to support your fitness journey.</p>
						</div>
					</div>
				</div>
			</section>
 
			<!-- About Section -->
			<section id="about" class="bg-white py-20">
				<div class="container mx-auto px-6">
					<div class="grid grid-cols-2 gap-12 items-center">
						<img 
							src="https://placehold.co/500x600" 
							alt="About Trainer" 
							class="rounded-lg shadow-lg"
						/>
						<div>
							<h2 class="text-3xl font-bold mb-6">About Your Trainer</h2>
							<p class="text-gray-600 mb-6">
								With over 10 years of experience and multiple certifications including NASM-CPT and 
								precision nutrition, I'm dedicated to helping clients achieve sustainable results 
								through evidence-based training methods.
							</p>
							<div class="space-y-4">
								<div class="flex items-center">
									<svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
									<span>10+ Years Experience</span>
								</div>
								<div class="flex items-center">
									<svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
									<span>Certified NASM Personal Trainer</span>
								</div>
								<div class="flex items-center">
									<svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
									</svg>
									<span>500+ Clients Transformed</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
 
			<!-- Pricing Section -->
			<section class="py-20 bg-gray-50">
				<div class="container mx-auto px-6">
					<h2 class="text-3xl font-bold text-center mb-16">Training Packages</h2>
					<div class="grid grid-cols-3 gap-8">
						<!-- Starter Package -->
						<div class="bg-white p-8 rounded-lg shadow-md">
							<h3 class="text-xl font-semibold mb-4">Starter</h3>
							<div class="text-4xl font-bold mb-6">$99<span class="text-lg text-gray-600">/month</span></div>
							<ul class="space-y-3 mb-8">
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									4 Training Sessions
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Basic Nutrition Guide
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									App Access
								</li>
							</ul>
							<button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
								Get Started
							</button>
						</div>
 
						<!-- Pro Package -->
						<div class="bg-blue-600 text-white p-8 rounded-lg shadow-md transform scale-105">
							<h3 class="text-xl font-semibold mb-4">Pro</h3>
							<div class="text-4xl font-bold mb-6">$199<span class="text-lg opacity-75">/month</span></div>
							<ul class="space-y-3 mb-8">
								<li class="flex items-center">
									<svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									8 Training Sessions
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Custom Meal Plan
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Progress Tracking
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									24/7 Support
								</li>
							</ul>
							<button class="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
								Get Started
							</button>
						</div>
 
						<!-- Elite Package -->
						<div class="bg-white p-8 rounded-lg shadow-md">
							<h3 class="text-xl font-semibold mb-4">Elite</h3>
							<div class="text-4xl font-bold mb-6">$299<span class="text-lg text-gray-600">/month</span></div>
							<ul class="space-y-3 mb-8">
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									12 Training Sessions
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Premium Meal Plan
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Body Composition Analysis
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Priority Booking
								</li>
								<li class="flex items-center">
									<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
									</svg>
									Video Analysis
								</li>
							</ul>
							<button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>
 
			<!-- Testimonials Section -->
			<section id="testimonials" class="py-20">
				<div class="container mx-auto px-6">
				<h2 class="text-3xl font-bold text-center mb-16">Client Success Stories</h2>
					<div class="grid grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <img src="https://placehold.co/50x50" alt="Client 1" class="rounded-full mr-4"/>
                <div>
                  <h4 class="font-semibold">Client Name</h4>
                  <p class="text-gray-600">Lost 30 lbs in 6 months</p>
                </div>
              </div>
              <p class="text-gray-600">
                "Working with this trainer has been life-changing. The personalized approach
                and constant support made all the difference in achieving my fitness goals."
              </p>
            </div>
            <!-- Testimonial 2 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <img src="https://placehold.co/50x50" alt="Client 2" class="rounded-full mr-4"/>
                <div>
                  <h4 class="font-semibold">Client Name</h4>
                  <p class="text-gray-600">Lost 30 lbs in 6 months</p>
                </div>
              </div>
              <p class="text-gray-600">
                "Working with this trainer has been life-changing. The personalized approach
                and constant support made all the difference in achieving my fitness goals."
              </p>
            </div>
            <!-- Testimonial 3 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <img src="https://placehold.co/50x50" alt="Client 3" class="rounded-full mr-4"/>
                <div>
                  <h4 class="font-semibold">Client Name</h4>
                  <p class="text-gray-600">Lost 30 lbs in 6 months</p>
                </div>
              </div>
              <p class="text-gray-600">
                "Working with this trainer has been life-changing. The personalized approach
                and constant support made all the difference in achieving my fitness goals."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div class="grid grid-cols-2 gap-12">
            <div>
              <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>trainer@fitpro.com</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                  </svg>
                  <span>@fitpro_training</span>
                </div>
              </div>
            </div>
            <form class="space-y-4">
              <input type="text" placeholder="Your Name" class="w-full p-3 rounded-lg text-gray-800"/>
              <input type="email" placeholder="Your Email" class="w-full p-3 rounded-lg text-gray-800"/>
              <textarea placeholder="Your Message" rows="4" class="w-full p-3 rounded-lg text-gray-800"></textarea>
              <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-6 text-center">
          <p>&copy; 2025 FitPro Training. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;
});