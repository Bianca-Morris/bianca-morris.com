	//Handles the responsiveness of the video category buttons
		var toggle = function () {
			var content = document.getElementById('dropContent');
			if (content.style.display == 'block'){
				content.style.display = 'none';
				}
			else {
				content.style.display = 'block';
			};
		};
	//Updates the video, description and title
		//Contains information for each video in [ogv, mp4, title, credits, description] format
		var videoData = [
			['vids/WCTV_S8-E1.ogv', 'vids/WCTV_S8-E1.mp4', 'WCTV S8 E1: Signs Your Life Is a Rom-Com', 'Filmed by Bianca Morris','Is your relationship too good to be true? Watch out! You might be living in a romantic comedy... watch on for five sure signs that your life is actually a chick-flick!<br><br>View the full episode <a href="https://youtu.be/thXzrpja-Sk">here</a>.'],
			['vids/WCTV_S6-E5.ogv', 'vids/WCTV_S6-E5.mp4', 'WCTV S6 E5: Therapy Boys', 'Filmed by Bianca Morris',"Dean O'Keefe unveils the Clapp Library's brand new stress-relief program: Therapy Boys. Make this finals season one to remember, and check one out (wink wink, nudge nudge) today!<br><br>View the full episode <a href='https://youtu.be/7E1YtVQcAnc?t=1m44s'>here</a>."],
			['vids/WCTV_S6-E4.ogv', 'vids/WCTV_S6-E4.mp4', 'WCTV S6 E4: Cis Men Awareness Campaign', 'Filmed by Bianca Morris','Well, it turns out that there is an underrepresented minority on the Wellesley Campus. Are YOU aware of Cis Men in the dining hall? In this fierce piece of investigative reporting, follow Brody Mistrie as she raises awareness about this desperate, needy cause.<br><br>View the full episode <a href="https://youtu.be/110m-aGlbqk?t=2m6s">here</a>.'],
			['vids/WCTV_S6-E2.ogv', 'vids/WCTV_S6-E2.mp4', 'WCTV S6 E2: Dave Olsen, Tortured Artist', 'Filmed by Bianca Morris',"Have you ever wondered what Victor Frankenstein would have been like if he were an artist? Meet Dave Olsen, Wellesley's own mad scientist/artist in this hard-hitting interview spearheaded by Purcell Liddy.<br><br>View the full episode <a href='https://youtu.be/w-KUYqn4564?t=3m31s'>here</a>."],
			['vids/WCTV_S6-E1.ogv', 'vids/WCTV_S6-E1.mp4', 'WCTV S6 E1: Celeb Valentines', 'Filmed by Bianca Morris','Want to get your Valentine something truly luxurious this February 14th? Check out our new collection of celebrity-themed Valentines, sure to make your lover squee like Khloe Kardashian at a over-priced delicatessen.<br><br>View the full episode <a href="https://youtu.be/VIZ858A2B14?t=1m56s">here</a>.'],
			['vids/WCTV_S5-E3.ogv', 'vids/WCTV_S5-E3.mp4', 'WCTV S5 E3: Get Her Something She Really Wants', 'Filmed by Bianca Morris','Keep your girl satisfied this Christmas by selecting a gift from our brand new catalog. Because we know the things she really wants. Really. We do.<br><br>View the full episode <a href="https://youtu.be/ICpLSvgiMWM?t=5m32s">here</a>.'],
			['vids/WCTV_S4-E4.ogv', 'vids/WCTV_S4-E4.mp4', 'WCTV S4 E4: Latina Studies', 'Filmed by Bianca Morris',"Have you ever wanted to take a course in Latina Studies to complement your liberal arts coursework in Africana, Asian, American, and Gender Studies? Well you can't, because those courses don't exist. Sorry Latina-lovers!<br><br>View the full episode <a href='https://youtu.be/eRLQrcdhohI?t=3m40s'>here</a>."],
			['vids/WCTV_S4-E2.ogv', 'vids/WCTV_S4-E2.mp4', 'WCTV S4 E2: Maya on the Street', 'Filmed by Bianca Morris',"What exactly IS a hackathon? A place for hacks? For snacks? Maya on the Street brings her own unique brand of humor to Wellesley's first annual Hackathon.<br><br>View the full episode <a href='https://youtu.be/I3XPeLJAxQg?t=1m36s'>here</a>."]
		];
		//Makes changes to description, etc. on link click
		$('.videoLink').click(function(event) {
 			var linkId = event.target.id;
			console.log(linkId);
			$("a").removeClass('activeVid');
			for (i in videoData) {
				/*console.log("before: " + document.getElementById((videoData[i][0].split(".")[0])).classList);
				document.getElementById((videoData[i][0].split(".")[0])).classList.remove("activeVideo");
				console.log("after: " + document.getElementById((videoData[i][0].split(".")[0])).classList); */
				if (linkId == videoData[i][0].split(".")[0]) {
					//updates link to be active
					document.getElementById(linkId).classList.add('activeVid');
					//updates mainVid & backupVid
					var videoID = document.getElementById('vidTag');
					videoID.pause();
					document.getElementById('mainVid').setAttribute('src', videoData[i][0]);
					document.getElementById('backupVid').setAttribute('src', videoData[i][1]);
					videoID.load(); //refreshes the video
					videoID.play(); //necessary since there's no poster; gets first frame of video before...
					videoID.pause(); //prevents autoplay
					//updates title
					document.getElementById('videoTitle').innerHTML = videoData[i][2];
					//updates credits
					document.getElementById('videoCreds').innerHTML = videoData[i][3];
					//updates description
					document.getElementById('videoDescription').innerHTML = videoData[i][4];	
				}; 
			}; 
		});