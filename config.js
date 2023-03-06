// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Daniel-kun',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Ohayou!',
	greetingAfternoon: 'Konnichi wa,',
	greetingEvening: 'Konbanwa,',
	greetingNight: 'Oyasumi!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'
/*
	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi
	
	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',
	*/

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
	

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '3',
			name: 'TodoList',
			icon: 'trello',
			link: 'https://trello.com',
		},
		{
			id: '4',
			name: 'Discord',
			icon: 'bot',
			link: 'https://www.discord.com/app',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://spotify.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'tv-2',
			id: '1',
			links: [
				{
					name: 'Anime',
					link: 'https://zoro.com',
				},
				{
					name: 'Cartoon',
					link: 'https://www.wcofun.com',
				},
				{
					name: 'Youtube',
					link: 'https://www.trello.com',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com/',
				}
			],
		},
		{
			icon: 'graduation-cap',
			id: '2',
			links: [
				{
					name: 'Office',
					link: 'https://www.office.com/?auth=2',
				},
				{
					name: 'Magister',
					link: 'https://hageveld.magister.net/magister/',
				},
				{
					name: 'Outlook',
					link: 'https://outlook.office.com/mail/',
				},
				{
					name: 'Chess',
					link: 'https://www.chess.com/',
				},
			]
		}
	],
};
