const data = [
	{
		name: "Jon Doe",
		age: 32,
		gender: "male",
		lookingfor: "female",
		location: "Canada, Ontario",
		image: "https://randomuser.me/api/portraits/men/82.jpg"

	},
	{
		name: "Ann Cresberi",
		age: 26,
		gender: "female",
		lookingfor: "male",
		location: "USA, Boston MA",
		image: "https://randomuser.me/api/portraits/women/80.jpg"

	},
	{
		name: "Jack Smith",
		age: 35,
		gender: "male",
		lookingfor: "female",
		location: "USA, Miami FL",
		image: "https://randomuser.me/api/portraits/men/54.jpg"

	},
	{
		name: "William Johnson",
		age: 30,
		gender: "male",
		lookingfor: "female",
		location: "Canada, Ontario",
		image: "https://randomuser.me/api/portraits/men/22.jpg"

	},
	{
		name: "Luke Jerar",
		age: 32,
		gender: "male",
		lookingfor: "female",
		location: "France, Paris",
		image: "https://randomuser.me/api/portraits/men/80.jpg"

	}
];

	
	const profiles = profileIterator(data);

	// Show first profile
		
	nextProfile();


	// Next Event 
	document.getElementById('next').addEventListener('click', nextProfile)

	function nextProfile() {

		
		const currentProfile = profiles.next().value;

		if (currentProfile !== undefined) {
			
			document.getElementById('profile-display').innerHTML = `
			<ul class="list-group">
				<li class="list-group-item">Name: ${currentProfile.name}</li>
				<li class="list-group-item">Age: ${currentProfile.age}</li>
				<li class="list-group-item">Location: ${currentProfile.location}</li>
				<li class="list-group-item">Preference: ${currentProfile.gender} lookingfor: ${currentProfile.lookingfor}</li>
			</ul>
		`;

		document.getElementById('image-display').innerHTML = `
			<img src="${currentProfile.image}" alt="image">
		`;
		} else {
			window.location.reload();
		}
	}

// Profile Iterator 
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length ? 
			{ value: profiles[nextIndex++], done: false } :
			{  done: true }
		}
	};
}
