"use strict";
let gold = 1; //0.5
let silver = gold * 4; // 4silver (gold 기준)
let copper = gold * 32; //32copper (gold 기준)
let silverLeather = silver / 2; //2silver(sliver 기준)
let leatehr = gold / (silver / 2); // 0.5 (gold 기준)
let totalLeather = 45; // 8시간 동안 얻은 leather
let totalLeatherSilver = totalLeather * 2; // 90 silver 45개의 가죽을 얻을 수 있는 실버의 값
const game_money = () => {
    const totalGold = totalLeatherSilver / 4; //22.5
    const hourGold = totalGold / 8; //2.8125
    const totalCopper = (totalGold % 1) * 32; // 16
    const hourCopper = (hourGold % 1) * 32;
    return `이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${Math.floor(hourGold)} 입니다. 
  gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${Math.floor(hourCopper)}개의 copper를 챙겼습니다.
  공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${Math.floor(totalGold)} gold, ${totalCopper} copper를 얻었습니다.`;
};
// const condition = { gold = true, silver = false, copper = true }
console.log(game_money());
