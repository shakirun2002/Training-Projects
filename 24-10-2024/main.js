function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					Here you will find the amazing glimpse of all our doings.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					Learn more about our purpose and team.
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}
