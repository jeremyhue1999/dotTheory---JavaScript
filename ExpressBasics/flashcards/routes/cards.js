const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];

  const templateData = { id, text, name };
  if (side === "question") {
    templateData.hint = hint;
    templateData.sideToShow = "answer";
    templateData.sideToShowDisplay = "Answer";
  } else if (side === "answer") {
    templateData.sideToShow = "question";
    templateData.sideToShowDisplay = "Question";
  }
  res.render("card", templateData);
});

router.get("/", (req, res) => {
  res.redirect(`/cards/${~~(Math.random() * cards.length)}`);
});

module.exports = router;
