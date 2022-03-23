// to work with Set: see doc MDN: for instance .size !!!!!

function climbingLeaderboard(ranked, player) {

  let unique_ranked = [...new Set(ranked)]; // => rank is index +1

  // attention: ranked in DESC order!

  console.log(ranked); console.log(unique_ranked); console.log(`player: ${player}`)

  let m = player.length; // number m : player's scores in ascending order!!
  console.log(`player length m ${player.length}`);

  let rank_player = [];
  let position = unique_ranked.length; console.log(`position: ${position}`);


  // if score is lower than lowest rank, rank should increase 5-> 6 for instance!!!!!!!!!!!!!!!!!!!
  for (let game = 0; game < m; game++) {
    while (player[game] > unique_ranked[position - 1]) {
      console.log(`in while loop for each game: game ${game}`);
      console.log(`player[game]: ${player[game]} unique_ranked[position-1] ${unique_ranked[position-1]}`);
      console.log(`game: ${game})`);
      if (position==1) {break;} else {
        position -= 1;
      }
    }

    if(player[game]<unique_ranked[position-1]) {
      rank_player.push(position+1);
    } else {
    rank_player.push(position);
    console.log(`rank_player[] ${rank_player}`);
    }

  }
  console.log(`rank_player after: ${rank_player}`);
  return rank_player;

}

let ranked = [100,100,50,40,40,20,10];
let player = [5,25,50,120];
climbingLeaderboard(ranked, player);
