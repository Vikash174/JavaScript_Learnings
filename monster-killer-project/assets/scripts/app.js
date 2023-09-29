const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const MONSTER_ATTACK_VALUE = 15;
const PLAYER_HEAL_VALUE = 10;
const NORMAL_ATTACK_MODE = "NORMAL";
const STRONG_ATTACK_MODE = "STRONG";
const EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const EVENT_PLAYER_WON_GAME = "PLAYER_WON_THE_GAME";
const EVENT_MONSTER_WON_GAME = "MONSTER_WON_THE_GAME";
const EVENT_GAME_DRAW = "GAME_DRAW";
let chosenMaxLife;
let logEntries = [];

let hasBonusLife = true;

let userInput = prompt("Choose the max health value", "100");
chosenMaxLife = parseInt(userInput);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function writeToLog(event, monsterHealth, playerHealth, attackValue) {
  let logEntry = {
    event: event,
    finalMosterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
    value: attackValue,
  };

  switch (event) {
    case event === EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case event === EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case event === EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
  }

  logEntries.push(logEntry);
}

function endRound() {
  let initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    EVENT_MONSTER_ATTACK,
    currentMonsterHealth,
    currentPlayerHealth,
    playerDamage
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert("You would be died but the bonus life saved you!");
  }

  // console.log(logEntries);
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!!!");
    writeToLog(
      EVENT_PLAYER_WON_GAME,
      currentMonsterHealth,
      currentPlayerHealth,
      playerDamage
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Won!!");
    writeToLog(
      EVENT_MONSTER_WON_GAME,
      currentMonsterHealth,
      currentPlayerHealth,
      playerDamage
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw!!");
    writeToLog(
      EVENT_GAME_DRAW,
      currentMonsterHealth,
      currentPlayerHealth,
      playerDamage
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attack(mode) {
  let maxDamage;
  let playerAttackEvent;
  if (mode === NORMAL_ATTACK_MODE) {
    maxDamage = ATTACK_VALUE;
    playerAttackEvent = EVENT_PLAYER_ATTACK;
  } else if (mode == STRONG_ATTACK_MODE) {
    maxDamage = STRONG_ATTACK_VALUE;
    playerAttackEvent = EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    playerAttackEvent,
    currentMonsterHealth,
    currentPlayerHealth,
    damage
  );
  endRound();
}

function attackHandler() {
  attack(NORMAL_ATTACK_MODE);
}

function strongAttackHandler() {
  attack(STRONG_ATTACK_MODE);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - PLAYER_HEAL_VALUE) {
    alert("You can't heal more than your max initial health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = PLAYER_HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    EVENT_PLAYER_HEAL,
    currentMonsterHealth,
    currentPlayerHealth,
    healValue
  );
  endRound();
}

function printLogHandler() {
  for (let index = 0; index < logEntries.length; index++) {
    const element = logEntries[index];
    console.log(`#${index}`);
    for (const key in element) {
      const ele = element[key];
      console.log(`${key} : ${ele}`);
    }
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
