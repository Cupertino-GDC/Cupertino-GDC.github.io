var database;
var $cardContainer;

$(document).ready(function() {
  // https://api.myjson.com/bins/1buhog
  $.getJSON("https://spreadsheets.google.com/feeds/list/1eN4QdQsat7hAwOtL9JosW0erkS1kAX1G-iWFXVMrPi8/od6/public/values?alt=json", function(data) {
    database = data.feed.entry;
    $cardContainer = $("#card-container");
    for(i = 0; i < database.length; i++) {
      createCard(i);
    }
  });
});

function beginSearch() {
  var input = document.getElementById("gamesearch");
  var x = event.which || event.keyCode;
  if (x === 13) {
    let selectedIndices = getIdeaIndexes(input.value);
    console.log(selectedIndices.toString());
    $cardContainer.empty();

    selectedIndices.forEach(function(currentValue) {
      createCard(currentValue)
    });
    input.value = "";
  }
}

function getIdeaIndexes(query) {
  let indexes = [];
  // example: data.feed.entry[1]['gsx$name']['$t']);
  for(i = 0; i < database.length; i++) {
    let name = database[i]['gsx$name']['$t'];
    if(name.includes(query)) {
      indexes.push(i);
    }
  }

  return indexes;
}

function openIdea(link) {
  window.open(link);
}

function createCard(itemIndex) {
  let str = `<div class="game-idea-item">
    <img src="imgs/ph0s.jpg" alt="img" style="height: 100%; ">
    <div class="game-idea-overlay" onclick="openIdea('yahoo.com')">
      <div class="game-idea-title">
        Bruh Bruh
      </div>
      <div class="game-idea-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  </div>`;
  let $card = $(document.createRange().createContextualFragment(str));
  let $cardChildren = $card.children().eq(0).children();
  $cardChildren.eq(0).attr("src", database[itemIndex]['gsx$image']['$t']);
  $cardChildren.eq(1).attr("onclick", "openIdea('" + database[itemIndex]['gsx$link']['$t'] + "')")
  $cardChildren.eq(1).children().eq(0).text(database[itemIndex]['gsx$name']['$t']);
  $cardChildren.eq(1).children().eq(1).text(database[itemIndex]['gsx$description']['$t']);
  console.log($card.outerHTML);
  $card.appendTo($cardContainer);
}
