/*
 * This is a program that calculates the total cook time based on
 * the lunch item and number of lunch items
 *  
 * @author  Feyi Akomolafe
 * @version 1.0
 * @since   2024-02-22
 */

import { createPrompt } from 'bun-promptx'
// constants & variables
const subCookTime = 60
const pizzaCookTime = 45
const soupCookTime = 105
let totalCookTime = 0
let validInput = true
 
// input
const lunchType = createPrompt("Are you heating sub, pizza, or soup?(lowercase): ")
const lunchTypeString = lunchType.value
const lunchAmount = createPrompt("How many are you heating?(Max 3): ")
const lunchAmountInt = parseInt(lunchAmount.value || "-1")
 
// error check
if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0 || lunchAmountInt > 3) {
  console.log("Invalid input.")
} else {
  // process
  switch (lunchTypeString) {
  case `sub`:
    totalCookTime = (subCookTime / 2) + ((subCookTime / 2) * lunchAmountInt)
    break
  case `pizza`:
    totalCookTime = (pizzaCookTime / 2) + ((pizzaCookTime / 2) * lunchAmountInt)
    break
  case `soup`:
    totalCookTime = (soupCookTime / 2) + ((soupCookTime / 2) * lunchAmountInt)
    break
  default:
    console.log("Invalid input.")
    validInput = false
    break
  }
  if (validInput) {
    const cookTimeSeconds = totalCookTime % 60
    const cookTimeMinutes = Math.floor(totalCookTime / 60)
    console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
  }
}
 
console.log("\nDone.")
 
