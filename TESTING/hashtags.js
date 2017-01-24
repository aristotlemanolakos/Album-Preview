/*
 Soundgram Hashtags JS
 Sebastien Marchal / 2015
 greatwhitefrog.com
 */


/* Hashtags
 ***************/
function getHashtag(tag_list) {
		
	// Get the tag name -- This needs to be cleaned up, probably
	if ( !tag_list ) {
		tag_name = currentTrack.title;
		tag_name = tag_name.replace(/['"]+/g, '');
		tag_name = tag_name.split(' ');
		tag_name = tag_name[0];
	} else {
		tag_name = tag_list;
		tag_name = tag_name.replace(/['"]+/g, '');
		tag_name = tag_name.split(' ');
		tag_name = tag_name[0];
	}
	
	return tag_name;
	
}

function giveHashtag(id) {

	switch( id ) {
		
		case 120723144: // Kids (Oliver Nelson Remix)
			new_hashtag = 'sweetharmony';
			break;
		
		case 166946757: // ODESZA - All We Need (feat. Shy Girls)
			new_hashtag = 'allweneed';
			break;
		
		case 132546148: // The Last Song - Tom Misch &amp; Carmody
			new_hashtag = 'folk';
			break;
		
		case 100429390: // Cool Like Me
			new_hashtag = 'fryars';
			break;
		
		case 125386766: // Hold Me Down
			new_hashtag = 'chill';
			break;
		
		case 134808607: // Espoir
			new_hashtag = 'hope';
			break;
		
		case 163684297: // ODESZA - Say My Name (feat. Zyra)
			new_hashtag = 'saymyname';
			break;
		
		case 63598727: // Satin Jackets You Make Me Feel Good (Original Mix)
			new_hashtag = 'satinjackets';
			break;
		
		case 103419107: // Stay With Us
			new_hashtag = 'stay';
			break;
		
		case 100322524: // Justin Timberlake ft. JAY Z - Suit &amp; Tie (Oliver Nelson Remix)
			new_hashtag = 'suitntie';
			break;
		
		case 166946854: // ODESZA - Bloom
			new_hashtag = 'bloom';
			break;
		
		case 154932672: // Cazzette "Sleepless" (Oliver Nelson Remix)
			new_hashtag = 'sleepless';
			break;
		
		case 22308266: // Housse De Racket - Roman (Oliver Remix)
			new_hashtag = 'roman';
			break;
		
		case 45708341: // Goldroom - Fifteen (feat. Chela)
			new_hashtag = 'fifteen';
			break;
		
		case 48597328: // Goldroom ft. Chela - Fifteen (Oxford remix)
			new_hashtag = 'itsbeenalongtime';
			break;
		
		case 166946567: // ODESZA - White Lies (feat. Jenni Potts)
			new_hashtag = 'whitelies';
			break;
		
		case 144828983: // M83 - Wait (Kygo Remix) [Free Download]
			new_hashtag = 'M83';
			break;
		
		case 97720251: // Lady - Modjo  /  (Hear Me Tonight) Original
			new_hashtag = 'eurodance';
			break;
		
		case 78283255: // Vanderway - Early
			new_hashtag = 'sunrise';
			break;
		
		case 77279125: // Else - Sunburst
			new_hashtag = 'sunburst';
			break;
		
		case 85758018: // Daft Punk - Random Access Memories (Vanderway Edit)
			new_hashtag = 'daftpunk';
			break;
		
		case 104762415: // Alina Baraz &amp; Galimatias - Drift
			new_hashtag = 'Galimatias';
			break;
		
		case 124096561: // Sade - Nothing Can Come Between Us (Pomo Edit)
			new_hashtag = 'pomo';
			break;
		
		case 134324878: // ODESZA - Sun Models (feat. Madelyn Grant)
			new_hashtag = 'sun';
			break;
		
		case 120955350: // When I Say I Love U (Saux Remix)
			new_hashtag = 'saux';
			break;
		
		case 62421214: // Mt. Wolf - Life Size Ghosts (Catching Flies Remix)
			new_hashtag = 'electronic';
			break;
		
		case 85216615: // A Walk
			new_hashtag = 'awalk';
			break;
		
		case 53126096: // Marijuana
			new_hashtag = 'marijuana';
			break;
		
		case 185703010: // Allure - Fantasy
			new_hashtag = 'fantasy';
			break;
		
		case 187518252: // Tobu &amp; Jordan Kelvin James - Summer Breeze
			new_hashtag = 'tobu';
			break;
		
		case 187339618: // MaLuca - If We Ran For It (Audalanche Remix)
			new_hashtag = 'dance';
			break;
		
		case 157700627: // Skylar Spence - Fiona Coyne
			new_hashtag = 'fallharder';
			break;
		
		case 125113414: // Download: Crystal Bats 'Falling In Love'(Louis La Roche Remix)
			new_hashtag = 'disco';
			break;
		
		case 130074609: // Crystal Bats - Falling In Love (SirAiva Remix) [Free D\L]
			new_hashtag = 'fallinlove';
			break;
		
		case 105340795: // Julia (Prod. Felix Snow &amp; Dave Free)
			new_hashtag = 'indie';
			break;
		
		case 144673626: // Benjamin Francis Leftwich - Shine (Kygo Remix)
			new_hashtag = 'shine';
			break;
		
		case 130484374: // Chromeo - Night By Night (Oliver Nelson Remix)
			new_hashtag = 'nightbynight';
			break;
		
		case 104120136: // Crayon Feat. KLP - Give You Up (Darius Remix)
			new_hashtag = 'crayon';
			break;
		
		case 55149736: // ODESZA - How Did I Get Here
			new_hashtag = 'catacombkid';
			break;
		
		case 122899544: // Ed Sheeran - I See Fire (Kygo Remix)
			new_hashtag = 'iseefire';
			break;
		
		case 121238283: // Phoenix - Fences (LeMarquis Remix)
			new_hashtag = 'lemarquis';
			break;
		
		case 74979183: // High Highs - In A Dream
			new_hashtag = 'inadream';
			break;
		
		case 55384550: // Electric Youth - The Best Thing
			new_hashtag = 'electric';
			break;
		
		case 58839190: // ODESZA - We Were Young
			new_hashtag = 'wewereyoung';
			break;
		
		case 32855746: // Placebo - Running Up That Hill
			new_hashtag = 'runningupthathill';
			break;
		
		case 71974306: // Wasted Time (feat. Ashley Garcia)
			new_hashtag = 'fear';
			break;
		
		case 149067216: // Mitch Murder - Ocean Avenue (FREE DOWNLOAD)
			new_hashtag = 'oceanavenue';
			break;
		
		case 162874432: // The Kooks - Forgive &amp; Forget (Oliver Nelson Remix)
			new_hashtag = 'forgiveandforget';
			break;
		
		case 120740734: // Electric Youth - Innocence
			new_hashtag = 'innocence';
			break;
		
		case 145505652: // Ella Henderson - Ghost (Oliver Nelson Remix) [Thissongissick.com Premiere]
			new_hashtag = 'ghost';
			break;
		
		case 58839197: // ODESZA - Dont Stop
			new_hashtag = 'dontstop';
			break;
		
		case 132004012: // "Bad Intentions" by Niykee Heaton
			new_hashtag = 'badintentions';
			break;
		
		case 146891465: // Tove Lo - Habits (Oliver Nelson Remix)
			new_hashtag = 'tove';
			break;
		
		case 56863359: // Bon Iver - Minnesota, WI (Oliver Nelson Remix)
			new_hashtag = 'minnesota';
			break;
		
		case 58028833: // Bon Iver - Towers (Oliver Nelson &amp; Jakob Markryd Remix)
			new_hashtag = 'towers';
			break;
		
		case 142253438: // Summer Drive (Promo)
			new_hashtag = 'summerdrive';
			break;
		
		case 112452785: // FM Attack - Magic (feat. Kristine)
			new_hashtag = 'synthpop';
			break;
		
		case 119128829: // Childhood Memories
			new_hashtag = '80s';
			break;
		
		case 120930244: // Hold My Weight
			new_hashtag = 'hold';
			break;
		
		case 163525988: // Feel the Music
			new_hashtag = 'feelthemusic';
			break;
		
		case 160272410: // Kiesza - Hideaway (Mitch Murder Remix) FREE DOWNLOAD
			new_hashtag = 'kiesza';
			break;
		
		case 51216700: // mitch murder - daybreak (free download)
			new_hashtag = 'daybreak';
			break;
			
		case 117514115: // Edward Sharpe and the Magnetic Zeros - Life Is Hard (Teen Daze Remix)
			new_hashtag = 'lifeishard';
			break;
		
		case 104136810: // Teen Daze - Ice On The Windowsill
			new_hashtag = 'windowsill';
			break;
		
		case 20434361: // Neon Indian - Polish Girl
			new_hashtag = 'neon';
			break;
		
		case 99332370: // Postiljonen - Atlantis
			new_hashtag = 'atlantis';
			break;
		
		case 98607512: // Scenic - Shockwaves
			new_hashtag = 'scenic';
			break;
		
		case 119199427: // Delorean - Destitute Time (Slow Magic Remix)
			new_hashtag = 'delorean';
			break;
		
		case 153987032: // Arro - Summer Haze (ft. Laura James)
			new_hashtag = 'summerhaze';
			break;
		
		case 153945058: // Overcome feat. Merryn Jeann
			new_hashtag = 'overcome';
			break;
			
		case 113139941: // Kris Menace feat. Simon Lord - Golden Ratio (Douze Dub)
			new_hashtag = 'goldenratio';
			break;
		
		case 46734073: // Kids Grow Better Under The Sun
			new_hashtag = 'underthesun';
			break;
		
		case 143541311: // Le P - History
			new_hashtag = 'history';
			break;
		
		case 5678471: // THE PARADISE "IN LOVE WITH YOU"
			new_hashtag = 'theparadise';
			break;
		
		case 99534378: // 1- You Should Know
			new_hashtag = 'youshouldknow';
			break;
		
		case 82410257: // Voices
			new_hashtag = 'voices';
			break;
		
		case 55381506: // Wild Nothing // "Paradise"
			new_hashtag = 'wildnothing';
			break;
		
		case 54872654: // Chad Valley - Fall 4 U (Feat. Glasser)
			new_hashtag = 'fallforyou';
			break;
		
		case 81926464: // Alan Braxe - Time Machine [with The Spimes] (Chateaubriand Remix)
			new_hashtag = 'timemachine';
			break;
		

		
		
		
		// Default
		default:
			new_hashtag = getHashtag(currentTrack.tag_list);
			
	}
	
	return new_hashtag;
}
