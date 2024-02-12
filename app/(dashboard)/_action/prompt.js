export const generateRecipeContext = (food1, food2) => {
  return {
    instructions: `You are a chef and you are trying to find a recipe with using '${food1}' and '${food2}'.`,
    question: `
Find most popular recipe with using '${food1}' and '${food2}'.
Response should be in the following JSON format with no additional characters.
JSON value should be in translated with Japanese.
{
    "recipe": {
        "food1": "${food1}",
        "food2": "${food2}",
        "recipeName": "",
        "description": "",
        "steps": [
            "cooking step 1", "cooking step2", "cooking step3",
        ]
    }
}

If you cant find the recipe info on exact '${food1}' and '${food2}', does not food '${food1}' or '${food2}',
Response should be in the following JSON format with no additional characters:
{
    "recipe": null
}
`.trim(),
  };
};
