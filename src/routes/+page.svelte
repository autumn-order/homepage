<script lang="ts">
    import Fa from "svelte-fa";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { faChevronDown, faHandshake, faGraduationCap, faBook, faTree, faChartLine, faAtom } from "@fortawesome/free-solid-svg-icons";

    import { CORPORATIONS, DISCORD_LINK, APPLY_LINK, RECRUITERS, FEATURED_VIDEO, FAQ_QUESTIONS } from "$lib/constant";
	import CorporationCard from "$lib/components/CorporationCard.svelte";
	import RecruiterCard from "$lib/components/RecruiterCard.svelte";
	import Faq from "$lib/components/Faq.svelte";
	import MemberChart from "$lib/components/MemberChart.svelte";
	import Page from "$lib/components/page.svelte"

	function scrollToEndgame() {
		document.getElementById('endgame')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
    <title>Join Autumn</title>
	<meta name="description" content="EVE is complicated, Autumn makes it easy. There are many twists and turns in the beginning of an EVE journey, why waste time learning the hard way when you can learn the right way?"/>
</svelte:head>

<Page>
	{@render heroSection()}
	{@render endgameSection()}
	{@render learningCurveSection()}
	{@render whatSetsApartSection()}
	{@render beginJourneySection()}
	{@render faqSection()}
</Page>

{#snippet heroSection()}
	<section class="flex justify-center h-screen pt-88px pb-22px">
		<div class="container mx-auto w-full h-full flex flex-col items-center">
			<div class="flex flex-col w-full my-auto">
				<div class="flex flex-col gap-4 lg:mb-66px items-center text-center md:text-left md:items-start md:w-3/4 text-white">
					<div class="flex flex-col items-center md:items-start gap-2">
						<div class="flex items-end gap-2">
							<enhanced:img src="/static/logo512white.png" alt="site logo" class="w-48 h-48 md:w-64 md:h-64"/>
						</div>
						<h1 class="font-bold sm:text-2xl lg:text-3xl xl:text-5xl">EVE is complicated, Autumn makes it easy.</h1>
						<h2 class="sm:text-lg lg:text-xl xl:text-2xl">There are many twists and turns in the beginning of an EVE journey, why waste time learning the hard way when you can learn the right way?</h2>
						<p>Begin your journey in nullsec with The Order of Autumn, a corporation part of Black Rose alliance &amp; Phoenix Coalition, or in highsec with Autumn Highsec Division.</p>
					</div>
					<ul class="flex gap-2">
						<li>
							<a href={DISCORD_LINK} target="_blank" aria-label="Discord">
								<button class="btn">
									<Fa icon={faDiscord} size="lg"/>
									<p>Autumn Discord</p>
								</button>
							</a>
						</li>
						<li>
							<a href={APPLY_LINK}>
								<button class="btn btn-primary">
									Begin Your Journey
								</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="flex flex-col justify-self-end text-white mb-4 cursor-pointer"
				onclick={scrollToEndgame}
				onkeydown={(e) => e.key === 'Enter' && scrollToEndgame()}
				role="button"
				tabindex="0"
			>
				<p class="text-2xl font-bold">Learn More</p>
				<Fa icon={faChevronDown} size="lg"/>
			</div>
		</div>
	</section>
{/snippet}

{#snippet endgameSection()}
	<section id="endgame" class="flex justify-center bg-base-100">
		<div class="container mx-auto h-full flex items-center flex-col gap-12 pb-12">
			<div class="flex flex-col">
				<div class="flex justify-center pt-12">
					<h1 class="text-center text-gradient font-bold py-4 text-2xl xl:text-4xl">What Does Your Endgame Look Like?</h1>
				</div>
				<ul class="flex justify-evenly flex-wrap 2xl:w-1440px">
					<li class="flex flex-col gap-2 items-center text-center w-full md:w-1/2 2xl:w-1/4 px-2 pb-4">
						<enhanced:img src="/static/images/landing/monitor.png"  class="w-300px h-200px" alt="Monitor"/>
						<h2 class="border-b-2 pb-1 border-neutral-700 w-fit text-lg font-bold">Fleet Commander</h2>
						<p>Leader of large scale 100+ player fleets fighting over strategic objectives?</p>
					</li>
					<li class="flex flex-col gap-2 items-center text-center w-full md:w-1/2 2xl:w-1/4 px-2 pb-4">
						<enhanced:img src="/static/images/landing/azbel.png" class="w-300px h-200px" alt="Azbel"/>
						<h2 class="border-b-2 pb-1 border-neutral-700 w-fit text-lg font-bold">Corporation Leader</h2>
						<p>CEO of your own large scale organization or small tight-knit group?</p>
					</li>
					<li class="flex flex-col gap-2 items-center text-center w-full md:w-1/2 2xl:w-1/4 px-2 pb-4">
						<enhanced:img src="/static/images/landing/rorqual.png" class="w-300px h-200px" alt="Rorqual"/>
						<h2 class="border-b-2 pb-1 border-neutral-700 w-fit text-lg font-bold">Industrialist</h2>
						<p>An industrialist critical to the economy of entire coalitions?</p>
					</li>
					<li class="flex flex-col gap-2 items-center text-center w-full md:w-1/2 2xl:w-1/4 px-2 pb-4">
						<enhanced:img src="/static/images/landing/avatar.png" class="w-300px h-200px" alt="Avatar"/>
						<h2 class="border-b-2 pb-1 border-neutral-700 w-fit text-lg font-bold">Supercapital Pilot</h2>
						<p>Pilot of a legendary titan class super capital wielding a doomsday weapon?</p>
					</li>
				</ul>
			</div>
			<div class="w-full sm:w-3/4">
				<div class="relative w-full pt-56.25%">
					<iframe class="absolute w-full h-full top-0 left-0" src={FEATURED_VIDEO} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			<h3 class="text-xl text-center">No matter what your endgame is, Autumn's goal is to get you there.</h3>
		</div>
	</section>
{/snippet}

{#snippet learningCurveSection()}
	<section class="flex flex-col items-center bg-base-100">
		<div class="container mx-auto flex flex-col items-center">
			<div class="flex flex-col text-center">
				<h1 class="text-gradient font-bold py-4 text-xl sm:text-2xl lg:text-3xl text-center">Conquer the EVE Learning Curve</h1>
				<h2 class="text-sm sm:text-base xl:text-lg text-center">EVE's learning curve is steep but worth it, have support &amp; community every step of the way towards realizing your dreams in EVE Online.</h2>
			</div>
			<div class="flex flex-wrap py-12">
			<div class="pb-10 w-full lg:pb-0 lg:w-1/2 px-0 sm:px-6">
				<enhanced:img src="/static/images/landing/the-great-curve.jpg" alt="The steep learning curve of EVE"/>
			</div>
			<ul class="w-full lg:w-1/2 flex flex-col justify-between gap-4 px-0 sm:px-6 lg:px-0">
				<li>
					<div class="flex gap-2 items-center">
						<Fa icon={faHandshake} size="lg"/>
						<h3 class="text-lg font-bold">Community</h3>
					</div>
					<p>Begin with the advantage of connections with a vast &amp; highly experienced community ranging from veteran capital pilots, hardcore industrialists, large scale corporation leaders, and those just beginning their EVE journey.</p>
				</li>
				<li>
					<div class="flex gap-2 items-center">
						<Fa icon={faGraduationCap} size="lg"/>
						<h3 class="text-lg font-bold">Classes</h3>
					</div>
					<p>Participate in a wide range of classes offered by both Autumn and our alliance Black Rose ranging from industry, exploration, leading fleets, growing corporations, and more!</p>
				</li>
				<li>
					<div class="flex gap-2 items-center">
						<Fa icon={faBook} size="lg"/>
						<h3 class="text-lg font-bold">Information</h3>
					</div>
					<p>Access to extensive resources to gain that foundational knowledge in your areas of EVE including a highly active Discord, an extensive wiki, and a knowledgeable community.</p>
				</li>
				<li>
					<div class="flex gap-2 items-center">
						<Fa icon={faTree} size="lg"/>
						<h3 class="text-lg font-bold">Play at Your Pace</h3>
					</div>
					<p>Join us in either highsec or nullsec and remember that real life always comes first, this is a game after all. No mandatory fleet participation minimums, step away to take care of real life when needed and pick up where you left off whenever you're ready.</p>
				</li>
			</ul>
			</div>
		</div>
	</section>
{/snippet}

{#snippet whatSetsApartSection()}
	<section class="flex justify-center items-center bg-base-100">
		<div class="container mx-auto flex flex-col py-12">
			<div class="flex justify-center">
				<h1 class="text-gradient font-bold py-4 text-xl sm:text-2xl lg:text-3xl">What Sets Autumn Apart?</h1>
			</div>
			<ul class="flex flex-wrap text-center">
				<li class="flex flex-col gap-2 items-center w-full lg:w-1/2 p-6">
					<Fa icon={faAtom} size="lg"/>
					<h2 class="text-lg font-bold">IT Infrastructure From the Ground Up</h2>
					<p>In a sea of many alliances &amp; corporations few have the ability to design their own IT infrastructure from the ground up. A distinct advantage when it comes to achieving our goal of being highly organized and highly accessible to even the newest of players.</p>
				</li>
				<li class="flex flex-col gap-2 items-center w-full lg:w-1/2 p-6">
					<Fa icon={faChartLine} size="lg"/>
					<h2 class="text-lg font-bold">Not Just Education But Also Continued Growth</h2>
					<p>Not only do we aim to help you start those first steps in EVE Online, we aim to take you all the way towards your end goal. At Autumn investment in our member's growth comes first and foremost.</p>
				</li>
			</ul>
		</div>
	</section>
{/snippet}

{#snippet beginJourneySection()}
	<section class="flex flex-col items-center bg-base-100">
		<div class="container mx-auto flex flex-col items-center">
			<div class="flex flex-col text-center">
				<h1 class="text-gradient font-bold py-4 text-xl sm:text-2xl lg:text-3xl text-center">Begin Your Journey as Early as Right Now</h1>
			</div>
		<div class="flex pt-12 flex-wrap">
			<div class="w-full xl:w-1/2 pb-6 flex flex-col items-center">
				<div class="w-full flex justify-center pb-4">
					<h2 class="text-gradient text-lg sm:text-xl font-bold text-center">Join Many Others in Taking that First Step</h2>
				</div>
				<div class="bg-base-200 rounded-sm shadow-md w-full h-250px sm:h-350px lg:h-400px max-w-695px">
					<MemberChart/>
				</div>
			</div>
			<div class="w-full xl:w-1/2 pb-6">
				<div class="w-full flex justify-center pb-4">
					<h2 class="text-gradient text-lg sm:text-xl font-bold text-center">Get into the Heart of EVE in Nullsec or Start Small in Highsec</h2>
				</div>
				<ul class="flex justify-center gap-4 flex-wrap">
					{#each CORPORATIONS as corporation}
						<li>
							<CorporationCard corporation={corporation}/>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="flex flex-col pb-12 flex-wrap pt-12">
			<div class="w-full flex justify-evenly flex-wrap">
				<div class="flex flex-col flex-1 w-full lg:w-1/3">
					<h3 class="text-gradient w-full text-2xl font-bold text-center">Chat with a Recruiter</h3>
					<div class="flex flex-col items-center gap-2  pt-4">
						<h4 class="text-lg font-bold">Reach us Through Either</h4>
						<ul class="flex flex-col gap-2">
							<li class="self-center mb-2">
								<a href={DISCORD_LINK}>
									<button class="btn btn-outline">
										<Fa icon={faDiscord} size="lg"/>
										<p>The Autumn Discord</p>
									</button>
								</a>
							</li>
							<li>The <span class="font-bold">Autumn Public</span> in-game chat channel</li>
							<li>EVE Mail or Discord message any of our leadership below</li>
						</ul>
					</div>
				</div>
				<div class="">
					<p class="text-gradient text-2xl font-bold text-center pt-8 lg:pt-0">OR</p>
				</div>
				<div class="flex flex-col flex-1 w-full lg:w-1/3">
					<h3 class="text-gradient w-full text-2xl font-bold text-center pt-8 lg:pt-0">Begin the Application Process</h3>
					<ol class="list-decimal max-w-500px mx-auto pt-4 px-2">
						<li>Submit your application at <a class="link link-hover" href={APPLY_LINK}>https://join.autumn-order.com/apply</a></li>
						<li>Wait for a recruiter to review your application, come chat with us in Discord or Autumn Public while you wait!</li>
						<li>Accept your invitation, most applications are reviewed in less than 24 hours.</li>
						<li>Follow our Getting Started Guide to get setup and come take part in our community!</li>
					</ol>
				</div>
			</div>
			<ul class="w-full flex justify-center pt-12">
				{#each RECRUITERS as recruiter}
					<li class="w-full md:w-1/2 xl:w-1/4 max-w-350px">
						<RecruiterCard recruiter={recruiter}/>
					</li>
				{/each}
			</ul>
			</div>
		</div>
	</section>
{/snippet}

{#snippet faqSection()}
	<section class="flex flex-col items-center py-6 min-h-700px pb-24 bg-base-100">
		<div class="container mx-auto flex flex-col items-center">
			<div>
				<h1 class="text-gradient font-bold py-4 text-xl sm:text-2xl lg:text-3xl text-center">Frequently Asked Questions</h1>
			</div>
			<div class="w-full md:max-w-70%">
				<Faq questions={FAQ_QUESTIONS}/>
			</div>
		</div>
	</section>
{/snippet}
