<script lang="ts">
    import Fa from "svelte-fa";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

    import { CORPORATIONS, DISCORD_LINK, APPLY_LINK, RECRUITERS, FEATURED_VIDEO, FAQ_QUESTIONS, ENDGAMES, LEARNING_CURVE_ITEMS } from "$lib/constant";
	import CorporationCard from "$lib/components/CorporationCard.svelte";
	import RecruiterCard from "$lib/components/RecruiterCard.svelte";
	import MemberChart from "$lib/components/MemberChart.svelte";
	import Page from "$lib/components/page.svelte"
	import Container from "$lib/components/Container.svelte";

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
	{@render beginJourneySection()}
	{@render faqSection()}
</Page>

{#snippet heroSection()}
	<section class="flex justify-center h-screen pt-88px pb-22px">
		<Container class="items-center">
			<div class="flex flex-col w-full my-auto gap-4 lg:mb-66px items-center text-center md:text-left md:items-start md:w-3/4 text-white">
				<div class="flex flex-col items-center md:items-start gap-2">
					<div class="flex items-end gap-2">
						<enhanced:img src="/static/logo512white.png" alt="site logo" class="w-48 h-48 md:w-64 md:h-64"/>
					</div>
					<h1 class="font-bold sm:text-2xl lg:text-3xl xl:text-5xl">EVE is complicated, Autumn makes it easy.</h1>
					<h2 class="sm:text-lg lg:text-xl xl:text-2xl">There are many twists and turns in the beginning of an EVE journey, why waste time learning the hard way when you can learn the right way?</h2>
					<p>Begin your journey in nullsec with The Order of Autumn, a corporation part of Black Rose alliance &amp; Phoenix Coalition, or in highsec with Autumn Highsec Division.</p>
				</div>
				<div class="flex gap-2">
					<a href={DISCORD_LINK} target="_blank" aria-label="Discord">
						<button class="btn">
							<Fa icon={faDiscord} size="lg" />
							<p>Autumn Discord</p>
						</button>
					</a>
					<a href={APPLY_LINK}>
						<button class="btn btn-primary">
							Begin Your Journey
						</button>
					</a>
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
		</Container>
	</section>
{/snippet}

{#snippet endgameSection()}
	<section id="endgame" class="flex justify-center bg-base-100">
		<Container class="items-center gap-8 py-12">
		    <h1 class="text-center font-bold text-2xl xl:text-4xl">What Does Your Endgame Look Like?</h1>
			<div class="flex flex-col gap-8 items-center">
				<ul class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 2xl:w-1440px">
					{#each ENDGAMES as endgame}
						<li class="flex flex-col gap-2 bg-base-300 rounded-box items-center text-center py-6">
							<img src={endgame.imageSrc} class="w-300px h-200px" alt={endgame.imageAlt}/>
							<h2 class="border-b-2 pb-1 border-neutral-700 w-fit text-lg font-bold">{endgame.title}</h2>
							<p>{endgame.description}</p>
						</li>
					{/each}
				</ul>
    			<div class="w-full sm:w-3/4">
    				<div class="relative w-full aspect-video bg-base-300 rounded-box overflow-hidden">
    					<div class="absolute inset-0 flex items-center justify-center text-gray-400">
    						<p>Video unavailable</p>
    					</div>
    					<iframe class="absolute w-full h-full top-0 left-0" src={FEATURED_VIDEO} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    				</div>
    			</div>
    			<h3 class="text-xl text-center font-bold">No matter what your endgame is, Autumn's goal is to get you there.</h3>
            </div>
		</Container>
	</section>
{/snippet}

{#snippet learningCurveSection()}
	<section class="flex flex-col items-center bg-base-100">
		<Container class="items-center gap-8 py-12">
			<div class="flex flex-col text-center">
				<h1 class="font-bold text-xl sm:text-2xl lg:text-3xl text-center">Conquer the EVE Learning Curve</h1>
				<h2 class="text-sm sm:text-base xl:text-lg text-center">EVE's learning curve is steep but worth it, have support &amp; community every step of the way towards realizing your dreams in EVE Online.</h2>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    			<div class="w-full">
    				<div class="rounded-box bg-base-300 overflow-hidden">
    					<img src="/images/landing/the-great-curve.jpg" alt="The steep learning curve of EVE"/>
    				</div>
    			</div>
    			<ul class="w-full flex flex-col justify-between gap-4">
    				{#each LEARNING_CURVE_ITEMS as { icon: Icon, title, description }}
    					<li class="grid rounded-box bg-base-300 p-4 gap-2">
    						<div class="flex gap-2 items-center">
    							<Icon />
    							<h3 class="text-lg font-bold">{title}</h3>
    						</div>
    						<p>{description}</p>
    					</li>
    				{/each}
    			</ul>
			</div>
		</Container>
	</section>
{/snippet}

{#snippet beginJourneySection()}
	<section class="flex flex-col items-center bg-base-100">
		<Container class="items-center gap-8 py-12">
		    <h1 class="font-bold text-xl sm:text-2xl lg:text-3xl text-center">Begin Your Journey as Early as Right Now</h1>
    		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8">
    			<div class="flex flex-col gap-8 items-center">
                    <h2 class="text-lg sm:text-xl font-bold text-center">Join Many Others in Taking that First Step</h2>
    				<div class="bg-base-200 rounded-sm shadow-md w-full">
    					<MemberChart/>
    				</div>
    			</div>
    			<div class="flex flex-col gap-8 items-center">
                    <h2 class="text-lg sm:text-xl font-bold text-center">Get into the Heart of EVE in Nullsec or Start Small in Highsec</h2>
    				<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
    					{#each CORPORATIONS as corporation}
    						<li>
    							<CorporationCard corporation={corporation}/>
    						</li>
    					{/each}
    				</ul>
    			</div>
    		</div>
    		<div class="pt-12">
    			<div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8 items-start">
                    <div class="flex flex-col lg:pr-8">
       					<h3 class="text-gradient text-2xl font-bold text-center">Chat with a Recruiter</h3>
       					<div class="flex flex-col items-center gap-2 pt-4">
      						<h4 class="text-lg font-bold">Reach us Through Either</h4>
      						<ul class="flex flex-col gap-2 items-center">
     							<li class="mb-2">
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
         			<div class="hidden lg:block w-px bg-base-content self-stretch bo\"></div>
         			<div class="flex flex-col lg:pl-8">
        				<h3 class="text-2xl font-bold text-center">Begin the Application Process</h3>
        				<ol class="list-decimal max-w-500px mx-auto pt-4 px-8">
           					<li>Submit your application at <a class="link link-hover" href={APPLY_LINK}>https://join.autumn-order.com/apply</a></li>
           					<li>Wait for a recruiter to review your application, come chat with us in Discord or Autumn Public while you wait!</li>
           					<li>Accept your invitation, most applications are reviewed in less than 24 hours.</li>
           					<li>Follow our Getting Started Guide to get setup and come take part in our community!</li>
        				</ol>
         			</div>
                </div>
     			<ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pt-12 justify-items-center">
    				{#each RECRUITERS as recruiter}
                        <li class="w-full">
      						<RecruiterCard recruiter={recruiter}/>
       					</li>
    				{/each}
     			</ul>
			</div>
		</Container>
	</section>
{/snippet}

{#snippet faqSection()}
	<section class="flex flex-col items-center bg-base-100">
		<Container class="items-center gap-8 py-12">
			<h1 class="font-bold py-4 text-xl sm:text-2xl lg:text-3xl text-center">Frequently Asked Questions</h1>
			<div class="w-full md:max-w-[75%]">
    			<div class="join join-vertical w-full">
                    {#each FAQ_QUESTIONS as { question, answer }, i}
                        <div class="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="faq-accordion" checked={i === 0} />
                            <div class="collapse-title font-semibold">{question}</div>
                            <div class="collapse-content text-sm">{answer}</div>
                        </div>
                    {/each}
    			</div>
			</div>
		</Container>
	</section>
{/snippet}
