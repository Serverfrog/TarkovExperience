<script lang="ts">
	import expTable from '../assets/levels.json';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let experience = 0;
	let level = 1;
	let levelPercentage = 0.00;
	const maximumExperience = expTable[expTable.length - 1];
	const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

	$: percentageFormated = formatter.format(levelPercentage);

	function updateLevel() {
		getLevel();
		getCurrentLevelPercentage();
	}

	function getLevel() {
		for (let i = expTable.length; i > 0 - 1; i--) {
			if (experience >= expTable[i]) {
				level = i + 1;
				return;
			}
		}
		level = 1;
	}

	function getCurrentLevelPercentage() {
		let zero = expTable[level - 1];
		let hundred = expTable[level];
		levelPercentage = 100.0 * ((experience - zero) / (hundred - zero));
		console.log(levelPercentage);
	}

</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Tarkov Experience Visualisation</h1>
		<p>Your current Experience:</p>
		<div>
			<input bind:value={experience} class="input " max="{maximumExperience}" min="0" on:input={()=>{updateLevel()}}
						 title="Your current Experience" type="number" />
		</div>
		<div class="grid items-center grid-cols-2">
			<div class="text-right pr-10"><h2>Level {level}</h2></div>
			<div>
				<ProgressRadial value={levelPercentage}>{percentageFormated}%</ProgressRadial>
			</div>
		</div>
	</div>
</div>
