export const generateRecipeContext = (food1, food2) => {
  return {
    instructions: `You are a chef and you are trying to find a recipe with using '${food1}' and '${food2}'.`,
    question: `
Find most popular recipe with using '${food1}' and '${food2}'.
Response should be in the following JSON format with no additional characters.
- JSON value should be in translated with Japanese, but value of food1 and food2 should'nt be translated.
- value of steps property should be an array, and can parse JSON.parse format.

{
    "data": {
        "food1": "${food1}",
        "food2": "${food2}",
        "title": "",
        "description": "",
        "steps": [
            "cooking step 1", "cooking step2", "cooking step3",
        ]
    }
}

If you cant find the recipe info on exact '${food1}' and '${food2}', does not food '${food1}' or '${food2}',
Response should be in the following JSON format with no additional characters:
{
    "data": null
}
`.trim(),
  };
};
